let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

let correctedName = nom.trim() || "Inconnu";
let correctedAge =
  Number.isNaN(parseInt(age)) || Number(age) <= 0
    ? " valeur invalide"
    : Number(age);
let correctedEmail =
  email.includes("@") && email.indexOf(".") > email.indexOf("@")
    ? "Valide"
    : "Invalide";
let correctedScoreJeu = parseInt(scoreJeu) || 0;
let correctedEstAdmin = estAdmin === "true";
let correctedDerniereConnexion = derniereConnexion ?? "Jamais connecté";
let correctedNombreConnexions =
  Number(nombreConnexions) == 0 ? "Aucune connexion" : Number(nombreConnexions);

console.log("===== RAPPORT UTILISATEUR =====");
console.log(
  `nom              : "${correctedName}" (corrigé : espaces supprimés)`,
);
console.log(`age              : ${correctedAge}`);
console.log(`email            : "${email}" (${correctedEmail})`);
console.log(
  `scoreJeu         : ${correctedScoreJeu} (extrait depuis "${scoreJeu}")`,
);
console.log(
  `estAdmin         : ${correctedEstAdmin} (attention : Boolean("false") = true, conversion manuelle requise)`,
);
console.log(
  `derniereConnexion: "${correctedDerniereConnexion}" (valeur par défaut via ??)`,
);
console.log(`nombreConnexions : "${correctedNombreConnexions}"`);
console.log("================================");
