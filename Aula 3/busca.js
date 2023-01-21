let notas = [
    ["Augusto", 3],
    ["João", 9],
    ["Lucas", 2],
    ["Chico", 10],
    ["Joana", 9],
    ["Luciana", 8]
];

nome = prompt("Nome do aluno:");

for (i=0; i<notas.length; i++) {
    if (notas[i][0] == nome) {
        alert(notas[i][1]);
    }
}