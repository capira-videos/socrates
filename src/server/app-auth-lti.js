'use strict';
var LTIStrategy = require('passport-lti');
var config = require('./config').lti;
var btoa = require('btoa');

module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        user.isAuthorized = function(resource) {
            if (this.instanceId !== resource.instanceId) {
                return false;
            }
            // if (this.contextId !== resource.contextId) {
            //     return false;
            // }
            return this.isAdmin;
        };
        done(null, user);
    });

    return new LTIStrategy(config, function(lti, done) {
        this._createProvider(null, function(a, provider) {
           // console.log(lti);
            var resource = {
                resourceId: lti.resource_link_id,
                contextId: lti.context_id,
                instanceId: lti.tool_consumer_instance_guid,
                title: lti.resource_link_title,
            };

            var user = {
                id: lti.user_id,
                contextId: lti.context_id,
                instanceId: lti.tool_consumer_instance_guid,
                isAdmin: (lti.roles.indexOf('Instructor') > -1),
                sdid: btoa(lti.lis_result_sourcedid)
            };
            //console.log(provider)
            return done(null, user, resource, provider);
        });
    });;
};
