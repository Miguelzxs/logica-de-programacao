let respostacorreta = 0;
let respostaincorreta = 0;

// Pergunta 1
console.log("\nQual a capital do Brasil?");
console.log("A - Brasília");
console.log("B - São Paulo");
console.log("C - Minas Gerais");
console.log("D - Bahia");
let pergunta1 = prompt("Digite a resposta: ");
switch (true) {
  case pergunta1 === "A" || pergunta1.toLowerCase() === "brasília":
    console.log("Alternativa correta");
    respostacorreta++;
    break;
  default:
    console.log("Resposta Errada");
    respostaincorreta++;
}

// Pergunta 2
console.log("\nQual o nome do planeta mais próximo do Sol?");
console.log("A - Marte");
console.log("B - Plutão");
console.log("C - Saturno");
console.log("D - Mercúrio");
let pergunta2 = prompt("Digite a resposta: ");
switch (true) {
  case pergunta2 === "D" || pergunta2.toLowerCase() === "mercúrio":
    console.log("Alternativa correta");
    respostacorreta++;
    break;
  default:
    console.log("Resposta Incorreta");
    respostaincorreta++;
}

// Pergunta 3
console.log("\nEm que ano ocorreu a Revolução Francesa?");
console.log("A - 1768");
console.log("B - 1789");
console.log("C - 1756");
console.log("D - 1745");
let pergunta3 = prompt("Digite a resposta: ");
switch (true) {
  case pergunta3 === "B" || pergunta3 === "1789":
    console.log("Alternativa correta");
    respostacorreta++;
    break;
  default:
    console.log("Resposta Errada");
    respostaincorreta++;
}

// Pergunta 4
console.log("\nQual o nome do maior oceano do mundo?");
console.log("A - Oceano Atlântico");
console.log("B - Oceano Índico");
console.log("C - Oceano Pacífico");
console.log("D - Oceano Antártico");
let pergunta4 = prompt("Digite a resposta: ");
switch (true) {
  case pergunta4 === "C" || pergunta4.toLowerCase() === "oceano pacífico":
    console.log("Alternativa correta");
    respostacorreta++;
    break;
  default:
    console.log("Resposta Errada");
    respostaincorreta++;
}

// Pergunta 5
console.log("\nQual o nome do maior deserto do mundo?");
console.log("A - Deserto do Atacama");
console.log("B - Deserto do Kalahari");
console.log("C - Deserto do Saara");
console.log("D - Deserto Antártico");
let pergunta5 = prompt("Digite a resposta: ");
switch (true) {
  case pergunta5 === "D" || pergunta5.toLowerCase() === "deserto antártico":
    console.log("Alternativa correta");
    respostacorreta++;
    break;
  default:
    console.log("Resposta Incorreta");
    respostaincorreta++;
}

// Pergunta 6
console.log("\nQual a moeda oficial da União Europeia?");
console.log("A - Real");
console.log("B - Euro");
console.log("C - Peso");
console.log("D - Dólar");
let pergunta6 = prompt("Digite a resposta: ");
switch (true) {
  case pergunta6 === "B" || pergunta6.toLowerCase() === "euro":
    console.log("Alternativa correta");
    respostacorreta++;
    break;
  default:
    console.log("Resposta Incorreta");
    respostaincorreta++;
}

// Pergunta 7
console.log("\nQual a capital da Itália?");
console.log("A - Abu Dhabi");
console.log("B - Washington");
console.log("C - Canberra");
console.log("D - Roma");
let pergunta7 = prompt("Digite a resposta: ");
switch (true) {
  case pergunta7 === "D" || pergunta7.toLowerCase() === "roma":
    console.log("Alternativa correta");
    respostacorreta++;
    break;
  default:
    console.log("Resposta Incorreta");
    respostaincorreta++;
}

