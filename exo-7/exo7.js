console.log("exo-7");

console.log(jsonDatas);

console.log("exo-7");

console.log(jsonDatas);



// Etape8

const CatalogueApp = (() => {
    // Constantes
    const TYPE_TRANSLATIONS = {
        car: "Voiture",
        house: "Maison",
        game: "Jeu",
        videoGame: "Jeu Vidéo",
        show: "Spectacle"
    };


    const getTranslatedType = (type) => TYPE_TRANSLATIONS[type] || type;

    const createArticleHTML = (article) => `
        <div class="article">
            <h2>${article.name}</h2>
            <p>Type: ${getTranslatedType(article.type)}</p>
            <p>Description: ${article.description || 'Pas de description'}</p>
            <p>Prix: ${article.price} €</p>
            <p>Quantité: ${article.quantity}</p>
        </div>
    `;

    const filterArticles = (articles, type, inStockOnly) =>
        articles.filter(article =>
            article.type.toLowerCase().includes(type.toLowerCase()) &&
            (!inStockOnly || article.quantity > 0)
        );

    const sortArticles = (articles, criteria, order) =>
        [...articles].sort((a, b) => {
            let comparison;
            if (criteria === 'name') {
                comparison = a.name.localeCompare(b.name);
            } else if (criteria === 'price') {
                comparison = a.price - b.price;
            } else if (criteria === 'type') {
                comparison = getTranslatedType(a.type).localeCompare(getTranslatedType(b.type));
            }
            return order === 'asc' ? comparison : -comparison;
        });

    // Fonctions d'interaction avec le DOM
    const displayArticles = (articles) => {
        const articleList = document.getElementById('articleList');
        articleList.innerHTML = articles.map(createArticleHTML).join('');
    };

    const handleFilter = (articles) => {
        const typeInput = document.getElementById('typeInput').value;
        const inStockCheckbox = document.getElementById('inStockCheckbox').checked;
        return filterArticles(articles, typeInput, inStockCheckbox);
    };

    const handleSort = (articles) => {
        const criteria = document.getElementById('sortCriteria').value;
        const order = document.getElementById('sortOrder').value;
        return sortArticles(articles, criteria, order);
    };

    const handleAddArticle = (articles, event) => {
        event.preventDefault();
        const form = event.target;
        const newArticle = {
            name: form.name.value,
            type: form.type.value,
            description: form.description.value,
            price: parseFloat(form.price.value),
            quantity: parseInt(form.quantity.value, 10)
        };
        return [...articles, newArticle];
    };

    const updateDisplay = (articles) => {
        const filteredArticles = handleFilter(articles);
        const sortedArticles = handleSort(filteredArticles);
        displayArticles(sortedArticles);
    };

    // Initialisation
    const init = (initialArticles) => {
        let articles = [...initialArticles];

        const filterButton = document.getElementById('filterButton');
        const sortButton = document.getElementById('sortButton');
        const addForm = document.getElementById('addArticleForm');

        filterButton.addEventListener('click', () => updateDisplay(articles));
        sortButton.addEventListener('click', () => updateDisplay(articles));
        addForm.addEventListener('submit', (event) => {
            articles = handleAddArticle(articles, event);
            updateDisplay(articles);
            addForm.reset();
        });

        updateDisplay(articles);
    };

    return { init };
})();

// Initialisation de l'application
document.addEventListener('DOMContentLoaded', () => CatalogueApp.init(jsonDatas));









// Etape 1
// function displayArticle(article) {
//     console.log('Article :');
//     console.log(`Nom: ${article.name}`);
//     console.log(`Type: ${article.type}`);
//     console.log(`Description: ${article.description}`);
//     console.log(`Prix: ${article.price} €`);
//     console.log(`Quantité: ${article.quantity}`);
//     console.log('-------------------------');
// }
//
// // Parcourir et afficher tous les articles
// jsonDatas.forEach(displayArticle);
//

// _______________________________________________________________________________________

// // Etape 2
// // Objet de traduction des types
// const typeTranslations = {
//     car: "Voiture",
//     house: "Maison",
//     game: "Jeu",
//     videoGame: "Jeu Vidéo",
//     show: "Spectacle"
// };
//
// // Ajouter une nouvelle clé pour le type traduit sans modifier jsonDatas
// const datasWithTranslation = jsonDatas.map(article => ({
//     ...article,
//     translatedType: typeTranslations[article.type] || article.type
// }));
//
// // Fonction pour afficher un article avec le type traduit
// function displayArticleWithTranslation(article) {
//     console.log('Article :');
//     console.log(`Nom: ${article.name}`);
//     console.log(`Type: ${article.translatedType}`);
//     console.log(`Description: ${article.description}`);
//     console.log(`Prix: ${article.price} €`);
//     console.log(`Quantité: ${article.quantity}`);
//     console.log('-------------------------');
// }
//
// // Parcourir et afficher tous les articles avec le type traduit
// datasWithTranslation.forEach(displayArticleWithTranslation);

