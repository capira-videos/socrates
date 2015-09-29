(function() {
	// extends the base class VideoPlayerBase
    var _super= VideoPlayerBase.prototype;

    // ############## Declarations ################

    VideoPlayerYoutube.prototype.loadVideo = loadVideo;
    VideoPlayerYoutube.prototype.play = play;
    VideoPlayerYoutube.prototype.pause = pause;
    VideoPlayerYoutube.prototype.seekTo = seekTo;
    VideoPlayerYoutube.prototype.getCurrentTime = getCurrentTime;
    VideoPlayerYoutube.prototype.isPlaying = isPlaying;
    VideoPlayerYoutube.prototype.destroy = destroy;
    VideoPlayerYoutube.prototype._onStateChange = _onStateChange;
    VideoPlayerYoutube.prototype._videoChanged = _videoChanged;



    // ############# Implementations ###############

    /**
     * Changes the current video to another video.
     * @memberOf video-players/VideoPlayerYoutube#
     * @param {object} videoParams - an object describing the video to be loaded
     * @param {string} videoParams.type - must be 'youtube'
     * @param {string} videoParams.source - the video source
     * @returns {boolean} Returns true if the video was changed. It returns false especially when the requested video
     * uses another video player implementation.
     */
    function loadVideo(videoParams) {
        if (!_super.loadVideo.call(this, videoParams)) {
            return false;
        }
        this.executeWhenPlayerReady(function() {
            this._youtubePlayer.loadVideoById(videoParams.source);
            this._videoChanged();
        });
        return true;
    }

    /**
     * Starts playing the video.
     */
    function play() {
        this.executeWhenPlayerReady(function() {
            this._youtubePlayer.playVideo();
        });
    }

    function pause() {
        this.executeWhenPlayerReady(function() {
            this._youtubePlayer.pauseVideo();
        });
    }

    function seekTo(time) {
        this.executeWhenPlayerReady(function() {
        	_super.seekTo.call(this, time);
            this._youtubePlayer.seekTo(time, true);
        });
    }

    function getCurrentTime() {
        if (this._playerReady) {
            return this._youtubePlayer.getCurrentTime();
        } else {
            return 0;
        }
    }

    function isPlaying() {
        return this._youtubePlayer.getPlayerState() === YT.PlayerState.PLAYING;
    }

    function destroy() {
        this._youtubePlayer.destroy();
        _super.destroy.call(this);
    }

    function _onStateChange(event) {
        var state = event.data;
        if (state === YT.PlayerState.PLAYING) {
            this._triggerEvent('play');
        } else {
            this._triggerEvent('pause');
        }
    }

    function _videoChanged() {
        var that = this;
        var newDuration = this._youtubePlayer.getDuration();
        if (newDuration) {
            this._duration = newDuration;
            this._triggerEvent('videochange');
        } else {
            window.setTimeout(function() {
                that._videoChanged();
            }, 200);
        }
    }

})();

VideoPlayerYoutube.apiReady = true;

// Initialize the player with the complete API.
// This is somewhat hacky as it assumes that there is exactly one global player.
// If you want to support more players you have to implement a nicer solution
if (window.player && window.player.constructor === VideoPlayerYoutube) {
	player.initializeWithCompleteApi();
}