//estabelecendo uma pergunta e quatro respostas em variáveis
let pergunta = "Quanto é 8 + 2?";
let opcaoA = "9";
let opcaoB = "10";
let opcaoC = "7";
let opcaoD = "15";

//exibe as opções e pede digitação da resposta
alert(pergunta + "\n" + opcaoA + "\n" + opcaoB + "\n" + opcaoC + "\n" + opcaoD);
let opcaoDigitada = prompt("Digitte a opção correta:");

//checa se a entrada digitada está correta
if (opcaoDigitada == opcaoB){
    alert("Resposta correta");
} else if (opcaoDigitada != opcaoA
    && opcaoDigitada != opcaoB
    && opcaoDigitada != opcaoC
    && opcaoDigitada != opcaoD) {
    alert("Resposta inválida");
} else {
    alert("Resposta incorreta");
}