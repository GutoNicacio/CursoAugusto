//nome e glicemia são variáveis com valores fixados no início do código
let nome = "Júnior";
let glicemia = 130;

//usando if (se) para identificar se está saudável, hipoglicêmico ou hiperglicêmico
//agora usando a variável com o nome do paciente na mensagem
if (glicemia < 70) {
    alert("O paciente: " + nome + ", está hipoglicêmico!");
} else if (glicemia > 99) {
    alert("O paciente: " + nome + ", está hiperglicêmico!");
} else {
    alert("O paciente: " + nome + ", está saudável!");
}