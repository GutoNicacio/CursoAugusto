//Dados iniciais
let pontos = 0;
let vidas = 3;
let max = 10;
let nome = "";
let n1 = 0;
let n2 = 0;
let nivel = 1;
let ranking = [];

//Definindo usuário
function usuario() {
    nome = prompt("Digite o seu nome: ");
    while (nome == "") {
        nome = prompt("Digite o seu nome: ");
    }    
    // if (nome == "Sair" || nome == "sair") {
    //     return;
    // }
}

//Funções
function gerarandom(qtd) {
    return Math.floor(Math.random() * qtd) +1;
}

function gerarandomN1N2() {
    n1 = gerarandom(max);
    n2 = gerarandom(max);
}

function reset() {
    pontos = 0;
    vidas = 3;
    max = 10;
    nivel = 1;
}

function ordem() {
    if (n2 > n1) {
        let gn1 = n1;
        n1 = n2;
        n2 = gn1;
    }
}

function mod() {
    while (n1 % n2 != 0) {
        n1 = gerarandom(max);
        n2 = gerarandom(max);
    }
}

function vida() {
    vidas -= 1;
    if (vidas > 1 ) {
        alert("Resposta errada. Você ainda tem " + vidas + " vidas");
    } else if (vidas == 1) {
        alert("Resposta errada. Você ainda tem " + vidas + " vida");
    } else if (vidas == 0) {
        ranking.push = ([nome, pontos]);
        if (prompt("Game Over " + nome + "!\n" + "Você fez: " + pontos + " pontos!\n"+ "Digite 1 para jogar novamente:") == 1){
            reset();
            usuario();
        } else {
            rank();
        }
    } 
  }
  
function ponto() {
    pontos = pontos + 5;
    if (pontos % 20 == 0) {
        max += 10;
        nivel += 1;
        alert ("Você subiu de nível " + nome +"!\nO jogo ficará mais difícil. Boa Sorte!" + "\nVocê está no nível: " + nivel + "!");
    }
    if (pontos % 50 == 0 && vidas < 3) {
        vidas += 1;
        if (vidas == 1)
        alert ("Parabéns "+ nome +"!\nVocê fez " + pontos + " pontos e ganhou 1 vida." + "\nVocê tem " + vidas + "vidas!");
    }
  }

function rank() {
    let texto = "";
    for (i=0; i<ranking.length; i++) {
        texto += ranking[i][0] + ": " + ranking [i][1] + "!\n"
    }
    alert(texto);
}

//Corpo do jogo
usuario();
while (vidas > 0) {
    gerarandomN1N2();
    let op = gerarandom(4);
    let x = gerarandom(3);
    let sinal = "";
    let resultado = 0;

    if (op == 0) {
        sinal = "+";
        resultado = n1 + n2;
    } else if (op == 1) {
        ordem();
        sinal = "-";
        resultado = n1 - n2;
    } else if (op == 2) {
        sinal = "/";
        mod();
        ordem();
        resultado = n1 / n2;
    } else {
        sinal = "*";
        resultado = n1 * n2;
    }

    let entrada = 0;
    let pos = 0;

    if (x == 0) {
        entrada = prompt(nome + "(Nível: " + nivel + " - Vida(s): " + vidas + ")\n" + "Quanto é X" + sinal + n2 + "=" + resultado);
        pos = n1;
    } else if (x == 1) {
        entrada = prompt(nome + "(Nível: " + nivel + " - Vida(s): " + vidas + ")\n" + "Quanto é " + n1 + sinal + "X" + "=" + resultado);
        pos = n2;
    } else {
        entrada = prompt(nome + "(Nível: " + nivel + " - Vida(s): " + vidas + ")\n" + "Quanto é " + n1 + sinal + n2 + "=" + "X");
        pos = resultado;
    }

    if (entrada == pos) {
        ponto();
    } else {
        vida();
    }
}