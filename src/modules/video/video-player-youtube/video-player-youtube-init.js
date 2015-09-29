/* jshint latedef:nofunc */

/**
 * This is a concrete video player implementation which extends VideoPlayerBase.
 * It can handle youtube videos.
 * If ou want to play around with the youtube own API, this simple fiddle might be nice:
 * http://jsfiddle.net/jeffposnick/yhWsG/3/
 */
window.VideoPlayerYoutube = (function() {

    // ############## Variables ############

    // _youtubePlayer



    // ############## Constructor ##########

    /**
     * Extends the base class VideoPlayerBase
     * @memberOf module:video-players
     * @param videoParams
     * @param domElement
     * @constructor
     */
    function VideoPlayerYoutube(videoParams, domElement) {
        VideoPlayerBase.call(this, {
            type: 'youtube',
            source: videoParams.source
        }, domElement);
        __init.call(this);
    }
    VideoPlayerYoutube.prototype = Object.create(VideoPlayerBase.prototype, {
        constructor: {
            value: VideoPlayerYoutube,
            enumerable: false
        }
    });

    function __init() {
        if (!window.YT) { // load the API
            var that = this;
            window.onYouTubeIframeAPIReady = function() {
                __createYoutubePlayer.call(that);
            };
            var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        } else {
            __createYoutubePlayer.call(this);
        }
    }

    function __createYoutubePlayer() {
        var that = this;
        that._youtubePlayer = new window.YT.Player(that._domElement, {
            width: '100%',
            height: '100%',
            videoId: that._source,
            playerVars: {
                'html5': 1,
                'enablejsapi': 1,
                'fs': 0,
                'showinfo': 0,
                'rel': '0',
                'suggestedQuality': 'large',
                'disablekb': 1,
                'controls': 0,
                'cc_load_policy': 0,
                'playsinline': 1
            },
            events: {
                'onReady': function(){
                    that._setReady();
                    // execute when player and api ready:
                    that.executeWhenPlayerReady(that._videoChanged);
                },
                'onStateChange': function(event){
                    that.executeWhenPlayerReady(function() {
                        that._onStateChange(event);
                    });
                }
            }
        });
    }

    return VideoPlayerYoutube;
})();
