"use strict";
//ici on recupere  la phrase diréctement depuis l'id citation
let phrase = document.getElementById("citation").innerText;
/* division de la phrase avec comme séparateur les espaces*/
const mots = phrase.split(" ");
//"mot" vide
let long = "";
//On  recherche pour chaque mot
mots.forEach(mot => {
    //Pour chaque mot dans on vérifie si elle est plus long que le mot long
    if (long.length > mot.length) return;
    //si le mot est plus long il devient le nouveau mot le plus long
    long = mot;
});
// Récupère l'élément HTML
const elementlong = document.getElementById("motPlusLong");
// Met à jour le texte
elementlong.innerText = `Le mot le plus long du paragraphe est "${long}" avec une longeur de "${long.length}" lettres`;