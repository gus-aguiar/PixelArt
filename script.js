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