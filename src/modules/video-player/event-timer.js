'use strict';
window.EventTimer = function(videoPlayer,callback) {
    var eventTimer = null;
    var oldTime = 0;
    var refreshRate = 25; //ms (50s^-1)
    var delay = 0.2; //s 
    var timerAssignDelay = null;

    var timerStep = function() {
        var newTime = videoPlayer.getCurrentTime() + delay;
        if (newTime === oldTime) { // the timerStep gets called quite often to be able to react to timer events asap.
            return; // However the player.getCurrentTime method does not update as often so we get newTime==oldTime
        } // fairly often. Obviously in this case we do not need to do any computations.

        if (newTime > oldTime + 1) {
            //seek occured 
            //TODO solve this more robust
            oldTime = newTime;
            return;
        }
        // show transcended overlays
        // conditions:
        selectOverlays(oldTime, newTime).forEach(function(overlay) {
            switch (overlay.event.type) {
                case 'STOP':
                case 'PLAYAFTER':
                    // pause player & show overlay
                    var a = overlay.event.start;
                    // conditions:
                    // old < a <= new
                    if (oldTime < a && a <= newTime) {
                        videoPlayer.pause();
                        videoPlayer.seekTo(a);
                        callback('show', overlay);
                        var newDelay = newTime - a; // TODO delay exakter berechnen nachdem Video pausiert ist
                        // TODO seek to correct position if delay is to big
                        // calc new delay by midpoint
                        var assignDelay = (delay + newDelay) / 2.0;
                        console.log('delay:' + parseInt(delay * 1000) + '->' + parseInt(newDelay * 1000));
                        var time = videoPlayer.getCurrentTime();
                        // assign or install new delay
                        if (delay > assignDelay) { // if the new delay is smaller than the old delay, we assign it in a
                            timerAssignDelay = { // later timerStep to avoid that the current overlay gets shown again
                                'time': newTime + delay - assignDelay, // for the new shorter delay
                                'delay': assignDelay
                            };
                        } else {
                            delay = assignDelay;
                        }
                        oldTime = time + delay;
                    }
                    return;
                case 'HIDEAFTER':
                    var a = overlay.event.start;
                    var b = overlay.event.duration;
                    // show overlay
                    // conditions:
                    // either   old < a <= new <= b
                    // or       a <= new <= b < old
                    if (oldTime < a && a <= newTime && newTime <= b || a <= newTime && newTime <= b && b < oldTime) {
                        callback('show', overlay);
                    } else
                    // hide overlay
                    // conditions:
                    // either   a <= old <= b < new
                    // or       new < a <= old <= b
                    if (a <= oldTime && oldTime <= b && b <= newTime || newTime < a && a <= oldTime && oldTime <= b) {
                        callback('hide', overlay);
                    }
                    break;
                default:
                    console.error('overlay.type=`' + overlay.event.type + '` not yet implemented.');
            }
        });
        if (timerAssignDelay && newTime > timerAssignDelay.time) {
            delay = timerAssignDelay.delay;
            timerAssignDelay = null;
        }
        oldTime = newTime;
    };
    // number^2 -> object[]
    var selectOverlays = function(oldTime, newTime) {
        // which overlays are inside the pacing time ?
        var a = Math.min(oldTime, newTime);
        var b = Math.max(oldTime, newTime);
        if (!app.unit || !app.unit.overlays) {
            return [];
        }
        return app.unit.overlays.filter(function(overlay) {
            if (!overlay.event) {
                return false;
            }
            switch (overlay.event.type) {
                case 'STOP':
                case 'PLAYAFTER':
                    // `A < s < D'
                    return a <= overlay.event.start && overlay.event.start <= b;
                case 'HIDEAFTER':
                    // `S < a < D' or `S < b < D'
                    return overlay.event.start <= a && a <= overlay.event.duration || overlay.event.start <= b && b <= overlay.event.duration;
                case 'NO-TIMER':
                    return false;
                default:
                    console.error('overlay.type=`' + overlay.event.type + '` not yet implemented.');
                    return false;
            }
        });
    };

    var eventTimerMethods = {
        start: function() {
            clearInterval(eventTimer);
            oldTime = videoPlayer.getCurrentTime();
            eventTimer = setInterval(timerStep, refreshRate);
        },
        pause: function() {
            clearInterval(eventTimer);
        },
        seekTo: function(seekTarget) { // seekTarget may be a time in seconds or an overlay
            if (typeof(seekTarget) === 'number') { // a time in seconds
                videoPlayer.seekTo(seekTarget, true);
            } else {
                var overlay = seekTarget;
                switch (overlay.event.type) {
                    case 'STOP':
                    case 'PLAYAFTER':
                        app.player.pause();
                        break;
                }
                videoPlayer.seekTo(overlay.event.start, true);
                callback('show', overlay);
            }
        }
    };
    return eventTimerMethods;
};
