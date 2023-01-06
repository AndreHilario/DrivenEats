let prato;
let bebida;
let sobremesa;

function selecionarPrato(botaoClicado) {

    const pratoAnterior = document.querySelector('.pratos .selecionado');
    
    if (pratoAnterior !== null){

        pratoAnterior.classList.remove('selecionado');
    }

    botaoClicado.classList.add('selecionado');

    prato = botaoClicado.classList.contains('selecionado');
    console.log(prato);
}


function selecionarBebida(botaoClicado2) {

    const bebidaAnterior = document.querySelector('.bebidas .selecionado');
    
    if (bebidaAnterior !== null){

        bebidaAnterior.classList.remove('selecionado');
    }

    botaoClicado2.classList.add('selecionado');

    bebida = botaoClicado2.classList.contains('selecionado');
    console.log(bebida);
}
    

function selecionarSobremesa(botaoClicado3) {

    const sobremesaAnterior = document.querySelector('.sobremesas .selecionado');
    
    if (sobremesaAnterior !== null){

        sobremesaAnterior.classList.remove('selecionado');
    }

    botaoClicado3.classList.add('selecionado');

    sobremesa = botaoClicado3.classList.contains('selecionado');
    console.log(sobremesa);
}

function botaoFinalizar() {

    if(prato === true && bebida === true && sobremesa === true) {
        
        const botao = document.querySelector('.botao-finalizar');
        botao.classList.add('botao-ativo');
        botao.innerHTML = "Fechar pedido";
    }
}



