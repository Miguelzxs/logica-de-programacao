function adicao(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  if (b === 0) {
    return "Não é possível dividir por zero";
  }
  return a / b;
}

let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));

let operacao = prompt("\nDigite a operação desejada:\n + \n - \n * \n /");
let resultado;

switch (operacao) {
  case "+":
    resultado = adicao(numero1, numero2);
    break;
  case "-":
    resultado = subtracao(numero1, numero2);
    break;
  case "*":
    resultado = multiplicacao(numero1, numero2);
    break;
  case "/":
    resultado = divisao(numero1, numero2);
    break;
  default:
    resultado = "Operação inválida";
    break;
}

console.log("Resultado:", resultado);


/////////////////////////////////////////////////////////////////////////////////


let login = prompt("Digite seu login:");
let senha = prompt("Digite sua senha:");

function verificarLogin(usuario, senha) {
  let usuario1 = "Flaco";
  let senha1 = "Lopez";

  let usuario2 = "Raphael";
  let senha2 = "Veiga";

  let usuario3 = "Avanti";
  let senha3 = "Palesra";

  let usuario4 = "Facundo";
  let senha4 = "Torres";

  let usuario5 = "Estevão";
  let senha5 = "Willian";

  let usuario6 = "Paulo";
  let senha6 = "Henrique";

  let usuario7 = "Felipe";
  let senha7 = "Anderson";

  let usuario8 = "Marcos";
  let senha8 = "Rocha";

  let usuario9 = "Joaquin";
  let senha9 = "Piquerez";

  let usuario10 = "Vitor";
  let senha10 = "Roque";

  if (usuario === usuario1 && senha === senha1) {
    return "Login bem sucedido!";
  }
  if (usuario === usuario2 && senha === senha2) {
    return "Login bem sucedido!";
  }
  if (usuario === usuario3 && senha === senha3) {
    return "Login bem sucedido!";
  }
  if (usuario === usuario4 && senha === senha4) {
    return "Login bem sucedido!";
  }
  if (usuario === usuario5 && senha === senha5) {
    return "Login bem sucedido!";
  }
  if (usuario === usuario6 && senha === senha6) {
    return "Login bem sucedido!";
  }
  if (usuario === usuario7 && senha === senha7) {
    return "Login bem sucedido!";
  }
  if (usuario === usuario8 && senha === senha8) {
    return "Login bem sucedido!";
  }
  if (usuario === usuario9 && senha === senha9) {
    return "Login bem sucedido!";
  }
  if (usuario === usuario10 && senha === senha10) {
    return "Login bem sucedido!";
  }

  return "Usuário ou senha incorretos";
}

let resultado = verificarLogin(login, senha);
console.log(resultado);


/////////////////////////////////////////////////////////////////////////////////