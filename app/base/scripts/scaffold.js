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


    window.Capira.selectBehaviors = (function() {
        function preprocess(behavior) {
            if (!behavior) {
                return [];
            }
            if (behavior.constructor !== Array) {
                return [behavior];
            }
            return behavior;
        }

        return function(behaviors) {
            if (behaviors) {
                if (window.isEditor) {
                    return preprocess(behaviors.core).concat(preprocess(behaviors.editor));
                } else {
                    return preprocess(behaviors.core).concat(preprocess(behaviors.player));
                }
            } else {
                console.err('behaviors empty!');
            }
        };
    })();

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

    window.resizeNow = function() {
        window.dispatchEvent(new Event('resize'));
    };

    String.prototype.hashCode = function() {
        var hash = 0,
            i, chr, len;
        if (this.length === 0) {
            return hash;
        }
        for (i = 0, len = this.length; i < len; i++) {
            chr = this.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    };
})();
