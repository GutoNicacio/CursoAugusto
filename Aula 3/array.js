let notas = [7,10,9,5,3,6,7];

// alert(notas[0]);

let total = 0;
for (i=0; i<notas.length; i++) {
    total = total + notas[i];
}

alert(total/6);

// XXX

let notas = [
    ["Augusto", 3],
    ["João", 9],
    ["Lucas", 2],
    ["Chico", 10],
    ["Joana", 9],
    ["Luciana", 8]
];

const NMIN = 7;

for (i=0; i<notas.length; i++) {
    if (notas[i][1] < NMIN) {
        console.log("Reprovado: " + notas[i][0]);
    } else {
        console.log("Aprovado: " + notas[i][0]);
    }
}

// XXX

let lista1 = [["Matemática", [["Augusto", 6], ["João", 9], ["Guto", 7], ["Alan", 4], ["Lucas", 8], ["Carla", 10]]],
    ["Português"],
    ["História"],
    ["Geografia"]
]

let notas = [];

const NMIN = 7;

let nota = 0;

while (nota != "sair") {
    nota = prompt("Digite uma nota ou sair:");
    if (nota != "sair") {
        notas.push(parseFloat(nota));
    }
}

console.log(notas);