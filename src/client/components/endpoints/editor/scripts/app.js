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
        app.unitEditor = document.querySelector('unit-edit-page');
        app.service = document.querySelector('capira-service');
        app.sounds = document.querySelector('quiz-sounds');
        app.protector = document.querySelector('changes-protector');
        app.videoSelector = document.querySelector('video-selector');

        app.service.addEventListener('unit-loaded', function(e) {
            var lesson = e.detail;
            console.log(e.detail);
            //if not yet set, set videoId
            if (lesson.notInitialized) {
                app.videoSelector.open();
            }
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

        app.unitEditor.addEventListener('show-overlay', function(e) {
            app.overlays.show(e.detail);
        }.bind(this));

        app.unitEditor.addEventListener('hide-overlay', function(e) {
            app.overlays.hide(e.detail);
        }.bind(this));

        //remove editor splash
        setTimeout(function() {
            document.getElementById('sp').innerHTML = '';
        }, 400);
    });

})(document);
