(function() {
	// ################# Declarations ##################

	VideoPlayerBase.prototype.initializeWithCompleteApi = initializeWithCompleteApi;
	VideoPlayerBase.prototype._flushExecuteQueue = _flushExecuteQueue;
	VideoPlayerBase.prototype.isReady = isReady;
	VideoPlayerBase.prototype.hasStarted = hasStarted;
	VideoPlayerBase.prototype.on = on;
	VideoPlayerBase.prototype.once = once;
	VideoPlayerBase.prototype.off = off;
	VideoPlayerBase.prototype._triggerEvent = _triggerEvent;
	VideoPlayerBase.prototype.loadVideo = loadVideo;
	VideoPlayerBase.prototype.play = play;
	VideoPlayerBase.prototype.pause = pause;
	VideoPlayerBase.prototype.toggle = toggle;
	VideoPlayerBase.prototype.isPlaying = isPlaying;
	VideoPlayerBase.prototype.seekTo = seekTo;
	VideoPlayerBase.prototype.getDuration = getDuration;
	VideoPlayerBase.prototype.getCurrentTime = getCurrentTime;
	VideoPlayerBase.prototype.setVolume = setVolume;
	VideoPlayerBase.prototype.mute = mute;
	VideoPlayerBase.prototype.unmute = unmute;
	VideoPlayerBase.prototype.toggleMute = toggleMute;
	VideoPlayerBase.prototype.setQuality = setQuality;
	VideoPlayerBase.prototype.setPlaySpeed = setPlaySpeed;
	VideoPlayerBase.prototype.getAspectRatio = getAspectRatio;
	VideoPlayerBase.prototype.getType = getType;
	VideoPlayerBase.prototype.getSource = getSource;
	VideoPlayerBase.prototype.destroy = destroy;
	VideoPlayerBase.prototype._startTimeChangedTimer = _startTimeChangedTimer;



	// ################### Implementations #####################

	/**
	 * This method gets called as soon as the API is ready.
	 * @memberOf module:video-players.VideoPlayerBase#
	 */
	function initializeWithCompleteApi() {
		if (this._playerReady) {
			this._flushExecuteQueue();
			this._triggerEvent('ready');
		}

		var that = this;
		this.on('play', function() {
			that._startTimeChangedTimer();
			if (!that._started) {
				that._started = true;
				that._triggerEvent('start');
			}
		});

		this.on('pause', function() {
			clearInterval(that._timeChangedTimer);
		});
	}

	/**
	 * Perform and empty the execute queue.
	 * @memberOf module:video-players.VideoPlayerBase#
	 */
	function _flushExecuteQueue() {
		for (var i=0; i<this._executeQueue.length; ++i) {
			this._executeQueue[i].call(this);
		}
		delete this._executeQueue;
	}

	/**
	 * Register an event listener for an event type.
	 * Supported Event-Types:
	 * <br/> - play
	 * <br/>  - pause
	 * <br/>  - start
	 * <br/>  - finish
	 * <br/>  - ready
	 * <br/>  - seek
	 * <br/>  - timechange
	 * <br/>  - videochange
	 *
	 * @param {string} event - event type to be registered.
	 * @param {function} action - event listener to be registered.
	 * @this module:video-players.VideoPlayerBase
	 * @memberOf module:video-players.VideoPlayerBase#
	 */
	function on(event, action) {
		if (!this._eventListeners[event]) {
			this._eventListeners[event]=[];
		}
		this._eventListeners[event].push(action);
	}

	/**
	 * Register an event listener for an event type and unregister it automatically after first trigger.
	 * It supports the same events as [on()]{@link module:video-players.VideoPlayerBase#on}
	 * @param {string} event - event type to be registered.
	 * @param {function} action - event listener to be registered.
	 * @this module:video-players.VideoPlayerBase
	 * @memberOf module:video-players.VideoPlayerBase#
	 */
	function once(event, action) {
		var that = this;
		var triggerOnce = function() {
			action();
			that.off(event, triggerOnce);
		};
		this.on(event, triggerOnce);
	}

	/**
	 * Unregisteres a registered event listener or all event listeners for a specific event.
	 * @param {string} event - event type
	 * @param {function} [action] - event listener to be unregistered
	 * @this module:video-players.VideoPlayerBase
	 * @memberOf module:video-players.VideoPlayerBase#
	 */
	function off(event, action) {
		if (this._eventListeners[event]) {
			if (!action) { // remove all registered actions for that event type
				this._eventListeners[event] = [];
			} else {
				var index = this._eventListeners[event].indexOf(action);
				if (index!==-1) {
					this._eventListeners[event].splice(index,1);
				}
			}
		}
	}

	/**
	 * Trigger all event listeners for a specific event. Additional data can be handed over to the event listeners.
	 * @param {string} event - event type to be triggered
	 * @param {object} [data] - any data that should be handed over to the event listeners
	 * @this module:video-players.VideoPlayerBase
	 * @memberOf module:video-players.VideoPlayerBase#
	 */
	function _triggerEvent(event, data) {
		var eventListeners = this._eventListeners[event];
		if (!eventListeners) {
			return;
		}
		eventListeners = eventListeners.slice(); // create a copy of the array such that when an eventListener removes
		// itself or another eventListener no eventListeners get skipped.
		for (var i=0; i<eventListeners.length; ++i) {
			eventListeners[i](data);
		}
	}

	/**
	 * Load another video defined by its video parameters.
	 * @param {object} videoParams - an object describing the video to be loaded
	 * @param {string} videoParams.type - video type, e.g. 'youtube'
	 * @param {string} videoParams.source - the video source
	 * @returns {boolean} False if video was not changed (i.e. because it is another video source)
	 * @this module:video-players.VideoPlayerBase
	 * @memberOf module:video-players.VideoPlayerBase#
	 */
	function loadVideo(videoParams) {
		if (videoParams.type !== this._type || this._source===videoParams.source) {
			return false;
		}
		this._source = videoParams.source;
		return true;
	}

	/**
	 * Play the video.
	 * @this module:video-players.VideoPlayerBase
	 * @memberOf module:video-players.VideoPlayerBase#
	 */
	function play() {
		throw new Error('not implemented yet');
	}

	/**
	 * Pause the video.
	 * @this module:video-players.VideoPlayerBase
	 * @memberOf module:video-players.VideoPlayerBase#
	 */
	function pause() {
		throw new Error('not implemented yet');
	}

	/**
	 * Toggle playback.
	 * @this module:video-players.VideoPlayerBase
	 * @memberOf module:video-players.VideoPlayerBase#
	 */
	function toggle() {
		if (this.isPlaying()) {
			this.pause();
		} else {
			this.play();
		}
	}

	/**
	 * Get the current playing state of the video.
	 * @returns {boolean} True if the player is playing. Any other state, including buffering returns false.
	 * @this module:video-players.VideoPlayerBase
	 * @memberOf module:video-players.VideoPlayerBase#
	 */
	function isPlaying() {
		throw new Error('not implemented yet');
	}

	/**
	 * Seek to time in seconds
	 * @param {number} time - time in seconds
	 * @this module:video-players.VideoPlayerBase
	 * @memberOf module:video-players.VideoPlayerBase#
	 */
	function seekTo(time) {
		this._triggerEvent('timechange', time);
		this._startTimeChangedTimer();
	}

	/**
	 * Get the total duration of the video.
	 * @returns {number} The duration in seconds or 1, if the video is not ready yet.
	 * @this module:video-players.VideoPlayerBase
	 * @memberOf module:video-players.VideoPlayerBase#
	 */
	function getDuration() {
		return this._duration || 1; // returning 1 as one has oftentimes currentTime/duration
	}

	/**
	 * Get the current time of video playback.
	 * @returns {number} The current time of the video playback.
	 * @this module:video-players.VideoPlayerBase
	 * @memberOf module:video-players.VideoPlayerBase#
	 */
	function getCurrentTime() {
		throw new Error('not implemented yet');
	}

	/**
	 * Set the volume of the video.
	 * @param {number} volume - volume level between 0 and 100
	 * @this module:video-players.VideoPlayerBase
	 * @memberOf module:video-players.VideoPlayerBase#
	 */
	function setVolume(volume) {
		throw new Error('not implemented yet');
	}

	/**
	 * Mute the video.
	 * @this module:video-players.VideoPlayerBase
	 * @memberOf module:video-players.VideoPlayerBase#
	 */
	function mute() {
		throw new Error('not implemented yet');
	}

	/**
	 * Unmute the video.
	 * @this module:video-players.VideoPlayerBase
	 * @memberOf module:video-players.VideoPlayerBase#
	 */
	function unmute() {
		throw new Error('not implemented yet');
	}

	/**
	 * Toggle the mute.
	 * @this module:video-players.VideoPlayerBase
	 * @memberOf module:video-players.VideoPlayerBase#
	 */
	function toggleMute() {
		throw new Error('not implemented yet');
	}

	/**
	 * Set the quality of the video.
	 * @param {string} quality - can be highres, hd1080, hd720, large, medium or small
	 * @this module:video-players.VideoPlayerBase
	 * @memberOf module:video-players.VideoPlayerBase#
	 */
	function setQuality(quality) {
		throw new Error('not implemented yet');
	}

	/**
	 * Set the play speed of the video.
	 * @param {number} speed - playback speed. Normal playback rate is 1.
	 * @this module:video-players.VideoPlayerBase
	 * @memberOf module:video-players.VideoPlayerBase#
	 */
	function setPlaySpeed(speed) {
		throw new Error('not implemented yet');
	}

	/**
	 * Get the aspect ratio of the video.
	 * @returns {number} Aspect ratio as floating number, eg. 16/9
	 * @this module:video-players.VideoPlayerBase
	 * @memberOf module:video-players.VideoPlayerBase#
	 */
	function getAspectRatio() {
		throw new Error('not implemented yet');
	}

	/**
	 * Get the type of the video, e.g. 'youtube'.
	 * @returns {string} Video type
	 * @this module:video-players.VideoPlayerBase
	 * @memberOf module:video-players.VideoPlayerBase#
	 */
	function getType() {
		return this._type;
	}

	/**
	 * Get the source of the video.
	 * @returns {string} Video source
	 * @this module:video-players.VideoPlayerBase
	 * @memberOf module:video-players.VideoPlayerBase#
	 */
	function getSource() {
		return this._source;
	}

	/**
	 * Check whether the player is ready. The value will be set
	 * by [_setReady()]{@link module:video-players.VideoPlayerBase#_setReady}.
	 * @returns {boolean} True, if the player is ready.
	 * @this module:video-players.VideoPlayerBase
	 * @memberOf module:video-players.VideoPlayerBase#
	 */
	function isReady() {
		return this._playerReady;
	}

	/**
	* Check whether the player already started the video at least once
	*/
	function hasStarted() {
		return this._started;
	}

	/**
	 * Destroy and remove the video player from the DOM.
	 * @this module:video-players.VideoPlayerBase
	 * @memberOf module:video-players.VideoPlayerBase#
	 */
	function destroy() {
		this._domElement.parentElement.removeChild(this._domElement);
	}

	/**
	* Starts an interval timer that fires a timechange event every 1s
	*/
	function _startTimeChangedTimer() {
		var that = this;
		clearInterval(this._timeChangedTimer);
		this._timeChangedTimer = setInterval(function() {
			that._triggerEvent('timechange', that.getCurrentTime());
		}, 1000);
	}
})();

VideoPlayerBase.apiReady = true;

// Initialize the player with the complete API.
// This is somewhat hacky as it assumes that there is exactly one global player.
// If you want to support more players you have to implement a nicer solution
if (window.player && window.player.constructor === VideoPlayerBase) {
	player.initializeWithCompleteApi();
}