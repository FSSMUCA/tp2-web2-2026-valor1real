let valeurs = [0, 1, "", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
  const element = valeurs[i];

  if (element === "") {
    console.log(`(chaine vide) --> truthy`);
    continue;
  }

  if (element) {
    console.log(`${String(element)} --> truthy`);
  } else {
    console.log(`${String(element)} --> falsy`);
  }
}
