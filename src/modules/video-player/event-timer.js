'use strict';
window.EventTimer = (function() {
    var callback = function() {};
    var eventTimer = null;
    var oldTime = 0;
    var refreshRate = 25; //ms (50s^-1)
    var delay = 0.2; //s `default delay 0.13' // TODO read from local storage
    var timerAssignDelay = null;
    // stop-annotations should then not be triggered
    var videoPlayer = null;

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
            switch (overlay.events[0].type) {
                case 'STOP':
                case 'PLAYAFTER':
                    // pause player & show overlay
                    var a = overlay.events[0].start;
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
                    var a = overlay.events[0].start;
                    var b = overlay.events[0].duration;
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
                    console.error('overlay.type=`' + overlay.events[0].type + '` not yet implemented.');
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
            if (!overlay.events) {
                return false;
            }
            switch (overlay.events[0].type) {
                case 'STOP':
                case 'PLAYAFTER':
                    // `A < s < D'
                    return a <= overlay.events[0].start && overlay.events[0].start <= b;
                case 'HIDEAFTER':
                    // `S < a < D' or `S < b < D'
                    return overlay.events[0].start <= a && a <= overlay.events[0].duration || overlay.events[0].start <= b && b <= overlay.events[0].duration;
                case 'NO-TIMER':
                    return false;
                default:
                    console.error('overlay.type=`' + overlay.events[0].type + '` not yet implemented.');
                    return false;
            }
        });
    };

    var eventTimerMethods = {
        start: function() {
            videoPlayer = app.player;
            // clear timer
            clearInterval(eventTimer);
            // start timer
            oldTime = videoPlayer.getCurrentTime();
            eventTimer = setInterval(timerStep, refreshRate);
        },
        setCallback: function(newCallback) {
            callback = newCallback;
        },
        pause: function() {
            // clear timer
            clearInterval(eventTimer);
        },
        seekTo: function(seekTarget) { // seekTarget may be a time in seconds or an overlay
            if (typeof(seekTarget) === 'number') { // a time in seconds
                videoPlayer.seekTo(seekTarget, true);
            } else {
                var pause;
                var overlay = seekTarget;
                switch (overlay.events[0].type) {
                    case 'STOP':
                    case 'PLAYAFTER':
                        pause = true;
                        break;
                    case 'HIDEAFTER':
                    default:
                        pause = false;
                }
                videoPlayer.seekTo(overlay.events[0].start, true);
                callback('show', overlay);
            }
        }
    };
    return eventTimerMethods;
})();
