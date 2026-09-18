const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantResultat = document.getElementById('resultat');

const choixPossibles = document.querySelectorAll('button');
let choixUtilisateur;
let resultat;
let choixOrdinateur;

choixPossibles.forEach(choixPossible => choixPossible.addEventListener('click',(e)=>{
    choixUtilisateur = e.target.id;
    contenantChoixUtilisateur.innerHTML = `<img src="${choixUtilisateur}.png">`;
    generer_choix_ordinateur();
    verification();
}))

function generer_choix_ordinateur() {
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        choixOrdinateur = "pierre";
    }
    if (random === 2) {
        choixOrdinateur = "papier";
    }
    if (random === 3) {
        choixOrdinateur = "ciseaux";
    }
    contenantChoixOrdinateur.innerHTML = `<img src="${choixOrdinateur}.png">`;
}

function verification() {
    if(choixUtilisateur == choixOrdinateur) {
        resultat = "Egalite !";
    }
    if(choixUtilisateur == "pierre" && choixOrdinateur == "papier") {
        resultat = "Perdu !";
    }
    if(choixUtilisateur == "papier" && choixOrdinateur == "ciseaux") {
        resultat = "Perdu !";
    }
    if(choixUtilisateur == "ciseaux" && choixOrdinateur == "pierre") {
        resultat = "Perdu !";
    }

    if(choixUtilisateur == "pierre" && choixOrdinateur == "ciseaux") {
        resultat = "Gagne !";
    }
    if(choixUtilisateur == "papier" && choixOrdinateur == "pierre") {
        resultat = "Gagne !";
    }
    if(choixUtilisateur == "ciseaux" && choixOrdinateur == "papier") {
        resultat = "Gagne !";
    }
    contenantResultat.innerHTML = resultat;
}