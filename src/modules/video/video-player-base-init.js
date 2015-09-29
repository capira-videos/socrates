/* jshint latedef:nofunc */

// The implementation for the video players consist of two parts. One that only initializes the video player and
// that is as minimalistic as possible to be inlined into index.html and one that contains the rest of the api.

// Some code conventions for classes:
//
// Classes definitions should be contained in a closure, like a factory, such there are no global variables.
//
// The class definition should consist of the parts Variables, Constructor, Declarations, Implementations.
// The declarations should just be a list of the implemented functions, but should not contain implementations for
// better overview. The implementations are contained in the Implementations part as usual functions inside the closure.
// It's also possible to define helper functions here, that are not bound to 'this'.
//
// Your variables should all be bound to 'this'. There is thus also no point in binding variables to the prototype.
// Over 'this' they can be accessed from any subclass. In the variables section they are thus just mentioned as comment.
//
// Private variable's / method's names should start with a leading underscore. Helpermethods that are not bound to
// 'this' with two leading underscores.
//
// When calling a method, you should always call it via this.methodName() or methodName.call(this) or
// _super.methodName.call(this) to set the correct context.
//
// When defining a subclass, you should have a _super pointing to the base classes prototype. Also you should not
// forget to let the constructor property of the prototype point back to that subclass. (see video-player-youtube.js)



window.VideoPlayerBase = (function () {

	// ################### Variables ###################

	// _type
	// _source
	// _domElement
	// _playerReady
	// _executeQueue
	// _duration
	// _eventListeners
	// _timeChangedTimer
	// _started


	// ################## Constructor ##################

	/**
	 * This is the base class for video player implementations.
	 * It is an abstract class. You can not instantiate this class directly !
	 * @memberOf module:video-players
	 * @class
	 * @abstract
	 * @param {object} videoParams - an object describing the video to be loaded
	 * @param {string} videoParams.type - video type, e.g. 'youtube'
	 * @param {string} videoParams.source - the video source
	 * @param {external:angular.element} parentElement - the parent element to which the video player should be appended
	 */
	function VideoPlayerBase(videoParams, parentElement) {
		if (this.constructor === VideoPlayerBase) {
			throw new Error("Can't instantiate abstract video player!");
		}
		/**
		 * Video type, e.g. 'youtube'
		 * @member {string}
		 * @protected
		 */
		this._type = videoParams.type;
		/**
		 * Video source
		 * @member {string}
		 * @protected
		 */
		this._source = videoParams.source;
		/**
		 * The DOM element of the video
		 * @member {external:angular.element}
		 * @protected
		 */
		this._domElement = document.createElement('div');
		parentElement.appendChild(this._domElement);
		/**
		 * Will be true when the player is ready. You should not change this value manually but instead call
		 * [_setReady()]{@link module:video-players.VideoPlayerBase#_setReady}.
		 * @member {boolean}
		 * @protected
		 */
		this._playerReady = false;
		/**
		 * Function calls to the player will be queued until the player is ready and executed as soon as
		 * [_setReady()]{@link module:video-players.VideoPlayerBase#_setReady} gets called.
		 * @member {function[]}
		 * @protected
		 */
		this._executeQueue = [];
		/**
		 * Registered event listeners. It's a map eventType -> [eventlisteners..]
		 * @member {Object.<string, function[]>}
		 * @protected
		 */
		this._eventListeners = {};
		if (this.constructor.apiReady) { // if not, it will be initialized after the API was registered
			this.initializeWithCompleteApi();
		}
	}


	VideoPlayerBase.prototype._setReady = _setReady;
	VideoPlayerBase.prototype.executeWhenPlayerReady = executeWhenPlayerReady;


	/**
	 * Execute a function as soon as the player is ready. If the player is already ready, execute it as soon as
	 * possible. Inside the called function, the 'this' context will be set to the player (sub)class instance.
	 * @param {function} - the function to execute
	 * @this module:video-players.VideoPlayerBase
	 * @memberOf module:video-players.VideoPlayerBase#
	 */
	function executeWhenPlayerReady(fun) {
		if (this._playerReady && this.constructor.apiReady) {
			return fun.call(this);
		} else {
			this._executeQueue.push(fun);
		}
	}

	/**
	 * Set the player state to ready and execute all queued up tasks. You should not set
	 * [_playerReady]{@link module:video-players.VideoPlayerBase#_playerReady} manually but call this method.
	 * @memberOf module:video-players.VideoPlayerBase#
	 * @this module:video-players.VideoPlayerBase
	 */
	function _setReady() {
		this._playerReady = true;
		if (this.constructor.apiReady) {
			this._flushExecuteQueue();
			this._triggerEvent('ready');
		}
	}

	return VideoPlayerBase;
})();