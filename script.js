let prato;
let bebida;
let sobremesa;
let nomePrato;
let nomeBebida;
let nomeSobremesa;
let valorPrato;
let valorBebida;
let valorSobremesa;

function selecionarPrato(botaoClicado) {

    const pratoAnterior = document.querySelector('.pratos .selecionado');
    
    if (pratoAnterior !== null){

        pratoAnterior.classList.remove('selecionado');
    }

    botaoClicado.classList.add('selecionado');
    
    prato = botaoClicado.classList.contains('selecionado');
    console.log(prato);

    if(prato === true){
        botaoClicado = document.querySelector('.pratos .nome');
        nomePrato = botaoClicado.innerHTML;
    }
    botaoClicado = document.querySelector('.pratos .valor');
    valorPrato = botaoClicado.innerHTML;
    valorPrato = parseFloat(valorPrato.replace(',','.'));

}


function selecionarBebida(botaoClicado2) {

    const bebidaAnterior = document.querySelector('.bebidas .selecionado');
    
    if (bebidaAnterior !== null){

        bebidaAnterior.classList.remove('selecionado');
    }
    

    botaoClicado2.classList.add('selecionado');

    bebida = botaoClicado2.classList.contains('selecionado');
    console.log(bebida);

    if(bebida === true){
        botaoClicado2 = document.querySelector('.bebidas .nome');
        nomeBebida = botaoClicado2.innerHTML;
    }

    botaoClicado2 = document.querySelector('.bebidas .valor');
    valorBebida = botaoClicado2.innerHTML;
    valorBebida = parseFloat(valorBebida.replace(',','.'));
    valorBebida
    
}
    
function selecionarSobremesa(botaoClicado3) {

    const sobremesaAnterior = document.querySelector('.sobremesas .selecionado');
    
    if (sobremesaAnterior !== null){

        sobremesaAnterior.classList.remove('selecionado');
    }

    botaoClicado3.classList.add('selecionado');

    sobremesa = botaoClicado3.classList.contains('selecionado');
    console.log(sobremesa);

    if(sobremesa === true){
        botaoClicado3 = document.querySelector('.sobremesas .nome');
        nomeSobremesa = botaoClicado3.innerHTML;
    }

    botaoClicado3 = document.querySelector('.sobremesas .valor');
    valorSobremesa = botaoClicado3.innerHTML;
    valorSobremesa = parseFloat(valorSobremesa.replace(',','.'));
}

function botaoFinalizar() {

    if(prato === true && bebida === true && sobremesa === true) {
        
        const botao = document.querySelector('.botao-finalizar');
        botao.classList.add('botao-ativo');
        botao.innerHTML = "Fechar pedido";
    }
    const habilitarBotao = document.querySelector('.botao-finalizar');
    habilitarBotao.removeAttribute("disabled");
}


function fazerPedido() {
    let mensagem;
    let soma = valorPrato + valorBebida + valorSobremesa;

    mensagem = `Olá, gostaria de fazer o pedido:
              - Prato: ${nomePrato}
              - Bebida: ${nomeBebida}
              - Sobremesa: ${nomeSobremesa}
              Total: R$ ${soma.toFixed(2)}`
    alert(mensagem);
}



