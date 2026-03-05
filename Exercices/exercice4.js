console.log(
  `0 == "" --> ${0 == "" ? true : false} || 0 === "" --> ${0 === "" ? true : false}`,
);
console.log(
  `0 == "0" --> ${0 == "0" ? true : false} || 0 === "0" --> ${0 === "0" ? true : false}`,
);
console.log(
  `0 == false --> ${0 == false ? true : false} || 0 === false --> ${0 === false ? true : false}`,
);
console.log(
  `"" == false --> ${"" == false ? true : false} || "" === false --> ${"" === false ? true : false}`,
);
console.log(
  `null == undefined --> ${null == undefined ? true : false} || null === undefined --> ${null === undefined ? true : false}`,
);
console.log(
  `null == false --> ${null == false ? true : false} || null === false --> ${null === false ? true : false}`,
);
console.log(
  `null == false --> ${null == false ? true : false} || null === false --> ${null === false ? true : false}`,
);
console.log(
  `1 == "1" --> ${1 == "1" ? true : false} || 1 === "1" --> ${1 === "1" ? true : false}`,
);
console.log(
  `" \t\n " == 0 --> ${" \t\n " == 0 ? true : false} || " \t\n " === 0 --> ${" \t\n " === 0 ? true : false}`,
);

let counter = 0;

let pairs = [
  [0, ""],
  [0, "0"],
  [0, false],
  ["", false],
  [null, undefined],
  [null, false],
  [NaN, NaN],
  [1, "1"],
  [" \t\n", 0],
];

pairs.forEach((element, i) => {
  if (element[i] == element[i + 1] && element[i] === element[i + 1]) {
    counter++;
  }
});

console.log(
  "=================================================================",
);
console.log(
  `${counter} paire(s) où == et === donnent des résultats différents`,
);
