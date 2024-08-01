// Exercice 1 : Calculateur de pourboire
console.log("=========================================");
console.log("= Exercice 1 : Calculateur de pourboire =");
console.log("=========================================")

const montantFacture = 25;
const pourcentagePourboire = 15;
const montantPourboire = montantFacture * pourcentagePourboire;
const totalPayement = montantFacture + montantPourboire;

console.log("Le montant du pourboire est : ", montantPourboire)
console.log("Le montant à payer est : ", totalPayement)

// Exercice 2 : Convertisseur de devise
console.log("=========================================");
console.log("= Exercice 2 : Convertisseur de devise  =");
console.log("=========================================")

const TAUX_CHANGE = 0.85
const montantDollars = 100
const montantConvertit = montantDollars / TAUX_CHANGE

console.log("Le montant convertit est : ", montantConvertit)

// Exercice 3 : Calculateur d'IMC simplifié
console.log("============================================");
console.log("= Exercice 3 : Calculateur d'IMC simplifié =");
console.log("============================================")

const poidsKg = 60;
const tailleM = 1.72;
const IMC = poidsKg / (tailleM * tailleM);

if(IMC < 18.5){
    console.log("Sous-poids")
}
else if(IMC >= 18.5 && IMC < 25){
    console.log("Poids normal")
}else{
    console.log("Surpoids")
}

// Exercice 4 : Comparateur de nombres
console.log("============================================");
console.log("= Exercice 4 : Comparateur de nombres      =");
console.log("============================================")

const nombre1 = 5;
const nombre2 = 7;

if(nombre1 > nombre2){
    console.log("Nombre 1 est plus grand que le nombre 2")
}else{
    console.log("Nombre 2 est plus grand que le nombre 1")
}

// Exercice 5 : Calculateur d'âge
console.log("============================================");
console.log("=       Exercice 5 : Calculateur d'âge     =");
console.log("============================================")

const anneeActuelle = 2024;
const anneeNaissance = 2002;
const age = anneeActuelle - anneeNaissance;

console.log(`Vous avez ${age}`)


// Exercice 6 : Vérificateur de nombre pair/impair
console.log("===================================================");
console.log("= Exercice 6 : Vérificateur de nombre pair/impair =");
console.log("===================================================")

const _nombre = 13;
const parite = _nombre % 2 == 0 ?"Le nombre est pair" : "Le nombre est impair"
console.log(parite)


// Exercice 7 : Calculateur de réduction
console.log("===================================================");
console.log("=     Exercice 7 : Calculateur de réduction       =");
console.log("===================================================")

const total = 5000;
const reduction = 10;
const montantReduction = total / reduction;
const prixApresReduction = total - montantReduction;

console.log("Total : ", total);
console.log("Le montant de réduction : ", montantReduction);
console.log("Montant à payer apres réduction : ", prixApresReduction)


// Exercice 8 : Convertisseur de notes
console.log("===================================================");
console.log("=      Exercice 8 : Convertisseur de notes        =");
console.log("===================================================")

const note = 50;

if(note >= 90 && note <= 100){
    console.log(note, " => Excellent")
}
else if(note >= 80 && note <= 89){
    console.log(note, " => Très bien")
}
else if(note >= 70 && note <= 79){
    console.log(note, " => Bien")
}
else if(note >= 60 && note <= 69){
    console.log(note, " => Assez bien")
}
else if(note >= 50 && note <= 59){
    console.log(note, " => Passable")
}else{
    console.log(note, " => Insuffisant")
}


// Exercice 9 : Calculateur de temps de trajet
console.log("===================================================");
console.log("=  Exercice 9 : Calculateur de temps de trajet    =");
console.log("===================================================")

const distanceKm = 142;
const vitesseKmH = 45;
const tempsTrajetH = distanceKm / vitesseKmH;

console.log("Le temps du trajet est : ", tempsTrajetH.toFixed(2) +"h")


// Exercice 10 : Vérificateur d'éligibilité de vote
console.log("====================================================");
console.log("= Exercice 10 : Vérificateur d'éligibilité de vote =");
console.log("====================================================")

const AGE_MINIMUM_VOTE = 18;
const _age = 17;

if(_age > AGE_MINIMUM_VOTE){
    console.log("Vous êtes éligible aux votes")
}else{
    const resteAgeAvantVote = AGE_MINIMUM_VOTE - _age
    console.log(`Il vous reste ${resteAgeAvantVote} ans avant de pouvoir voter`)
}



