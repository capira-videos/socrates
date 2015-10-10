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
        app.service = document.querySelector('editor-service');
        app.sounds = document.querySelector('quiz-sounds');
        app.protector = document.querySelector('changes-protector');

        app.service.addEventListener('unit-loaded', function() {
            console.log('unit-loaded!');
            window.dispatchEvent(new Event('resize'));
        });

        app.overlays.addEventListener('home-state', function() {
            app.unitEditor.fire('edit-state', 'default');
        });

        app.unitEditor.addEventListener('unit-saved',function(){
            app.protector.reset();
        });

        //remove editor splash
        setTimeout(function() {
            document.getElementById('sp').innerHTML = '';
        }, 400);


    });

})(document);
