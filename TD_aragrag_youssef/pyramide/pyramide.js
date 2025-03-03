function construirePyramide() {
    // Récupère la valeur entrée
    let lignes = document.getElementById("ligne-pyramide").value;
    let pyramide = "";
    
    // Boucle pour chaque ligne 
    for (let i = 1; i <= lignes; i++) {
        // Génère les espaces avant et après les étoiles pour centrer la pyramide
        let espaces = "-".repeat(lignes).slice(0, lignes - i);
        // Génère les étoiles avec un espace entre elles
        let etoiles = "* ".repeat(i).trim();
        // Construit la ligne
        pyramide += espaces + etoiles + espaces + "<br>";
    }
    
    // Affiche la pyramide
    document.getElementById("pyramide").innerHTML = pyramide;
}
