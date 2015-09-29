'use strict';

window.requestAnimationFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {
        window.setTimeout(callback, 1000 / 60);
    };

window.inIFrame = (function() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
})();

window.Capira = window.Capira || {};
window.debug = window.debug || {};
window.isPlayer = /^\/(video-)?quiz\//.test(window.location.pathname);
window.isEditor = window.location.pathname.indexOf('/editor/') > -1;

window.Capira.combineBehaviors = function(coreBehaviours, playerBehaviours, editorBehaviours) {
    if (typeof coreBehaviours === 'undefined') {
        coreBehaviours = [];
    }
    if (typeof playerBehaviours === 'undefined') {
        playerBehaviours = [];
    }
    if (typeof editorBehaviours === 'undefined') {
        editorBehaviours = [];
    }
    if (coreBehaviours.constructor !== Array) {
        coreBehaviours = [coreBehaviours];
    }
    if (playerBehaviours.constructor !== Array) {
        playerBehaviours = [playerBehaviours];
    }
    if (editorBehaviours.constructor !== Array) {
        editorBehaviours = [editorBehaviours];
    }
    if (window.isPlayer) {
        return coreBehaviours.concat(playerBehaviours);
    } else if (window.isEditor) {
        return coreBehaviours.concat(editorBehaviours);
    }
};

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



    // Listen for template bound event to know when bindings
    // have resolved and content has been stamped to the page
    element.addEventListener('dom-change', function() {
        console.log("we are ready to rock!");
        element.overlays = document.getElementById('overlays');
        element.sounds = document.getElementById('sounds');
        element.resizeNow();
        element.fire('ready-to-rock');
    });


    return element;
}
