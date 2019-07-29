const http = require('http');
const dt = require('./my_module');

http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("The date and time are currently: " + dt.DateTime());
    res.end();

}).listen(8080);
