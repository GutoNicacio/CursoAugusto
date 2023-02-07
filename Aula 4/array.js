let lista = [0,1,2,3,4,5,6,7,8,9];

lista.pop(); //remove o último elemento
lista.shift(); //remove o primeiro elemento
lista.push(); //insere como último elemento

//   XXX

let pacientes = [
    "Augusto",
    "Luiz",
    "Guto",
    "William",
    "David"
];

while (pacientes.length > 0) {
    alert("Paciente: " + pacientes.shift() + ", se diriga ao atendimento!");
}