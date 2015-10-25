(function(document) {

    window.standardFeedback = {
        correct: 'Correct!',
        wrong: 'Not quite, try another answer!'
    };
    app.startOverlay = 0;
    window.app = new App(
        'app',
        function() {
            console.log('Unit loaded!', app.unit);
            app.startOverlay = app.unit.overlays[0].id;
            window.standardReaction = {
                type: 'showOverlay',
                target: app.startOverlay
            };
        },
        function() {
            app.overlays.show(app.startOverlay);
        });
})(document);
