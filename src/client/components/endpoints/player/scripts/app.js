'use strict';
window.isPlayer = true;
(function(document) {
    window.app = document.querySelector('#app');
    window.standardReaction = {
        type: 'play'
    };
    window.standardFeedback = {
        correct: 'Gut gemacht!',
        wrong: 'Nicht ganz, versuch\'s nochmal!'
    };
    window.addEventListener('resize', function() {
        window.resizer(null, document.getElementById('main'));
    });


    app.addEventListener('dom-change', function() {
        window.resizer(null, document.getElementById('main'));
        window.app = document.querySelector('#app');
        app.service = document.querySelector('capira-service');
        app.overlays = document.querySelector('overlays-manager');
        app.sounds = document.querySelector('quiz-sounds');
        app.playerManager = document.querySelector('video-player');

        app.service.addEventListener('unit-loaded', function() {
            console.log('loaded', app.unit);
        });

        app.playerManager.addEventListener('show-overlay', function(e) {
            app.overlays.show(e.detail);
        }.bind(this));

        app.playerManager.addEventListener('hide-overlay', function(e) {
            app.overlays.hide(e.detail);
        }.bind(this));

        app.playerManager.addEventListener('video-ended', function() {
            if (window.iFrameAPI) {
                iFrameAPI.sendJSON({ unit: app.unit._id });
            };
        })
    });
})(document);
