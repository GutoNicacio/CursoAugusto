let unidade = 0;
let dezena = 0;
let centena = 0;
let milhar = 0;

let i = 0;

while (i < 1000) {
    console.log("|" + milhar + "|" + centena + "|" + dezena + "|" + unidade + "|");

    unidade += 1;

    if (unidade == 10) {
        dezena += 1;
        unidade = 0;
    }

    if (dezena == 10) {
        centena += 1;
        dezena = 0;
    }

    if (centena == 10) {
        milhar += 1;
        centena = 0;
    }

    i += 1;
}