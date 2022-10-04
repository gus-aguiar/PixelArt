// setando cores
let corUm = 'black'
const trocaCorUm = document.getElementById('colorUm')
trocaCorUm.style.backgroundColor = corUm

let corDois = 'green'
const trocaCorDois = document.getElementById('colorDois')
trocaCorDois.style.backgroundColor = corDois

let corTres = 'blue'
const trocaCorTres = document.getElementById('colorTres')
trocaCorTres.style.backgroundColor = corTres

let corQuatro = 'red'
const trocaCorQuatro = document.getElementById('colorQuatro')
trocaCorQuatro.style.backgroundColor = corQuatro

//função que troca de cores
function geracor(){
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}
// function atribuicor (){
//     const pegaPaleta = document.getElementsByClassName('color')
//     for (let index = 1; index < pegaPaleta.length; index+=1){
//         pegaPaleta[index].style.backgroundColor = geracor()
//     }

// }

//evento no botão
const botao = document.getElementById('button-random-color')
botao.addEventListener("click", function atribuicor (){
    const pegaPaleta = document.getElementsByClassName('color')
    for (let index = 1; index < pegaPaleta.length; index+=1){
        pegaPaleta[index].style.backgroundColor = geracor()
    }

})

//cria grid 
const container = document.getElementById('pixel-board');

function criaCaixas(numero) {
  for (let index = 0; index < numero; index += 1) {
    const row = container.appendChild(document.createElement('div'));
    for (let key = 0; key < numero; key += 1) {
      const square = document.createElement('div');
      square.className = 'pixel';
    //   square.backgroundColor = 'white'
      row.appendChild(square);
    }
  }
}


criaCaixas(5);

// seleciona a cor 
let corSelecionada = 'black'

function selecionaCor (event) {
    const techElement = document.querySelector('.selected');
    techElement.classList.remove('selected');
    event.target.classList.add('selected');
    corSelecionada = event.target.style.backgroundColor;
  }
  trocaCorUm.addEventListener('click', selecionaCor);
  trocaCorDois.addEventListener('click', selecionaCor);
  trocaCorTres.addEventListener('click', selecionaCor);
  trocaCorQuatro.addEventListener('click', selecionaCor);
 

//colore quadrinho
function selecionapixel (event) {
    const pixel = document.querySelector('.pixel');
    event.target.style.backgroundColor = corSelecionada;
  }
  let pixelAlvo = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelAlvo.length; index +=1){
    pixelAlvo[index].addEventListener('click', selecionapixel);
  }
//limpa tudo

const botaoLimpa = document.getElementById('clear-board')
function limpaTudo(){
    let listaPixel = document.getElementsByClassName('pixel')
    for (let index = 0; index < listaPixel.length; index += 1 ){
        listaPixel[index].style.backgroundColor = 'white'
    }
}

botaoLimpa.addEventListener('click', limpaTudo)
