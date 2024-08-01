// 1. Déclaration de variables
console.log("===============================");
console.log("= 1. Déclaration de variables =");
console.log("===============================");

const PI = 3.14;
const nom = "Alpha Oumar Diallo";
const age = 22;

console.log("pi : ", PI)
console.log("Mon nom : ",nom)
console.log("Mon age : ",age)
// 2. Types de données
console.log("===============================");
console.log("=   2. Types de données       =");
console.log("===============================");

const nombre = 1234;
const chaine = "Alpha";
let decision = false;
let sansContenu;
const objectVide = null;
console.log(typeof nombre);
console.log(typeof chaine);
console.log(typeof decision);
console.log(typeof sansContenu);
console.log(typeof objectVide);

// 3. Opérations mathématiques
console.log("===============================");
console.log("= 3. Opérations mathématiques =");
console.log("===============================");

const a = 5;
const b = 7;
const somme = a + b;
const difference = b - a;
const produit = a * b;
const division = a / b;
const modulo = a % b;

console.log("La somme : ", somme)
console.log("La difference : ", difference)
console.log("Le produit : ", produit)
console.log("La division : ", division)
console.log("Le reste de la division : ", modulo)

// 4. Précédence des opérateurs
console.log("===============================");
console.log("= 4. Précédence des opérateurs =");
console.log("===============================");

console.log("Sans parenthèse", 3 * 4 + 5)
console.log("Avec des parenthèses", 3 * (4 + 5))

// 5. Concaténation de chaînes
console.log("===============================");
console.log("= 5. Concaténation de chaînes =");
console.log("===============================")

const prenom = "Alpha Oumar"
const _nom = "Diallo"
const nomComplet = prenom +" "+ _nom

console.log(nomComplet)

// 6. Template literals
console.log("===============================");
console.log("=     6. Template literals    =");
console.log("===============================")

console.log(`Je suis ${prenom} ${_nom}, j'ai ${age} ans.`);

// 7. Comparaisons
console.log("===============================");
console.log("=     7. Comparaisons         =");
console.log("===============================")

const x = 7;
const y = 5;

console.log("x est plus grand que y : ", x > y);
console.log("x est égal y : ", x == y);
console.log("x est inférieur ou égal à y : ", x <= y);

// 8. Conditions if-else
console.log("===============================");
console.log("= 8. Conditions if-else       =");
console.log("===============================")

const note = 12;

if(note >= 16){
    console.log("Excellent !!")
}
else if(note >= 14 && note <= 15){
    console.log("Bien ")
}
else if(note >= 12 && note <= 13){
    console.log("Assez bien ")
}
else if(note >= 10 && note <= 11){
    console.log("Passable ")
}else{
    console.log("Insuffisant")
}

// 9. Opérateur ternaire
console.log("===============================");
console.log("=  9. Opérateur ternaire      =");
console.log("===============================")

const statut = age >= 18? "Majeur" : "Mineur"
console.log(statut)

// 10. Conversion de types
console.log("===============================");
console.log("= 10. Conversion de types     =");
console.log("===============================")

const texteNombre = "42";
const _nombre = Number(texteNombre)
const resultat = _nombre + 8
console.log(resultat)
String(resultat)
console.log(texteNombre + resultat)

