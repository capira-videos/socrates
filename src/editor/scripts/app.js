'use strict';
(function(document) {
    window.standardReaction = {
        type: 'play'
    };
    var startOverlay = 0;


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
            app.unitEditor.fire('edit-state','default');
        });

        /*
        var overlaysWizard = document.querySelector('overlays-wizard');
        var createOverlayButton = document.querySelector('create-overlay-button');

        overlaysWizard.addEventListener('overlay-created', function(e) {
            var overlay = e.detail;
            console.log('created', overlay);
            overlaysManager.addOverlay(overlay);
            setTimeout(function() {
                overlaysManager.show(overlay.id);
            }, 200);
        });

*/
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
