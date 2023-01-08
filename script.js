let prato;
let bebida;
let sobremesa;
let nomePrato;
let nomeBebida;
let nomeSobremesa;
let valorPrato;
let valorBebida;
let valorSobremesa;
let soma;
let nome;
let endereco;

function selecionarPrato(botaoClicado) {

    const pratoAnterior = document.querySelector('.pratos .selecionado');

    
    if (pratoAnterior !== null){

        pratoAnterior.classList.remove('selecionado');
    } 
    botaoClicado.classList.add('selecionado');

    checkAnterior = document.querySelector('.pratos .selecionado .checkVerde');

    if (checkAnterior !== null){

        checkAnterior.classList.add('escondido');
    } 

    const botaoCheck = document.querySelector('.pratos .selecionado .checkVerde');
    botaoCheck.classList.remove('escondido');

    
    prato = botaoClicado.classList.contains('selecionado');
    console.log(prato);



    if(prato === true){
        botaoClicado = document.querySelector('.pratos .selecionado .nome');
        nomePrato = botaoClicado.innerHTML;
    }
    botaoClicado = document.querySelector('.pratos .selecionado .valor');
    valorPrato = botaoClicado.innerHTML;
    valorPrato = parseFloat(valorPrato.replace(',','.'));

}


function selecionarBebida(botaoClicado2) {

    const bebidaAnterior = document.querySelector('.bebidas .selecionado');
    
    if (bebidaAnterior !== null){

        bebidaAnterior.classList.remove('selecionado');
    }
    

    botaoClicado2.classList.add('selecionado');

    const check2 = document.querySelector('.bebidas .selecionado .escondido');
    check2.classList.remove('escondido');
    

    bebida = botaoClicado2.classList.contains('selecionado');
    console.log(bebida);

    if(bebida === true){
        botaoClicado2 = document.querySelector('.bebidas .selecionado .nome');
        nomeBebida = botaoClicado2.innerHTML;
    }

    botaoClicado2 = document.querySelector('.bebidas .selecionado .valor');
    valorBebida = botaoClicado2.innerHTML;
    valorBebida = parseFloat(valorBebida.replace(',','.'));


    
}
    
function selecionarSobremesa(botaoClicado3) {

    const sobremesaAnterior = document.querySelector('.sobremesas .selecionado');
    
    if (sobremesaAnterior !== null){

        sobremesaAnterior.classList.remove('selecionado');
    }
    
    botaoClicado3.classList.add('selecionado');


    const check3 = document.querySelector('.sobremesas .selecionado .escondido');
    check3.classList.remove('escondido');
   

    sobremesa = botaoClicado3.classList.contains('selecionado');
    console.log(sobremesa);

    if(sobremesa === true){
        botaoClicado3 = document.querySelector('.sobremesas .selecionado .nome');
        nomeSobremesa = botaoClicado3.innerHTML;
    }

    botaoClicado3 = document.querySelector('.sobremesas .selecionado .valor');
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

function botaoFinalizarInfo(){
    nome = prompt("Digite seu nome");
    endereco = prompt("Digite seu endereco");

}

function botaoFinalDoPedido() {
    let mensagem;
    soma = valorPrato + valorBebida + valorSobremesa;

    mensagem = "Olá, gostaria de fazer o pedido:" + "\n - Prato: " + nomePrato + "\n - Bebida: " + nomeBebida + "\n - Sobremesa: " + nomeSobremesa + 
    "\n Total: R$ " + soma.toFixed(2) + "\n\n Nome: " + nome + "\n Endereço: " + endereco
    mensagem = encodeURIComponent(mensagem);
    window.open(`https://wa.me/+5512999999999?text=${mensagem}`);
}

function fazerPedido(botaoPedir) {

    const botaoPedido = document.querySelector('.painel .escondido');
    botaoPedido.classList.remove('escondido');

    const botaoOpaco = document.querySelector('.container');
    botaoOpaco.classList.add('container-painel');

    botaoPedir = document.querySelector('.painel .prato');
    botaoPedir.innerHTML = nomePrato;

    const botaoPedir2 = document.querySelector('.painel .valor-prato');
    botaoPedir2.innerHTML = valorPrato.toFixed(2);
    

    const botaoPedir3 = document.querySelector('.painel .bebida');
    botaoPedir3.innerHTML = nomeBebida;

    const botaoPedir4 = document.querySelector('.painel .valor-bebida');
    botaoPedir4.innerHTML = valorBebida.toFixed(2);
    

    const botaoPedir5 = document.querySelector('.painel .sobremesa');
    botaoPedir5.innerHTML = nomeSobremesa;

    const botaoPedir6 = document.querySelector('.painel .valor-sobremesa');
    botaoPedir6.innerHTML = valorSobremesa.toFixed(2);
    

    const botaoPedir7 = document.querySelector('.painel .valor-total');
    somaTotal = valorPrato + valorBebida + valorSobremesa;
    botaoPedir7.innerHTML = `R$ ${somaTotal.toFixed(2)}`;
    
    

}




