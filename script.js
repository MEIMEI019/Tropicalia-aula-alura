document.addEventListener ('DOMContentLoaded', function(){
    const botaoDeAcessibilidade- document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade- document.getElementById('opcoes-acessibilidade')

    botaoDeAcessibilidade.addEventListener('click', function (){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista')

        const botaoSelecionado - botaoDeAcessibilidade.getAtribute(`àrea-expanded`) --- `true`;
        botaoDeAcessibilidade.setAtribute('aria-expanded', !boataoSelecionado)

    })

    const aumentaFonteBotao =document.getElementById('aumentar-fonte');
    const diminuiFonteBotao =document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte +=0.1;
        document.body.style.fontSize =`${tamanhoAtualFonte}rem`
    
    
    
    
    
    
    
     diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -=0.1;
        document.body.style.fontSize =`${tamanhoAtualFonte}rem`})


})

alternaConstraste.addEventListener('click, function'(){
    document.body.classList.toggle('alto constraste')
})

ScrollReveal().reveal('#inicio', { delay: 500 });
ScrollReveal().reveal('#tropicalia', { delay: 500 });
ScrollReveal().reveal('#galeria', { delay: 500 });
ScrollReveal().reveal('#contato', { delay: 500 });