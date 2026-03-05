let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

let sousTotal = prix * quantite;
console.log(`Sous-total : ${sousTotal.toFixed(2)} MAD`);

let reduction =
  codePromo != null && estMembre ? (sousTotal * reductionPourcentage) / 100 : 0;
console.log(`Montant réduction : ${reduction.toFixed(2)} MAD`);

let totalFinal = sousTotal - reduction;
console.log(`Total final : ${totalFinal.toFixed(2)} MAD`);

let statut =
  soldeCompte >= totalFinal ? "Paiement accepté" : "Solde insuffisant";
console.log(`Statut : ${statut}`);

let nouveauSolde =
  soldeCompte >= totalFinal ? soldeCompte - totalFinal : soldeCompte;

// let promo = codePromo ?? "Aucun";

console.log("\n===== RÉCAPITULATIF =====");
console.log(`Produit   : ${nomProduit}`);
console.log(`Quantité  : ${quantite}`);
console.log(`Prix unit.: ${prix} MAD`);
console.log(`Sous-total: ${sousTotal.toFixed(2)} MAD`);
console.log(`Réduction : ${reduction.toFixed(2)} MAD`);
console.log(`Total     : ${totalFinal.toFixed(2)} MAD`);
console.log(`Statut    : ${statut}`);
console.log(`Solde     : ${nouveauSolde} MAD`);
console.log("=========================");
