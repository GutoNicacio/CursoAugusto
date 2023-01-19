let pontos = 0;
let vidas = 0;

while (true) {
    let numero1 = Math.floor(Math.abs(Math.random() * (100 - 0) + 0));
    let numero2 = Math.floor(Math.abs(Math.random() * (100 - 0) + 0));

    alert("JOGO MATEMÁTICO! Vidas: " + vidas + ", pontos: " + pontos + "!\n");
    let valorDigitado = prompt("Quanto é " + numero1 + " + " + numero2 + "?");

    if (valorDigitado == numero1 + numero2) {
        pontos = pontos + 1;
        vidas = vidas + 1;
    } else {
        if (vidas > 0) {
            alert("Incorreto!");
            vidas = vidas - 1;
        } else {
            alert("Game Over" + "\nVoce fez " + pontos + " pontos!");
            break;
        }
    }
}