//créer une fonction qui dit bonjour
var direBonjour = function() {
    console.log('Bonjour !');
};

// une autre qui dit bye bye
var direByeBye = function() {
    console.log('Bye bye !');
};

// j'exporte les fonctions pour qu'elles soient utilisable a l'exterieur
module.exports.direBonjour = direBonjour;
module.exports.direByeBye = direByeBye;