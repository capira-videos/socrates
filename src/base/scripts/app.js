'use strict';

function App(elemId) {
    var element = document.querySelector('#app');


    function resize() {
        // although the aspect ratio is also set via css style via viewport units, we also set it 
        // with fixed pixel values, as viewport units have issues on older browsers or are not supported.
        var container = document.getElementById(elemId);

        var w = container.offsetWidth;
        var h = container.offsetHeight;

        w = w || window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        h = h || window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        if (h < 190) {
            w = window.screen.width;
            h = window.screen.height;
        }
        var width = w;
        var height = h;
        var bottomOffset = 0;
        height = height - bottomOffset;

        if (height * 16.0 / 9 > width) {
            height = width * 9.0 / 16;
        } else {
            width = height * 16.0 / 9;
        }
        window.scalingFactor = width / 800;

        var s = document.getElementById('main').style;
        s.height = (height + bottomOffset) + 'px';
        s.width = (width) + 'px';
    }

    window.addEventListener('resize', resize);
    element.resizeNow = function() {
        window.dispatchEvent(new Event('resize'));
    };

    element.addEventListener('unit-loaded', function() {
        app.set('unit', window.unit);
        console.log('Unit loaded!', app.unit);
    });

    (function loadUnit() {
        var unitId = window.location.hash.substr(1) || 6;
        var xmlhttp = new XMLHttpRequest();
        var url = '/api/unit/' + unitId;
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                try {
                    window.unit = JSON.parse(xmlhttp.responseText);
                    element.dispatchEvent(new Event('unit-loaded'));
                } catch (e) {
                    console.warn(e);
                }
            }
        };
        xmlhttp.open('GET', url, true);
        xmlhttp.send();
    })();


    // Listen for template bound event to know when bindings
    // have resolved and content has been stamped to the page
    element.addEventListener('dom-change', function() {
        window.app = document.querySelector('#app');

        console.log('we are ready to rock!');
        app.overlays = document.querySelector('overlays-manager');
        app.sounds = document.querySelector('quiz-sounds');
        app.resizeNow();
        app.fire('ready-to-rock');






    });





    return app;
}
