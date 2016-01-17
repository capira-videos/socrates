'use strict';
var http = require('http');
var app = require('./app-auth');
var config = require('./config');

app.get('/', function(req, res, next) {
	if(!req.user){
		return res.send('not logged in');
	}
    res.send('roles in a different page:' + req.user.isAdmin);
});

var server = http.createServer(app);
server.listen(config.port);
console.log('Server running on port ' + config.port);
