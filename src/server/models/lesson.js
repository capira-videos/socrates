'use strict';
// Load required packages
var mongoose = require('mongoose');
// Define our lesson schema
var LessonSchema = new mongoose.Schema({
    title: String,
    version: String,
    resource: {
        resourceId: String,
        contextId: String,
        instanceId: String,
    },
    overlays: Array,
    video: {
        type: Object
    },
    notInitialized: Boolean
});
var Lesson = mongoose.model('Lesson', LessonSchema);

module.exports = function(router) {
    if (!router) {
        return Lesson;
    }
    // Create a new route with the prefix /lessons
    var lessonsRoute = router.route('/lesson');

    // Create endpoint /api/lessons for POSTS
    lessonsRoute.post(function(req, res) {
        var user = req.user;
        var body = req.body;
        console.log('user', user);
        console.log('lesson', body);
        // check if user is authorized
        if (!user || !user.isAuthorized(body.resource)) {
            return res.json({
                message: 'not authorized',
                error: 403
            });
        }
        // Create a new instance of the lesson model
        // Set the lesson properties that came from the POST data
        var lesson = new Lesson(body);

        // Save the lesson and check for errors
        Lesson.findByIdAndUpdate(lesson._id, {
            $set: lesson
        }, function(err, lesson) {
            if (err) {
                //TODO: Remove this in deployment to prevent information disclosure
                return res.json({
                    error: 302,
                    message: err
                });
            }
            res.json({
                message: 'lesson added to the locker!',
                data: lesson
            });
        });
    });

    // Create a new route with the prefix /lessons/:lessonId
    var lessonRoute = router.route('/lesson/:lessonId');
    lessonRoute.get(function(req, res) {
        // Use the Lesson model to find a specific Lesson
        Lesson.findById(req.params.lessonId, function(err, lesson) {
            if (err) {
                res.send(err);
            }
            res.json(lesson);
        });
    });
    return Lesson;
};
