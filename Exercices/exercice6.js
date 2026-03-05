let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

console.log(`nom ?? "valeur par défaut" --> ${nom ?? "valeur par défaut"}`);
console.log(`age ?? "valeur par défaut" --> ${age ?? "valeur par défaut"}`);
console.log(`ville ?? "valeur par défaut" --> ${ville ?? "valeur par défaut"}`);
console.log(`score ?? "valeur par défaut" --> ${score ?? "valeur par défaut"}`);
console.log(`actif ?? "valeur par défaut" --> ${actif ?? "valeur par défaut"}`);

console.log(
  `==================================================================="}`,
);

console.log(`nom || "valeur par défaut" --> ${nom || "valeur par défaut"}`);
console.log(`age || "valeur par défaut" --> ${age || "valeur par défaut"}`);
console.log(`ville || "valeur par défaut" --> ${ville || "valeur par défaut"}`);
console.log(`score || "valeur par défaut" --> ${score || "valeur par défaut"}`);
console.log(`actif || "valeur par défaut" --> ${actif || "valeur par défaut"}`);

// nom
if ((nom ?? "valeur par défaut") === (nom || "valeur par défaut")) {
  console.log("nom   : ?? et || -> même résultat");
} else {
  console.log("nom   : ?? et || -> résultat différent");
}

// age
if ((age ?? "valeur par défaut") === (age || "valeur par défaut")) {
  console.log("age   : ?? et || -> même résultat");
} else {
  console.log("age   : ?? et || -> résultat différent");
}

// ville
if ((ville ?? "valeur par défaut") === (ville || "valeur par défaut")) {
  console.log("ville : ?? et || -> même résultat");
} else {
  console.log("ville : ?? et || -> résultat différent");
}

// score
if ((score ?? "valeur par défaut") === (score || "valeur par défaut")) {
  console.log("score : ?? et || -> même résultat");
} else {
  console.log("score : ?? et || -> résultat différent");
}

// actif
if ((actif ?? "valeur par défaut") === (actif || "valeur par défaut")) {
  console.log("actif : ?? et || -> même résultat");
} else {
  console.log("actif : ?? et || -> résultat différent");
}
