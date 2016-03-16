'use strict';
var http = require('http');
var app = require('./app-auth');
var config = require('./config');
var progress = require('./models/progress')(app);

app.get('/', function(req, res, next) {
    if (!req.user) {
        return res.send('<h3>Capira Server</h3>Use this as the launch url to integrate Capira in your Learning Management System via LTI');
    }
    res.send('You are logged in. Admin Permissions:' + req.user.isAdmin);
});

if (config.ssl) {
    var fs = require('fs');
    var https = require('https');

    var options = {
        key: fs.readFileSync(config.ssl.key),
        cert: fs.readFileSync(config.ssl.cert)
    };

    var server = https.createServer(options, app);
} else {
    var server = http.createServer(app);
}

server.listen(config.port);
console.log('Server running on port ' + config.port);
  