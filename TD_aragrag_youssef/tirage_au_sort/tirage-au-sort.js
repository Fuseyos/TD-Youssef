"use strict";
// liste de mangas
let mangas = ["Naruto", "One Piece", "DBZ", "Bleach", "HxH", "JJK", "Spy x Family", "Sakamoto Days", "JJBA", "HnK", "Boruto"];

// Récupération de l'ID
let affichage = document.getElementById('affichage');

// Définition de la fonction
function tirage() {
    // Sélectionne au hazard un manga et l'affiche
    affichage.innerText = mangas[Math.floor(mangas.length * Math.random())];
};
