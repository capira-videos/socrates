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

    new App('app');


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

})(document);
