// déclaration

let message = document.getElementById('message');
let button = document.getElementById('button');
let compteurMalus;

// Function Résultat calcul Malus

function afficherResultat(){
    accident = document.getElementById('accident').value;
    if(accident >= 3){
        message.innerHTML = '<div class="alert alert-dark" role="alert">Refusé </div>'
    }else
    {
        compteurMalus = 0;
        // Déclaration des variable
        ageConducteur = document.getElementById('age-conducteur').value;
        permis = document.getElementById('permis').value;
        fidelite = document.getElementById('fidelite').value;

        if(ageConducteur >= 25){
            compteurMalus = compteurMalus + 1;
        }
        if(permis >= 2){
            compteurMalus = compteurMalus + 1; 
        }
        if(fidelite >= 5){
            compteurMalus = compteurMalus + 1;
        }
        compteurMalus = compteurMalus - accident;
        console.log(compteurMalus);

        switch (compteurMalus){
            case 3: 
            message.innerHTML = '<div class="alert alert-primary" role="alert"> Bleu </div>'
            break;
            case 2: 
            message.innerHTML = '<div class="alert alert-success" role="alert"> Vert </div>'
            break;
            case 1: 
            message.innerHTML = '<div class="alert alert-warning" role="alert"> Orange </div>'
            break;
            case 0: 
            message.innerHTML = '<div class="alert alert-danger" role="alert"> Rouge </div>'
            break;
            case -1: 
            message.innerHTML = '<div class="alert alert-danger" role="alert"> Rouge </div>'
            break;
        }

        
    }
   
}

button.addEventListener('click', afficherResultat, false);