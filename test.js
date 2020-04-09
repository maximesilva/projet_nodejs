var http = require('http'); //require effectue un appel à une bibliothèque de Node.js, ici la bibliothèque "http"

var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('Salut tout le monde !');
});
server.listen(8080);