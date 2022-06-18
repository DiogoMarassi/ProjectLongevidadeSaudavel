const caixa2 = document.querySelector('.caixa2') ;
const aparece = document.querySelector('.aparece') ;
const promouse = document.querySelector('.promouse');
const barra = document.querySelector('.barra');
const mousearea = document.querySelector('.mousearea');
const textoApresentacao = document.querySelector('.texto-apresentacao');
const inicio = document.querySelector('.inicio');
const contato = document.querySelector('.contato');
const produto = document.querySelector('.produto');
const botao1 = document.querySelector('.saiba-como-botao');









const listaDosMenus = document.querySelectorAll('.menu');

for(let contador = 0; contador < listaDosMenus.length; contador++)
{
    const tipoDaFirula = listaDosMenus[contador]

    const classeTipoDaFirula = tipoDaFirula.classList[1]

    const firulaInd = `firula${classeTipoDaFirula}`



    

    listaDosMenus[contador].addEventListener('mouseover', function() 
    {
        listaDosMenus[contador].classList.add(firulaInd);
    });

    listaDosMenus[contador].addEventListener('mouseout', function() 
    {
        listaDosMenus[contador].classList.remove(firulaInd);
    });
}
    
mousearea.addEventListener('mouseover', function() 
{
    aparece.classList.remove('animacaovolta');
    aparece.classList.add('animacaoida');    
});

mousearea.addEventListener('mouseout', function() 
{   
    aparece.classList.remove('animacaoida');
    aparece.classList.add('animacaovolta');  
});










