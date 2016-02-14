'use strict';

var config = {
    mongoDB: process.env.mongodb || 'mongodb://127.0.0.1:27017/capira',
    cookieSecret: process.env.cookieSecret || 'cookieSecret',
    lti: {
        consumerKey: process.env.lti_key || 'test',
        consumerSecret: process.env.lti_secret || 'test',
    },
    port: process.env.PORT || process.env.app_port || 9898,
    webRoot: './src/client',
    playerEndpoint: '/components/endpoints/player/#/',
    editorEndpoint: '/components/endpoints/editor/#/',
    createEndpoint: '/components/endpoints/create/#' + '/components/endpoints/editor/#/',
    debug: true,
    // Path to your public SSL key and certificate (if you want to use the Capira Server without a reverse proxy like nginx)
    // ssl: {
    //     key: '',
    //     cert: ''
    // }
}


console.log('Server is running on Port ', config.port);

if (!process.env.lti_secret) {
    console.warn('No LTI Secret is set!');
}

module.exports = config;
