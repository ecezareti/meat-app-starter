"use strict";
exports.__esModule = true;
var jsonServer = require("json-server");
var fs = require("fs");
var https = require("https");
var auth_1 = require("./auth");
var authz_1 = require("./authz");
var server = jsonServer.create();
var router = jsonServer.router('./db.json');
var middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);
var options = {
    key: fs.readFileSync('./backend/keys/key.pem'),
    cert: fs.readFileSync('./backend/keys/cert.pem')
};
server.post('/login', auth_1.handleAuthentication);
server.use('/orders', authz_1.handleAuthorization);
server.use(router);
https.createServer(options, server).listen(3000, function () {
    console.log('JSON Server is running: https://localhost:3000');
});
