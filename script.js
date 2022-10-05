let trocaCorUm = document.getElementById('colorUm')
let trocaCorDois = document.getElementById('colorDois')
let trocaCorTres = document.getElementById('colorTres')
let trocaCorQuatro = document.getElementById('colorQuatro')
window.onload = function (){
  if(localStorage.getItem('colorPalette') === null){
// setando cores inicialmente
let corUm = 'black'

trocaCorUm.style.backgroundColor = corUm

let corDois = 'green'

trocaCorDois.style.backgroundColor = corDois

let corTres = 'blue'

trocaCorTres.style.backgroundColor = corTres

let corQuatro = 'red'

trocaCorQuatro.style.backgroundColor = corQuatro
  }else if(localStorage.getItem('colorPalette') !== null){ // caso haja cores no localstorage
     let coresRecuperadas = JSON.parse(localStorage.getItem('colorPalette'))  
      let corUm = 'black'
      let trocaCorUm = document.getElementById('colorUm')
      trocaCorUm.style.backgroundColor = corUm

      let corDois = coresRecuperadas[0]
      let trocaCorDois = document.getElementById('colorDois')
    trocaCorDois.style.backgroundColor = corDois

      let corTres = coresRecuperadas[1]
      let trocaCorTres = document.getElementById('colorTres')
    trocaCorTres.style.backgroundColor = corTres

      let corQuatro = coresRecuperadas[2]
      let trocaCorQuatro = document.getElementById('colorQuatro')
    trocaCorQuatro.style.backgroundColor = corQuatro
      }
      if(localStorage.getItem('pixelBoard') !== null){
        let desenhosRecuperados = JSON.parse(localStorage.getItem('pixelBoard'))
        for(let index = 0 ; index < pegaPixel.length ; index += 1){
          pegaPixel[index].style.backgroundColor = desenhosRecuperados[index]
    
    
    }
  }
}





      //função que troca de cores
function geracor(){
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}
//evento no botão que gera cores
const pegaPaleta = document.getElementsByClassName('color')
const botao = document.getElementById('button-random-color')
botao.addEventListener("click", function atribuicor (){
  for (let index = 1; index < pegaPaleta.length; index+=1){
    pegaPaleta[index].style.backgroundColor = geracor() 
  }  
})


//apaga localstorage anterior pra não dar conflito ?????????????????? como remover ????????? 
botao.addEventListener("click", function apagaPalleteAntigo(){
  localStorage.removeItem("colorPalette")
})
//armazena cores
let arrayCores = []
botao.addEventListener("click", function armazenaCores(){  
  for(let index = 1; index < pegaPaleta.length ; index += 1){
    arrayCores.push(pegaPaleta[index].style.backgroundColor)
    localStorage.setItem("colorPalette", JSON.stringify(arrayCores))
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
    let techElement = document.querySelector('.selected');
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

//captura desenho
let pegaPixel = document.getElementsByClassName('pixel')
let coresAntigasArray = []
for(let index = 0 ; index < pegaPixel.length ; index += 1){
pegaPixel[index].addEventListener('click', function armazenadesenho (){
  for (let key = 0 ; key < pegaPixel.length; key += 1){
    coresAntigasArray.push(pegaPixel[key].style.backgroundColor)
    localStorage.setItem("pixelBoard", JSON.stringify(coresAntigasArray))
  }
}
)
}
//reprinta desenho
// window.onload = function(){
//   if(localStorage.getItem('pixelBoard') !== null){
//   let desenhosRecuperados = JSON.parse(localStorage.getItem('pixelBoard'))
//   for(let index = 0 ; index < pegaPixel.length ; index += 1){
//     pegaPixel[index].style.backgroundColor = desenhosRecuperados[index]
// }
// }
// }