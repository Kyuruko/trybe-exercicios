let ondeVcEsta = document.querySelector('#elementoOndeVoceEsta')
ondeVcEsta.parentNode.style.color= 'red'

let pai = document.querySelector('#pai')

let filhoDoFilho = ondeVcEsta.firstElementChild.innerHTML = "Texto aleatório"

let paiDoPrimeiroFilho = document.querySelector('#pai').firstElementChild
let filhoDoPai = ondeVcEsta.parentNode.firstElementChild

let atencao = ondeVcEsta.nextSibling

ondeVcEsta.lastElementChild.nextElementSibling

pai.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling

let newElement = document.createElement('p')
pai.appendChild(newElement)

let newChild = document.createElement('p')
ondeVcEsta.appendChild(newChild)

let newChildOfChild = document.createElement('p')
let = newElementChild = ondeVcEsta.firstElementChild.appendChild(newChildOfChild)

newElementChild.parentNode.parentNode.nextElementSibling

let paiDoPai = pai.childNodes

for (let index = paiDoPai.length - 1; index >= 0; index -= 1) {
    const filhoAtual = paiDoPai[index];
    if (filhoAtual.id !== 'elementoOndeVoceEsta') { // Verifica se o id do filho atual é diferente de 'elementoOndeVoceEsta'
      filhoAtual.remove(); // Remove o filhoAtual
    }
  }
  const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho'); // Recupera o elemento com o id segundoEUltimoFilhoDoFilho
  segundoEUltimoFilhoDoFilho.remove(); // Remove o segundo filho do filho