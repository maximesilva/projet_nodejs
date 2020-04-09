var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname; // decoupe l'url pour avoir la page demandé
    console.log(page);
    res.writeHead(200, {"Content-Type": "text/plain"});
    if (page == '/') {
        res.write('Vous êtes à l\'accueil, que puis-je pour vous ?');
    }
    else if (page == '/sous-sol') {
        res.write('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
    }
    else if (page == '/etage/1/chambre') {
        res.write('Hé ho, c\'est privé ici !');
    }else{
        res.writeHead(404); //permet d'envoyer le code d'erreur 404
        res.write('404');
    }
    res.end();
});
server.listen(8080);

/*require effectue un appel à une bibliothèque de Node.js, ici la bibliothèque "http"
var http = require('http');

//req contient les infos que le visiteur a demandé et res la reponse qu'on renvoi
var server = http.createServer(function(req, res) { //req contient les infos que le visiteur a demandé et res la reponse qu'on renvoi

    //on renvoi dans l'en-tete le code 200 et précise que se sera du code html
    res.writeHead(200, {"Content-Type": "text/html"}); //on renvoi dans l'en-tete le code 200 et précise que se sera du code html

    res.write('<!DOCTYPE html>'+
        '<html>'+
        '    <head>'+
        '        <meta charset="utf-8" />'+
        '        <title>Ma page Node.js !</title>'+
        '    </head>'+
        '    <body>'+
        '     	<p>Voici un paragraphe <strong>HTML</strong> !</p>'+
        '    </body>'+
        '</html>');

    // termine la réponse et le serveur enoie le resultat
    res.end();
});
//lancement du server et ecoute sur le port 8080
server.listen(8080);*/