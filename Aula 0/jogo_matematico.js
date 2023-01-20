let pontos = 0;
let vidas = 0;
let max = 10

while (true) {
    let numero1 = Math.floor(Math.abs(Math.random() * (max - 1) + 1));
    let numero2 = Math.floor(Math.abs(Math.random() * (max - 1) + 1));
    let operacao = Math.floor(Math.random() * (3 - 0) + 0);

    if (operacao == 0) {
        let valorDigitado = prompt("JOGO MATEMÁTICO!\n"
        + "Vidas: " + vidas + ", pontos: " + pontos + ", dificuldade: " + max/10 + ".\n"
        + "Quanto é " + numero1 + " + " + numero2 + "?");
    
        if (valorDigitado == numero1 + numero2) {
            pontos = pontos + 5;
            vidas = vidas + 1;
            if (pontos % 20 == 0) {
                max = max + 10;
            }
        } else {
            if (vidas > 0) {
                alert("Incorreto!");
                vidas = vidas - 1;
            } else {
                alert("Game Over!" + "\nVocê fez " + pontos + " pontos!");
                break;
            }
        }    
    } else if (operacao == 1) {
        let valorDigitado = prompt("JOGO MATEMÁTICO!\n"
        + "Vidas: " + vidas + ", pontos: " + pontos + ", dificuldade: " + max/10 + ".\n"
        + "Quanto é " + numero1 + " - " + numero2 + "?");
    
        if (valorDigitado == numero1 - numero2) {
            pontos = pontos + 5;
            vidas = vidas + 1;
            if (pontos % 20 == 0) {
                max = max + 10;
            }
        } else {
            if (vidas > 0) {
                alert("Incorreto!");
                vidas = vidas - 1;
            } else {
                alert("Game Over!" + "\nVocê fez " + pontos + " pontos!");
                break;
            }
        }
    
    } else if (operacao == 2) {
        let valorDigitado = prompt("JOGO MATEMÁTICO!\n"
        + "Vidas: " + vidas + ", pontos: " + pontos + ", dificuldade: " + max/10 + ".\n"
        + "Quanto é " + numero1 + " / " + numero2 + "?");
    
        if (valorDigitado == numero1 / numero2) {
            pontos = pontos + 5;
            vidas = vidas + 1;
            if (pontos % 20 == 0) {
                max = max + 10;
            }
        } else {
            if (vidas > 0) {
                alert("Incorreto!");
                vidas = vidas - 1;
            } else {
                alert("Game Over!" + "\nVocê fez " + pontos + " pontos!");
                break;
            }
        }            
    } else {
        let valorDigitado = prompt("JOGO MATEMÁTICO!\n"
        + "Vidas: " + vidas + ", pontos: " + pontos + ", dificuldade: " + max/10 + ".\n"
        + "Quanto é " + numero1 + " * " + numero2 + "?");
    
        if (valorDigitado == numero1 * numero2) {
            pontos = pontos + 5;
            vidas = vidas + 1;
            if (pontos % 20 == 0) {
                max = max + 10;
            }
        } else {
            if (vidas > 0) {
                alert("Incorreto!");
                vidas = vidas - 1;
            } else {
                alert("Game Over!" + "\nVocê fez " + pontos + " pontos!");
                break;
            }
        }    
    }
}