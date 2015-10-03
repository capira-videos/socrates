'use strict';
(function(document) {
    window.standardReaction = {
        type: 'play'
    };
    window.standardFeedback = {
        correct: 'Gut gemacht!',
        wrong: 'Nicht ganz, versuch\'s nochmal!'
    };

    app.addEventListener('dom-change', function() {
        window.app = document.querySelector('#app');
        app.service = document.querySelector('editor-service');
        app.service.addEventListener('unit-loaded', function() {
            console.log('loaded', app.unit);
        });


        app.overlays = document.querySelector('overlays-manager');
        app.sounds = document.querySelector('quiz-sounds');
        app.playerManager = document.querySelector('video-player');


        window.addEventListener('resize', function() {
            window.resizer(null, document.getElementById('main'));
        });
    });
})(document);
