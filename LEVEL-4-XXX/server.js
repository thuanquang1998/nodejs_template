var app = require("../app");
var http = require("http");

//get port from environment and store in Express
var port = normalizePort(process.env.PORT || 8000);
// create http server
var server = http.createServer(app);
