'use strict';
(function(document) {
    window.isPlayer = true;
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
        app.overlays = document.querySelector('overlays-manager');
        app.sounds = document.querySelector('quiz-sounds');
        app.playerManager = document.querySelector('video-player');

        app.service.addEventListener('unit-loaded', function() {
            console.log('loaded', app.unit);
        });
        
        window.addEventListener('resize', function() {
            window.resizer(null, document.getElementById('main'));
        });
    });
})(document);
