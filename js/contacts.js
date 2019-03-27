/*
Activité : gestion des contacts
test de commit dans Atom
*/

class contact {
  constructor (nom,prenom){
    this.nom=nom;
    this.prenom=prenom;
  }
  affiche(){
    return ("Nom: " + this.nom + ", Prénom: " + this.prenom);
  }
}

function afficheContacts() {
  console.log("Voici la liste de tous vos contacts");
  for (i=0;i<listeContacts.length;i++)
    console.log(listeContacts[i].affiche());
}

// main
const listeContacts = [];
let uiChoix=1;
let nom="";
let prenom="";
let tailleTableau=0;

// Ajoute 2 contacts à la liste des contacts
listeContacts.push(new contact("Lévisse","Carole"));
listeContacts.push(new contact("Nelsonne","Mélodie"));

console.log("Bienveue dans le gestionnaire des contacts !");

while (uiChoix!=0) {

  console.log("1: Lister les contacts");
  console.log("2: Ajouter un contact");
  console.log("0: Quitter");

  uiChoix = prompt("Choisissez une option", "");

  if (uiChoix == 1) {
    afficheContacts();
    console.log("\n");
  }
  if (uiChoix == 2){
    nom = prompt("Entrer le nom du nouveau contact", "Nom");
    prenom = prompt("Entrer le prénom du nouveau contact","Prenom");
    listeContacts.push(new contact(nom,prenom));
    tailleTableau=listeContacts.length-1;
    console.log ("Le nouveau contact : " + listeContacts[tailleTableau].affiche() + " a été ajouté !")
  }

}
console.log("\nAu revoir !");
