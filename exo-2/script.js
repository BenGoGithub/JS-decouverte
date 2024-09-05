const isTesting = true; // Passez cette variable à `false` pour désactiver le mode test

let currentDay;
let currentHour;

if (isTesting) {
    // En mode test, demandez à l'utilisateur de saisir un jour et une heure
    currentDay = parseInt(prompt("Entrez un jour de la semaine (0 pour dimanche, 1 pour lundi, ..., 6 pour samedi) :"));
    currentHour = parseInt(prompt("Entrez l'heure actuelle (0-23) :"));
} else {
    // En mode normal, utilisez la date et l'heure actuelles
    const myDate = new Date(); // Crée un objet Date qui contient la date et l'heure actuelles
    currentDay = myDate.getDay(); // Obtient le jour actuel de la semaine (0-6, où 0 est dimanche)
    currentHour = myDate.getHours(); // Obtient l'heure actuelle (0-23)
}

const weekdayMessage = "Pas encore..."; // Message à afficher pendant un jour de semaine
const weekendMessage = "C'est le weekend !"; // Message à afficher pendant le weekend

if (currentDay === 0 || currentDay === 6) {
    console.log(weekendMessage); // Si c'est samedi (6) ou dimanche (0), affiche le message du weekend
} else if (currentDay === 5 && currentHour >= 17) {
    console.log(weekendMessage); // Si c'est vendredi (5) après 17h, affiche aussi le message du weekend
} else if (currentDay === 1 && currentHour < 9) {
    console.log(weekendMessage); // Si c'est lundi (1) avant 9h, affiche aussi le message du weekend
} else {
    console.log(weekdayMessage); // Sinon, affiche le message de la semaine

console.log('exo-2'); }