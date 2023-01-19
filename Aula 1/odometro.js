let unidade = 0;
let dezena = 0;
let centena = 0;
let milhar = 0;

let i = 0;

let numero = Math.round(Math.abs(Math.random() * (2 - 1) + 1));

if (numero == 1) {
    while (i < 10000) {
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
    alert("Executado no WHILE!");
} else {
    for (i=0; i<10000; i++) {
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
    
    }
    alert("Executado no FOR!");
}