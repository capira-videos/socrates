'use strict';
(function() {
    window.Polymer = {
        //dom: 'shady'
        dom: 'shadow'
    };
    window.requestAnimFrame = (function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    window.inIframe = (function() {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    })();

    window.Capira = window.Capira || {};
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

    window.resizer = function(container, main) {

        var width = container ? container.offsetWidth : 0;
        var height = container ? container.offsetHeight : 0;

        width = width || window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        height = height || window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        if (height < 190) {
            width = window.screen.width;
            height = window.screen.height;
        }
   
        if (height * 16.0 / 9 > width) {
            height = width * 9.0 / 16;
        } else {
            width = height * 16.0 / 9;
        }
        window.scalingFactor = width / 800;

        var s = main.style;
        s.height = height + 'px';
        s.width = width + 'px';
    };
})();