// Pergunta 8
console.log("\nQual a capital da Austrália?");
console.log("A - Abu Dhabi");
console.log("B - Washington");
console.log("C - Canberra");
console.log("D - Roma");
let pergunta8 = prompt("Digite a resposta: ");
switch (true) {
  case pergunta8 === "C" || pergunta8.toLowerCase() === "canberra":
    console.log("Alternativa correta");
    respostacorreta++;
    break;
  default:
    console.log("Resposta Incorreta");
    respostaincorreta++;
}

// Pergunta 9
console.log("\nQual a montanha mais alta do mundo?");
console.log("A - Mauna Kea");
console.log("B - Dhaulagiri");
console.log("C - Monte Chimborazo");
console.log("D - Monte Everest");
let pergunta9 = prompt("Digite a resposta: ");
switch (true) {
  case pergunta9 === "D" || pergunta9.toLowerCase() === "monte everest":
    console.log("Alternativa correta");
    respostacorreta++;
    break;
  default:
    console.log("Resposta Incorreta");
    respostaincorreta++;
}

// Pergunta 10
console.log("\nQuantos ossos temos no nosso corpo?");
console.log("A - 126");
console.log("B - 206");
console.log("C - 18");
console.log("D - 300");
let pergunta10 = prompt("Digite a resposta: ");
switch (true) {
  case pergunta10 === "B" || pergunta10 === "206":
    console.log("Alternativa correta");
    respostacorreta++;
    break;
  default:
    console.log("Resposta Incorreta");
    respostaincorreta++;
}

// Exibir o resultado
console.log("\nResumo final");
console.log("Respostas Corretas: " + respostacorreta);
console.log("Respostas Incorretas: " + respostaincorreta);


/////////////////////////////////////////////////////////////////////////////////


console.log(" \n Qual sistema você simular:  \n 1- Terminal linux \n 2- CMD windows")
let comando = Number(prompt("Digite a sua opção: "))
if (comando === 1) {
    console.log(" \n Você escolheu terminal linux, aqui estão os comandos! ")
console.log("  1- CP \n 2- ECHO \n 3- RM  \n 4- LS \n 5- MV \n 6- MKDIR \n 7- CD e CD.. \n 8- CLEAR \n 9- CAT ")

let opção = Number(prompt("Qual dos comandos você gostaria de saber? "))
switch(opção) {
    case 1:
        console.log("este comando serve para copiar um arquivo \n Exemplo: cp arquivo.txt e em seguida o caminho do diretório para onde você queira copiar ")
        break;
        case 2:
            console.log("Este comando serve para criar arquivos \n Exemplo: echo  > arquivo.txt ")
            break;
            case 3:
                console.log("Este comando serve para apagar um arquivo \n Exemplo: rm teste.txt ")
                break;
                case 4:
                    console.log("Este comando serve para listar pastas e arquivos de um diretório \n Exemplo: ls arquivo.txt ")
                    break;
                    case 5:
                        console.log("Este comando serve para renomear um arquivo ou pasta \n Exemplo: mv miguel.txt ricardo.txt ")
                        break;
                        case 6:
                            console.log("Este comando serve para criar uma pasta ou diretório \n Exemplo: mkdir arquivos")
                            break;
                            case 7:
                                console.log("Este comando serve tanto para entrar ou sair de um diretório \n Exemplo: cd arquivos ou arquivos cd..")
                                break;
                                case 8:
                                    console.log("Este comando serve para apagar a pagina do seu terminal")
                                    break;
                                    case 9:
                                        console.log("O comando cat serve para mostrar o conteúdo dentro de um arquivo.txt \nExemplos: Dentro do arquivo.txt tenho um texto escrito 'AvantiPalestra', se eu digitar cat arquivo.txt, irá aparecer 'AvantiPalestra'")
                                        break;
                                        default:
                                        console.log("Este comando não está em nosso sistema")
    
}
}



