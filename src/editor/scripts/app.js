'use strict';
(function(document) {
    window.standardReaction = {
        type: 'play'
    };

    window.app = document.querySelector('#app');

    app.addEventListener('dom-change', function() {
        window.app = document.querySelector('#app');

        app.overlays = document.querySelector('overlay-edit-pages-manager');
        app.unitEditor = document.querySelector('unit-edit-page');
        app.service = document.querySelector('editor-service');
        app.sounds = document.querySelector('quiz-sounds');

        app.service.addEventListener('unit-loaded', function() {
            console.log('unit-loaded!');
            window.dispatchEvent(new Event('resize'));
        });

        app.overlays.addEventListener('home-state', function() {
            app.unitEditor.fire('edit-state', 'default');
        });

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

})(document);
