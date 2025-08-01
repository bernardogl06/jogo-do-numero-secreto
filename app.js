//let tituloDoJogo = document.querySelector("h1");
//tituloDoJogo.innerHTML = "Jogo do Numero Secreto";

//let instrucaoDoJogo = document.querySelector("p");
//instrucaoDoJogo.innerHTML = "Chute um numero de 1 a 10";
let listaDeNumerosSorteados = [];
let numeroLimiteDeElementosNaLista = 10;
let tentativas = 1;
let numeroSecreto = gerarNumeroAleatorio();

//Criando a função para exibir o texto na tela para que não repita o codigo varias vezes (boa prática)
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
     if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

mensagemInicial();
//Função com parametro, passamos o parametro dentro do parentese e chamamos a função para de fato executa-la
function mensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do Número Secreto");
    exibirTextoNaTela("p", "Escolha um número de 1 a 10");
}


function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou!");
        let palavratentativa = tentativas == 1 ? "tentativa" : "tentativas";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavratentativa}`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById ("reiniciar").removeAttribute ("disabled");
    }
    else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", `O número secreto é menor que (${chute})`);
        }
        else {
            exibirTextoNaTela("p", `O número secreto é maior que (${chute})`);
        }
        tentativas++;
        limparCampo();  
    }
}

function gerarNumeroAleatorio() {
   let numeroSorteado = parseInt(Math.random() * numeroLimiteDeElementosNaLista + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
   if (quantidadeDeElementosNaLista == numeroLimiteDeElementosNaLista);
   if (listaDeNumerosSorteados.includes(numeroSorteado)) {
        return gerarNumeroAleatorio();
        
   }
   else {
    return numeroSorteado;
    listaDeNumerosSorteados.push(numeroSorteado);
   }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    mensagemInicial();
    limparCampo();
    document.getElementById ("reiniciar").setAttribute ("disabled", true);

}

