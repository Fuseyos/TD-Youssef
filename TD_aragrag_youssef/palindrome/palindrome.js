function palindrome() {
    // Récupérer le mot
    let mot = document.getElementById("id-mot-saisi").value;
    
    // convertir le mot en minuscules
    let motMinuscule = mot.toLowerCase();
    
    // inverser le mot
    let motInverse = motNettoye.split('').reverse().join('');
    
    // Comparer les mots
    if (motNettoye === motInverse) {
        document.getElementById("resultat").textContent = "C'est un palindrome !";
    } else {
        document.getElementById("resultat").textContent = "Ce n'est pas un palindrome !";
    }
}
