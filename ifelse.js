let idade = 16 

if(idade >= 18){
console.log("maior idade")
}
else{
console.log("menor idade")
}

/////////////////////////////////////////////////////////////////////////////////


let horas = 15
if(horas >= 6 && horas < 12){
console.log("BOM DIA")
}
else if(horas >= 12 && horas < 18){
console.log("BOA TARDE")
}
else{
console.log("BOA NOITE")
}

/////////////////////////////////////////////////////////////////////////////////


let idade = Number(prompt("Digite sua idade: "))
if (idade >= "16") {
console.log("Você pode entrar no evento! ")
} else{
console.log("Desculpe, você não pode entrar no evento")
}


/////////////////////////////////////////////////////////////////////////////////


let numero1 = (prompt("Digite o primeiro número: "))
let numero2 = (prompt("Digite o segundo número: "))

if(numero1 > numero2) {
console.log("O primeiro valor é superior ao segundo")
} else if (numero2 > numero1) {
console.log("O Segundo valor é superior ao primeiro")
} else {

/////////////////////////////////////////////////////////////////////////////////


let temperatura = 12

if (temperatura <= 20) {
    console.log("frio")
} else if (temperatura >= 25) {
    console.log("calor")
} else if (temperatura >= 21 && temperatura < 24) {
    console.log("ameno")
}


/////////////////////////////////////////////////////////////////////////////////


let palavra = prompt("Digite uma palavra: ")

if (palavra === "felicidade") {
    console.log("palavra correta")
} else {
    console.log("palavra incorreta")
}

/////////////////////////////////////////////////////////////////////////////////


let moedas = prompt("Digite a quantidade de moedas:")

if (moedas < "10") {
    console.log("poucas moedas")
} else if (moedas >= "10" && moedas <= "20") {
    console.log("quantidade média")
} else {
    console.log("muitas moedas")
}


/////////////////////////////////////////////////////////////////////////////////


let temperatura = prompt("Digite a temperatura °C: ")

if (temperatura > "30") {
    console.log("Muito quente")
} else if (temperatura >= "20" && temperatura <= "30") {
    console.log("calor")
} else {
    console.log("frio")
}


/////////////////////////////////////////////////////////////////////////////////


let numero = prompt("Digite um número: ")

if (numero > "0") {
    console.log("O número é positivo.")
} else if (numero < "0") {
    console.log("O número é negativo.")
} else 
    console.log("O número é zero.")



/////////////////////////////////////////////////////////////////////////////////


let nota = prompt("Digite a nota do aluno: ")

if (nota >= "7") {
    console.log("APROVADO")
} else if (nota < "7") {
    console.log("reprovado")
}


/////////////////////////////////////////////////////////////////////////////////


let animal = "cachorro"

if (animal === "cachorro" || animal === "gato" || animal === "passaro") {
    console.log("animal listado")
} else {
    console.log("animal não listado")
}


/////////////////////////////////////////////////////////////////////////////////



let diaSemana = "Segunda-feira"

if (diaSemana === "Sábado" || diaSemana === "Domingo") {
    console.log("Fim de semana")
} else {
    console.log("Dia útil")
}


/////////////////////////////////////////////////////////////////////////////////


let experiencia = 3;

if (experiencia > 2) {
    console.log("Experiente")
} else {
    console.log("Iniciante")
}


/////////////////////////////////////////////////////////////////////////////////

let respostaCorreta = 0
let respostaIncorreta = 0

// Pergunta 1
console.log("\nQuantas vezes Cristiano Ronaldo ganhou a bola de ouro?")
console.log("A - 5")
console.log("B - 10")
console.log("C - 7")
console.log("D - 9")
let pergunta1 = prompt("Digite a resposta: ")
if (pergunta1 === "A" || pergunta1 === "5") {
    console.log("\nAlternativa Correta")
    respostaCorreta++
} else {
    console.log("Resposta Errada")
    respostaIncorreta++;
}

// Pergunta 2
console.log("\nQuantas vezes Lionel Messi ganhou a bola de ouro?");
console.log("A - 4");
console.log("B - 1");
console.log("C - 6");
console.log("D - 8");
let pergunta2 = prompt("Digite a resposta: ");
if (pergunta2 === "D" || pergunta2 === "8") {
    console.log("\nAlternativa Correta");
    respostaCorreta++;
} else {
    console.log("Resposta Errada");
    respostaIncorreta++;
}

// Pergunta 3
console.log("\nQuem é o maior vencedor da copa do mundo?");
console.log("A - Pelé");
console.log("B - Maradona");
console.log("C - Messi");
console.log("D - Yuri Alberto");
let pergunta3 = prompt("Digite a resposta: ");
if (pergunta3 === "A" || pergunta3.toLowerCase() === "pelé") {
    console.log("\nAlternativa Correta");
    respostaCorreta++;
} else {
    console.log("Resposta Errada");
    respostaIncorreta++;
}

// Pergunta 4
console.log("\nQuem é o maior campeão do campeonato brasileiro?");
console.log("A - Palmeiras");
console.log("B - Flamengo");
console.log("C - Paysandu");
console.log("D - Atlético Mineiro");
let pergunta4 = prompt("Digite a resposta: ");
if (pergunta4 === "A" || pergunta4.toLowerCase() === "palmeiras") {
    console.log("\nAlternativa Correta");
    respostaCorreta++;
} else {
    console.log("Resposta Errada");
    respostaIncorreta++;
}

// Pergunta 5
console.log("\nQual o maior time da América?");
console.log("A - Corinthians");
console.log("B - Palmeiras");
console.log("C - Boca Juniors");
console.log("D - River Plate");
let pergunta5 = prompt("Digite a resposta: ");
if (pergunta5 === "B" || pergunta5.toLowerCase() === "palmeiras") {
    console.log("\nAlternativa Correta");
    respostaCorreta++;
} else {
    console.log("Resposta Errada");
    respostaIncorreta++;
}

// Pergunta 6
console.log("\nQual desses não ganhou a bola de ouro?");
console.log("A - Luka Modric");
console.log("B - Cristiano Ronaldo");
console.log("C - Messi");
console.log("D - Neymar");
let pergunta6 = prompt("Digite a resposta: ");
if (pergunta6 === "D" || pergunta6.toLowerCase() === "neymar") {
    console.log("\nAlternativa Correta");
    respostaCorreta++;
} else {
    console.log("Resposta Errada");
    respostaIncorreta++;
}

// Pergunta 7
console.log("\nEm que ano Cristiano Ronaldo ganhou seu primeiro título pela seleção de Portugal?");
console.log("A - 2006");
console.log("B - 2022");
console.log("C - 2016");
console.log("D - 2018");
let pergunta7 = prompt("Digite a resposta: ");
if (pergunta7 === "C" || pergunta7 === "2016") {
    console.log("\nAlternativa Correta");
    respostaCorreta++;
} else {
    console.log("Resposta Errada");
    respostaIncorreta++;
}

// Pergunta 8
console.log("\nQuem é o maior campeão paulista?");
console.log("A - Juventus da Mooca");
console.log("B - Mirassol");
console.log("C - Palmeiras");
console.log("D - Corinthians");
let pergunta8 = prompt("Digite a resposta: ");
if (pergunta8 === "D" || pergunta8.toLowerCase() === "corinthians") {
    console.log("\nAlternativa Correta");
    respostaCorreta++;
} else {
    console.log("Resposta Errada");
    respostaIncorreta++;
}

// Pergunta 9
console.log("\nQuem é o maior artilheiro da Libertadores?");
console.log("A - Alberto Spencer");
console.log("B - Ronyelson");
console.log("C - Gabigol");
console.log("D - Germán Cano");
let pergunta9 = prompt("Digite a resposta: ");
if (pergunta9 === "A" || pergunta9.toLowerCase() === "alberto spencer") {
    console.log("\nAlternativa Correta");
    respostaCorreta++;
} else {
    console.log("Resposta Errada");
    respostaIncorreta++;
}

// Pergunta 10
console.log("\nQuem ganhou a bola de ouro de 2002?");
console.log("A - Ronaldo Nazário");
console.log("B - Oliver Kahn");
console.log("C - Zinédine Zidane");
console.log("D - Roberto Carlos");
let pergunta10 = prompt("Digite a resposta: ");
if (pergunta10 === "A" || pergunta10.toLowerCase() === "ronaldo nazário") {
    console.log("\nAlternativa Correta");
    respostaCorreta++;
} else {
    console.log("Resposta Errada");
    respostaIncorreta++;
}

// Resultado final
console.log("\nResumo Final");
console.log("Respostas Corretas: " + respostaCorreta);
console.log("Respostas Incorretas: " + respostaIncorreta);


/////////////////////////////////////////////////////////////////////////////////



