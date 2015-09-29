(function(document) {
    window.standardReaction = [{
        type: 'hideOverlay'
    }, {
        type: 'play'
    }];
    window.standardFeedback = {
        correct: 'Gut gemacht!',
        wrong: 'Nicht ganz, versuch\'s nochmal!'
    };
    var startOverlay = 0;


    (function loadUnit() {
        var unitId = window.location.hash.substr(1) || 5;
        var xmlhttp = new XMLHttpRequest();
        var url = '/api/unit/' + unitId;
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                try {
                    app.unit = JSON.parse(xmlhttp.responseText);
                    app.dispatchEvent(new Event('unit-loaded'));
                } catch (e) {
                    console.warn(e);
                }
            }
        };
        xmlhttp.open('GET', url, true);
        xmlhttp.send();
    })();

    app.addEventListener('unit-loaded', function() {
        console.log('Unit loaded!', app.unit);

        window.player = new VideoPlayerYoutube({
            source: app.unit.video.source
        }, document.getElementById('video-player').firstChild);

        window.app = new App('app');
        app.player = window.player;
    });

    document.addEventListener('eventtimer-ready', function() {
        app.player.setEventTimerCallback(function(type, overlay) {
            switch (type) {
                case 'show':
                    app.overlays.show(overlay.id);
                    break;
                case 'hide':
                    app.overlays.hide(overlay.id);
                    break;
            }
        });
    });


    // window.setTimeout(function() {
    //     app.unit=window.unit;
    //     app.dispatchEvent(new Event('unit-loaded'));
    // }, 0);

})(document);
