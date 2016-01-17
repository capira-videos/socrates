'use strict';
module.exports = {
    cookieSecret: 'cookieSecret',
    lti: {
        consumerKey: 'test',
        consumerSecret: 'test',
    },
    port: 9898,
    webRoot: 'src/client',
    playerEndpoint: 'http://localhost:9898/components/endpoints/player/#/',
    editorEndpoint: 'http://localhost:9898/components/endpoints/editor/#/',
    createEndpoint: 'http://localhost:9898/components/endpoints/create/#' + '/components/endpoints/editor/#/',
    debug: true
};