else if (comando === 2) {
    console.log("\n Você escolheu CMD windows, aqui estão os comandos \n 1- MKDIR \n 2- DIR \n 3- CD e CD .. \n 4- DEL \n 5- CLS \n 6- ECHO \n 7- COPY \n 8- MOVE \n 9- RMDIR \n 10- EXIT ")
    let opção = Number(prompt("Qual dos comandos você gostaria de saber? "))
    switch(opção){
          case 1:
        console.log("Este comando serve para criar uma pasta ou diretório \n Exemplo: mkdir arquivos")
        break;
        case 2:
            console.log("Este comando serve para listar pastas e arquivos de um diretório \n Exemplo: dir arquivos.txt ")
            break;
            case 3:
                console.log("Este comando serve tanto para entrar ou sair de um diretório \n Exemplo: cd arquivos ou arquivos cd..")
                break;
                case 4:
                    console.log("Este comando serve para apagar um diretório ou pasta/arquivo \n Exemplo: del arquivos.txt")
                    break;
                    case 5:
                        console.log("Este comando serve para limpar a tela do prompt de comando")
                        break;
                        case 6:
                            console.log("Este comando serve para criar um arquivo \n Exemplo: echo > arquivo.txt")
                            break;
                            case 7:
                                console.log("este comando serve para copiar um arquivo \n Exemplo: copy arquivo.txt e em seguida o caminho do diretório para onde você queira copiar ")
                                break;
                                case 8:
                                    console.log(" Este comando serve para mover um arquivo \n Exemplo: move arquivo.txt e em seguida o caminho do diretório para onde você quer mover ")
                                    break;
                                    case 9:
                                        console.log("Este comando serve para apagar um diretório \n Exemplo: rmdir arquivos")
                                        break;
                                        case 10:
                                            console.log(" Este comando serve para fechar a janela do prompt de comando ou encerrar a execução de um script")
                                            break;
                                            default:
                                            console.log("Este comando não tem no sistema")
    }

    
} 
    else {
        console.log("Não temos este sistema, escolha um disponivel ")
    }


/////////////////////////////////////////////////////////////////////////////////



let idioma = prompt("Qual seu idioma? ")
switch(idioma){
    case "Português":
        console.log("Bom dia, tudo bem?")
        break;
        case "Inglês":
        console.log("Good Morning, how are you?")
        break;
        case "Espanhol":
        console.log("Buenos días, todo bien?")
        break;
        case "Francês":
        console.log("Bonjour, tout va bien ?")
        break;
        default:
        console.log("Este não é o idioma certo")
} 










let dias = Number(prompt("O dia da semana é: "))
switch(dias){
    case 1:
        console.log("Hoje é Domingo")
        break;
        case 2:
            console.log("Hoje é Segunda")
            break;
            case 3:
                console.log("Hoje é Terça")
                break;
                case 4:
                    console.log("Hoje é Quarta")
                    break;
                    default:
                    console.log("Hoje não é este dia")
}








 let transporte = Number(prompt("Seu transporte é: "))
switch(transporte){
    case 1:
        console.log("Carro")
        break;
        case 2:
            console.log("Caminhão")
            break;
            case 3:
                console.log("Moto")
                break;
                case 4:
                    console.log("Bicicleta")
                    break;
                    default:
                    console.log("este não é seu tipo de transporte")
}









let urgência = Number(prompt("Seu nível de urgência é: "))
switch(urgência){
    case 1:
        console.log("Baixa")
        break;
        case 2:
            console.log("Média")
            break;
            case 3:
                console.log("Alta")
                break;
                    default:
                    console.log("este não é seu nível de urgência")
}




let veiculos = Number(prompt("Qual seu tipo de transporte,SUV, compacto ou caminhão: "))
switch(veiculos){
    case 1:
    console.log("Volkswagen T-Cross, Fiat Pulse, Renault Duster, seu veículo  é de categoria SUV")
    break;
    case 2:
        console.log(" Caoa Chery iCar, Fiat Mobi, JAC E-JS1, seu veículo  é de categoria compacto")
        break;
        case 3:
            console.log("Toco, Truck, Carreta, seu veículo é de categoria caminhão ")
            break;
            default:
            console.log("Se seu veículo não estiver na lista, pesquise para saber qual o tipo do seu veículo ")
}