// _______________________________________________________________________________________
// // Etape 3
//
// // Objet de traduction des types
// const typeTranslations = {
//     car: "Voiture",
//     house: "Maison",
//     game: "Jeu",
//     videoGame: "Jeu Vidéo",
//     show: "Spectacle"
// };
//
// // Fonction pour obtenir le type traduit
// function getTranslatedType(type) {
//     return typeTranslations[type] || type;
// }
//
// // Fonction pour créer un élément HTML pour un article
// function createArticleElement(article) {
//     const articleElement = document.createElement('div');
//     articleElement.className = 'article';
//     articleElement.innerHTML = `
//         <h2>${article.name}</h2>
//         <p>Type: ${getTranslatedType(article.type)}</p>
//         <p>Description: ${article.description || 'Pas de description'}</p>
//         <p>Prix: ${article.price} €</p>
//         <p>Quantité: ${article.quantity}</p>
//     `;
//     return articleElement;
// }
//
// // Fonction pour afficher tous les articles
// function displayArticles() {
//     const articleList = document.getElementById('articleList');
//     jsonDatas.forEach(article => {
//         const articleElement = createArticleElement(article);
//         articleList.appendChild(articleElement);
//     });
// }
//
// // Appeler la fonction d'affichage quand le DOM est chargé
// document.addEventListener('DOMContentLoaded', displayArticles);

// _______________________________________________________________________________________

//
// Etape 6
// // Objet de traduction des types
//
//
// const typeTranslations = {
//     car: "Voiture",
//     house: "Maison",
//     game: "Jeu",
//     videoGame: "Jeu Vidéo",
//     show: "Spectacle"
// };
//
// // Fonction pour obtenir le type traduit
// function getTranslatedType(type) {
//     return typeTranslations[type] || type;
// }
//
// // Fonction pour créer un élément HTML pour un article
// function createArticleElement(article) {
//     const articleElement = document.createElement('div');
//     articleElement.className = 'article';
//     articleElement.innerHTML = `
//         <h2>${article.name}</h2>
//         <p>Type: ${getTranslatedType(article.type)}</p>
//         <p>Description: ${article.description || 'Pas de description'}</p>
//         <p>Prix: ${article.price} €</p>
//         <p>Quantité: ${article.quantity}</p>
//     `;
//     return articleElement;
// }
//
// // Fonction pour afficher tous les articles
// function displayArticles(articles) {
//     const articleList = document.getElementById('articleList');
//     articleList.innerHTML = ''; // Réinitialiser la liste
//     articles.forEach(article => {
//         const articleElement = createArticleElement(article);
//         articleList.appendChild(articleElement);
//     });
// }
//
// // Fonction pour filtrer les articles
// function filterArticles() {
//     const typeInput = document.getElementById('typeInput').value.toLowerCase();
//     const inStockCheckbox = document.getElementById('inStockCheckbox').checked;
//
//     const filteredArticles = jsonDatas.filter(article => {
//         const matchesType = article.type.toLowerCase().includes(typeInput);
//         const matchesStock = inStockCheckbox ? article.quantity > 0 : true;
//         return matchesType && matchesStock;
//     });
//
//     displayArticles(filteredArticles);
// }
//
// // Écouter les événements sur le bouton de filtrage
// document.getElementById('filterButton').addEventListener('click', filterArticles);
//
// // Appeler la fonction d'affichage initiale quand le DOM est chargé
// document.addEventListener('DOMContentLoaded', () => {
//     displayArticles(jsonDatas);
// });

// _______________________________________________________________________________________
// Etape7
// // Constantes
// const TYPE_TRANSLATIONS = {
//     car: "Voiture",
//     house: "Maison",
//     game: "Jeu",
//     videoGame: "Jeu Vidéo",
//     show: "Spectacle"
// };
//
// let currentArticles = [...jsonDatas];
//
// // Fonctions pures
// const getTranslatedType = (type) => TYPE_TRANSLATIONS[type] || type;
//
// const createArticleHTML = (article) => `
//     <div class="article">
//         <h2>${article.name}</h2>
//         <p>Type: ${getTranslatedType(article.type)}</p>
//         <p>Description: ${article.description || 'Pas de description'}</p>
//         <p>Prix: ${article.price} €</p>
//         <p>Quantité: ${article.quantity}</p>
//     </div>
// `;
//
// const filterArticles = (articles, type, inStockOnly) =>
//     articles.filter(article =>
//         article.type.toLowerCase().includes(type.toLowerCase()) &&
//         (!inStockOnly || article.quantity > 0)
//     );
//
// const sortArticles = (articles, criteria, order) =>
//     [...articles].sort((a, b) => {
//         const comparison = criteria === 'name'
//             ? a.name.localeCompare(b.name)
//             : a.price - b.price;
//         return order === 'asc' ? comparison : -comparison;
//     });
//
// // Fonctions d'interaction avec le DOM
// const displayArticles = (articles) => {
//     const articleList = document.getElementById('articleList');
//     articleList.innerHTML = articles.map(createArticleHTML).join('');
// };
//
// const handleFilter = () => {
//     const typeInput = document.getElementById('typeInput').value;
//     const inStockCheckbox = document.getElementById('inStockCheckbox').checked;
//     currentArticles = filterArticles(jsonDatas, typeInput, inStockCheckbox);
//     displayArticles(currentArticles);
// };
//
// const handleSort = () => {
//     const criteria = document.getElementById('sortCriteria').value;
//     const order = document.getElementById('sortOrder').value;
//     currentArticles = sortArticles(currentArticles, criteria, order);
//     displayArticles(currentArticles);
// };
//
// // Initialisation
// const init = () => {
//     displayArticles(currentArticles);
//     document.getElementById('filterButton').addEventListener('click', handleFilter);
//     document.getElementById('sortButton').addEventListener('click', handleSort);
// };
//
// document.addEventListener('DOMContentLoaded', init);