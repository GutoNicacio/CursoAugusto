let vidas = 3;
let pontos = 0;
let max = 10;
let min = 0;
let nome = "";

while (nome == ""){
    nome = prompt("Digite o seu nome:");
}

while (vidas > 0) {
    let n1 = Math.floor(Math.random() * (max - min) + min);
    let n2 = Math.floor(Math.random() * (max - min) + min);
    let op = Math.floor(Math.random() * 4);
    let x = Math.floor(Math.random() * 3);

    let sinal = "";
    let resultado = 0;

    if (op == 0) {
        sinal = "+";
        resultado = n1 + n2;
    } else if (op == 1) {
        if (n2 > n1) {
            let gn1 = n1;
            n1 = n2;
            n2 = gn1;
        }
        sinal = "-";
        resultado = n1 - n2;
    } else if (op == 2) {
        sinal = "/";
        while (n1 % n2 != 0) {
            n1 = Math.floor(Math.random() * (max - min) + min);
            n2 = Math.floor(Math.random() * (max - min) + min);
        }
        if (n2 > n1) {
            let gn1 = n1;
            n1 = n2;
            n2 = gn1;
        }
        resultado = n1 / n2;
    } else {
        sinal = "*";
        resultado = n1 * n2;
    }

    let entrada = 0;
    let pos = 0;

    if (x == 0) {
        entrada = prompt("Quanto é X" + sinal + n2 + "=" + resultado);
        pos = n1;
    } else if (x == 1) {
        entrada = prompt("Quanto é " + n1 + sinal + "X" + "=" + resultado);
        pos = n2;
    } else {
        entrada = prompt("Quanto é " + n1 + sinal + n2 + "=" + "X");
        pos = resultado;
    }

    if (entrada == pos) {
        pontos += 5;
        if (pontos % 20 == 0) {
            max += 10
        }
    } else {
        vidas -= 1;
        if (vidas == 0) {
            if (prompt("Game over " + nome + "! Você fez " + pontos + " pontos.\nPara jogar novamente digite 1.") == 1) {
                vidas = 3;
                pontos = 0;
                max = 10;
            }
        } else if (vidas > 0) {
            alert("Errou! Você ainda tem " + vidas + " vidas");
        }
    }
}