var kelvins = 294; // La température en Kelvins est fixée à 294
var celsius = kelvins - 273; // La température en Celsius est obtenue en soustrayant 273 de la température en Kelvins
var fahrenheits = celsius * (9/5) + 32; // La température en Fahrenheit est obtenue en multipliant la température en Celsius par 9/5, puis en ajoutant 32
fahrenheits = Math.floor(fahrenheits); // On arrondit la température en Fahrenheit à l'entier inférieur le plus proche
var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?"); // Demande à l'utilisateur de saisir la température en Kelvins
var celsius = kelvins - 273; // Conversion en Celsius
var fahrenheits = Math.floor(celsius * (9/5) + 32); // Conversion en Fahrenheit et arrondi du résultat
console.log("Température en Celsius : " + celsius + "°C"); // Affiche la température en Celsius
console.log("Température en Fahrenheit : " + fahrenheits + "°F"); // Affiche la température en Fahrenheit
500// you can write js here
console.log('hello from file');