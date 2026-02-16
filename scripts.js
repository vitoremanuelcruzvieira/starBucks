/* 
    Descobrir quando o usuário clicou no botão
    Quem é a imagem que eu vou trocar
    Trocar a imagem principal
    colocar a imagem desejada
    Trocar a cor de fundo

    document = HTML
    querySelector = seleciona o que eu quiser no HTML
   

*/

let imagem = document.querySelector(".imagem-copo")
let fundo = document.querySelector(".circulo")

function trocaImagem(endereco){
   imagem.src = endereco
}

function trocaFundo(cor){
    fundo.style.background = cor
}