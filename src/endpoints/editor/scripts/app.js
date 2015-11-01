'use strict';
(function(document) {
    window.isEditor = true;
    window.standardReaction = {
        type: 'play'
    };

    window.app = document.querySelector('#app');

    app.addEventListener('dom-change', function() {
        window.app = document.querySelector('#app');

        app.overlays = document.querySelector('pages-manager');
        app.unitEditor = document.querySelector('unit-quiz-single-answer-editor-page');
        app.service = document.querySelector('capira-service');
        app.sounds = document.querySelector('quiz-core-sounds');
        app.protector = document.querySelector('changes-protector');

        app.service.addEventListener('unit-loaded', function() {
            console.log('unit-loaded!');
            window.dispatchEvent(new Event('resize'));
        });

        app.overlays.addEventListener('home-state', function() {
            app.unitEditor.fire('edit-state', 'default');
        });

        app.overlays.addEventListener('hide-unit', function() {
            app.unitEditor.fire('edit-state', 'overlay');
        });

        app.overlays.addEventListener('overlay-created', function(e) {
            app.unitEditor.fire('overlay-created', e.detail);
        });

        app.unitEditor.addEventListener('unit-saved', function() {
            app.protector.reset();
        });

        //remove editor splash
        setTimeout(function() {
            document.getElementById('sp').innerHTML = '';
        }, 400);
    });

})(document);