let tempo = Number(prompt("\n 1- < 30 minutos \n 2- > 30 minutos \n 3- > 1 hora \n Quanto tempo você ficou no estacionamento: "))
switch(tempo){
    case 1:
        console.log("Você terá que pagar R$10,00")
        break;
        case 2:
            console.log("Você terá que pagar R$15,00")
            break;
            case 3:
                console.log("Você terá que pagar R$20,00")
                
}



let dificuldade = Number(prompt("Seu nível de dificuldade é: "))
switch(dificuldade){
    case 1:
        console.log("Fácil")
        break;
        case 2:
            console.log("Normal")
            break;
            case 3:
                console.log("Difícil")
                break;
                    default:
                    console.log("isto não é uma dificuldade")
}






let serviço = Number(prompt("Qual serviço você deseja: "))
switch(serviço){
    case 1:
    console.log("Você escolheu Yoga")
    break;
    case 2:
        console.log("Você escolheu Musculação")
        break;
        case 3:
            console.log("Você escolheu personal trainer")
            break;
            default:
            console.log("Não temos este serviço")
}





let preço = Number(prompt("\n 1- estudante \n 2- meia-entrada \n 3- inteira \n Qual sua opção: "))
switch(preço){
    case 1:
        console.log("O ingresso é R$10,00")
        break;
        case 2:
            console.log("O ingresso é R$15,00")
            break;
            case 3:
                console.log("O ingresso é  R$30,00")
                break;
                default:
                console.log("Não temos está opção")
                
}




let FaixaEtária = Number(prompt("\n 1- jovem \n 2- adulto \n 3- idoso \n Qual sua opção: "))
switch(FaixaEtária){
    case 1:
        console.log("Seu nivel é mediano")
        break;
        case 2:
            console.log("seu nivel é intermediário ")
            break;
            case 3:
                console.log("seu nível é fácil")
                break;
                console.log("Não temos está opção")
}







let GeneroMusical = Number(prompt("\n 1- Classico \n 2- sertanejo \n 3- rock \n Qual sua opção: "))
switch(GeneroMusical){
    case 1:
        console.log("Piano")
        break;
        case 2:
            console.log(" viola caipira ")
            break;
            case 3:
                console.log(" guitarra eletrica")
                break;
                default:
                console.log("Não temos está opção")
}





/*
let cursos = Number(prompt("\n 1- front-end \n 2- back-end \n 3- mobile \n Qual curso você deseja: "))
switch(cursos){
    case 1:
        console.log("Você entrou em um curso da área de front-end")
        break;
        case 2:
            console.log(" Você entrou em um curso da área de back-end ")
            break;
            case 3:
                console.log(" Você entrou em um curso da área de mobile")
                break;
                default:
                console.log("Não temos está opção")
}



let Nível = Number(prompt("\n 1- Jovem \n 2- Adulto \n 3- Idoso \n Qual sua opção de nível: "))
switch(Nível){
    case 1:
        console.log("seu nível é avançado")
        break;
        case 2:
            console.log("seu nível intermediário ")
            break;
            case 3:
                console.log("seu nível é iniciante")
                break;
                default:
                console.log("Não temos está opção")
}







let NíveisDeHabilidade = Number(prompt("\n 1- adição \n 2- Divisão \n 3- Potência \n Qual sua opção de nível: "))
switch(NíveisDeHabilidade){
    case 1:
        console.log("seu nível é iniciante")
        break;
        case 2:
            console.log("seu nível intermediário ")
            break;
            case 3:
                console.log("seu nível é avançado")
                break;
                default:
                console.log("Não temos está opção")
}



/////////////////////////////////////////////////////////////////////////////////


