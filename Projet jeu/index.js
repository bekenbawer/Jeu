const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantResultat = document.getElementById('resultat');
const choixPossibles = document.querySelectorAll('button');



let choixUtilisateur;
let resultat;
let choixOrdinateur;


let victoires = 0;
let defaites = 0;
let egalites = 0;
let serie = 0;
let xp = 0;
let niveau = 1;


let nombrePierre = 0;
let nombrePapier = 0;
let nombreCiseaux = 0;

let dernierChoixJoueur = null;

choixPossibles.forEach(choixPossible => choixPossible.addEventListener('click',(e)=>{
    choixUtilisateur = e.target.id;

    dernierChoixJoueur = choixUtilisateur;
    

 if (choixUtilisateur === "pierre") {
    nombrePierre++;
}

if (choixUtilisateur === "papier") {
    nombrePapier++;
}

if (choixUtilisateur === "ciseaux") {
    nombreCiseaux++;
}
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
        egalites++;
        xp += 5;
    }

    if(choixUtilisateur == "pierre" && choixOrdinateur == "papier") {
        resultat = "Perdu !";
        defaites++;
        serie = 0;
    }

    if(choixUtilisateur == "papier" && choixOrdinateur == "ciseaux") {
        resultat = "Perdu !";
        defaites++;
        serie = 0;
    }

    if(choixUtilisateur == "ciseaux" && choixOrdinateur == "pierre") {
        resultat = "Perdu !";
        defaites++;
        serie = 0;
    }

    if(choixUtilisateur == "pierre" && choixOrdinateur == "ciseaux") {
        resultat = "Gagne !";
        victoires++;
        serie++;
        xp += 20;
    }

    if(choixUtilisateur == "papier" && choixOrdinateur == "pierre") {
        resultat = "Gagne !";
        victoires++;
        serie++;
        xp += 20;
    }

    if(choixUtilisateur == "ciseaux" && choixOrdinateur == "papier") {
        resultat = "Gagne !";
        victoires++;
        serie++;
        xp += 20;
    }

    contenantResultat.innerHTML = resultat;

    document.getElementById("victoires").innerHTML = victoires;
    document.getElementById("defaites").innerHTML = defaites;
    document.getElementById("egalites").innerHTML = egalites;
    document.getElementById("serie").innerHTML = serie;
    document.getElementById("xp").innerHTML = xp;
    verifierNiveau();
}

function verifierNiveau() {
    if (xp >= 100) {
        niveau++;
        xp = 0;

    const nomAdversaire = changerNomOrdinateur();
    
    parler(
    "Félicitations ! Tu viens de passer au niveau " +
    niveau +
    ". Je m'appelle " +
    nomAdversaire +
    ". Prépare-toi à jouer !"
);
    }


    

    document.getElementById("niveau").innerHTML = niveau;
    document.getElementById("xp").innerHTML = xp;
    changerNomOrdinateur();

    if (niveau === 2) {
    dialogueAlex();
}
}


function changerNomOrdinateur() {

    let nom;

    if (niveau === 1) {
        nom = "Ordinateur";
    }

    if (niveau === 2) {
        nom = "Alex";
    }

    if (niveau === 3) {
        nom = "Kevin";
    }

    if (niveau === 4) {
        nom = "David";
    }

    if (niveau === 5) {
        nom = "Michael";
    }

    document.getElementById("nom-ordinateur").innerHTML = nom;

    return nom;
}

function parler(message) {
    const voix = new SpeechSynthesisUtterance(message);

    voix.lang = "fr-FR";
    voix.rate = 1;
    voix.pitch = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(voix);
}

function dialogueAlex() {

    if (serie >= 5) {
        parler("Quoi ?! Cinq victoires d'affilée ?! Tu commences vraiment à m'énerver !");
    }

    else if (serie >= 3) {
        parler("Attends... Trois victoires d'affilée ? Je dois faire attention à toi !");
    }

    else if (resultat === "Gagne !") {
        parler("Bien joué ! Mais ne sois pas trop fier !");
    }

    else if (resultat === "Perdu !") {
        parler("Haha ! Je t'avais prévenu. Alex est difficile à battre !");
    }

    else {
        parler("Égalité ? Pas mal... La prochaine manche sera différente !");
    }
}

function choixPrefereJoueur() {

    if (nombrePierre > nombrePapier && nombrePierre > nombreCiseaux) {
        return "pierre";
    }

    if (nombrePapier > nombrePierre && nombrePapier > nombreCiseaux) {
        return "papier";
    }

    if (nombreCiseaux > nombrePierre && nombreCiseaux > nombrePapier) {
        return "ciseaux";
    }

    return null;


}

function choixAleatoire() {

    let random = Math.floor(Math.random() * 3) + 1;

    if (random === 1) {
        return "pierre";
    }

    if (random === 2) {
        return "papier";
    }

    if (random === 3) {
        return "ciseaux";
    }
}

function generer_choix_ordinateur() {

    let random = Math.floor(Math.random() * 3) + 1;

     if (niveau === 2) {

    let choixPrefere = choixPrefereJoueur();

    let probabilite = Math.random();

    if (choixPrefere !== null && probabilite < 0.7) {

        if (choixPrefere === "pierre") {
            choixOrdinateur = "papier";
        }

        else if (choixPrefere === "papier") {
            choixOrdinateur = "ciseaux";
        }

        else if (choixPrefere === "ciseaux") {
            choixOrdinateur = "pierre";
        }

    } else {

        choixOrdinateur = choixAleatoire();

    }
} else {

        if (random === 1) {
            choixOrdinateur = "pierre";
        }

        if (random === 2) {
            choixOrdinateur = "papier";
        }

        if (random === 3) {
            choixOrdinateur = "ciseaux";
        }
    }

    contenantChoixOrdinateur.innerHTML =
        `<img src="${choixOrdinateur}.png">`;
}

function strategieKevin() {

    if (dernierChoixJoueur === "pierre") {
        return "papier";
    }

    if (dernierChoixJoueur === "papier") {
        return "ciseaux";
    }

    if (dernierChoixJoueur === "ciseaux") {
        return "pierre";
    }

    return choixAleatoire();
}



