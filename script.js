function selecionarPrato(botaoClicado) {

    const pratoAnterior = document.querySelector('.pratos .selecionado');
    
    if (pratoAnterior !== null){

        pratoAnterior.classList.remove('selecionado');
    }

    botaoClicado.classList.add('selecionado');

}
function selecionarBebida(botaoClicado2) {

    const bebidaAnterior = document.querySelector('.bebidas .selecionado');
    
    if (bebidaAnterior !== null){

        bebidaAnterior.classList.remove('selecionado');
    }

    botaoClicado2.classList.add('selecionado');

}
function selecionarSobremesa(botaoClicado3) {

    const sobremesaAnterior = document.querySelector('.sobremesas .selecionado');
    
    if (sobremesaAnterior !== null){

        sobremesaAnterior.classList.remove('selecionado');
    }

    botaoClicado3.classList.add('selecionado');

}

