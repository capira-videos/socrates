'use strict';
window.isPlayer = true;
(function(document) {
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
    window.resizer(null, document.getElementById('main'));
    app.addEventListener('dom-change', function() {
        window.app = document.querySelector('#app');
        app.service = document.querySelector('capira-service');
        app.overlays = document.querySelector('overlay-manager');
        app.sounds = document.querySelector('quiz-sounds');
        app.playerManager = document.querySelector('video-player');

        app.service.addEventListener('unit-loaded', function() {
            console.log('loaded', app.unit);
        });
    });
})(document);
