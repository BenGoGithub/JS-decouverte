// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

console.table(secretMessage);

// Enlever le dernier élément
secretMessage.pop();

// Ajouter 'to' et 'program' à la fin
secretMessage.push("to", "program");

// Changer 'easily' par 'right'
secretMessage[secretMessage.indexOf("easily")] = "right";

// Supprimer le premier élément
secretMessage.shift();

// Ajouter "Programming" au début
secretMessage.unshift("Programming");

// Remplacer 'get', 'right', 'the', 'first', 'time' par 'know'
secretMessage.splice(secretMessage.indexOf("get"), 5, "know");

// Afficher le message secret
console.log(secretMessage.join(" "));