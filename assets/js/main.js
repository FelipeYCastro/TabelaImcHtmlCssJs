//capturar evento de submit do formulário
const form = document.querySelector("#formulario");

//adicionamos um escutador do evento do formulário(envento de variavel,addEventListener("submit", function(e) {...})
// aqui tu podera pegar em varios codigo e, evento, event, significa que ele capturara o evento do click
form.addEventListener("submit", function (e) {
  //parar de enviar ou não envia formulário ou click com o preventDefault()
  e.preventDefault();
  //aqui estou pegando o evento click do input inteiro

  //coapturar dados dos inputs
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  //aqui estou pegando o apenas o valor e transfomando para number
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  //se não for um number ele irá para essa estrutura de decisão
  if (!peso) {
    setResultado("Peso inválido", false);
    return;
  }
  if (!altura) {
    setResultado("Altura inválida", false);
    return;
  }

  //criando uma variavel e função para calcular o imc
  const imc = getImc(peso, altura);
  const nivelImc = getNivelImv(imc); //aqui é uma variavel com os niveis de peso em um texto

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true);
});

//criando uma função com uma array com lista de textos com faixas de textos dos graus de pesos
function getNivelImv(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  //aqui foi coloca um if sem chaves{} pois como é só uma linha não precisa
  //outro ponto não foi posto if else pois quanco der o return, ele para a função e vai para fora das chaves
  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.6) return nivel[1];
  if (imc < 18.6) return nivel[0];
}

//função para calcular imc
function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}
//cria uma função que adiciona paragrafo no html tag p
function criaP() {
  const p = document.createElement("p");
  return p;
}

//agora uma função para colocar o resultada no id resultado
//msg significa mensagem, ele é um atributo do setResultado
function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
  const p = criaP();

  if (isValid) {
    //criar e adicionar uma classe no javascript com element.classList.add
    p.classList.add("paragrafo-resultado-ok");
  } else {
    //criar e adicionar uma classe no javascript com element.classList.add
    p.classList.add("dado-invalido");
  }

  p.innerHTML = msg;
  //inserindo um elemento filho da div resultado
  resultado.appendChild(p);
}
