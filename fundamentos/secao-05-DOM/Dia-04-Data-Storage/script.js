const bg = document.querySelectorAll('.bg > button')
const color = document.querySelectorAll('.font > button')
const body = document.querySelector('body')
const text = document.querySelector("body > section.text")
const size = document.querySelectorAll(".size > button")
const line = document.querySelectorAll("div.line > button")
const family = document.querySelectorAll("div.family > button")
// const bgWhite = document.querySelector("div.bg > button:nth-child(2)")
// const bgBlack = document.querySelector("div.bg > button:nth-child(3)")
// const bgGreen = document.querySelector("div.bg > button:nth-child(4)")
// const bgBlue = document.querySelector("div.bg > button:nth-child(5)")
// const bgYellow = document.querySelector("div.bg > button:nth-child(6)")

localStorage.getItem('color', text.style.color = colorTarget.textContent)
localStorage.getItem('background', body.style.background = bgTarget.innerText)
localStorage.getItem('size', text.style.fontSize = fontSize.innerText)
localStorage.getItem('lineheigth', text.style.lineHeight = fontLine.innerText)
localStorage.getItem('fontFamily', text.style.fontFamily = fontF.innerText)



for(let i=0; i< bg.length;i++){
    bg[i].addEventListener('click', bgColor)
}

function bgColor(event){
    console.log(event.target)
    let bgTarget = event.target;
    body.style.background = bgTarget.innerText;
    localStorage.setItem('background', body.style.background = bgTarget.innerText)
}


for(let j=0; j<color.length; j++){
    color[j].addEventListener('click', fColor)
}
function fColor(event){
    console.log(event.target)
    let colorTarget = event.target;
    text.style.color = colorTarget.textContent;
    localStorage.setItem('color', text.style.color = colorTarget.textContent)

}


for (let k=0; k<size.length; k++){
    size[k].addEventListener('click', (event) =>{
        fSize(event)
    })
}
function fSize(event){
    console.log(event.target)
    let fontSize = event.target;
    text.style.fontSize = fontSize.innerText;
    localStorage.setItem('size', text.style.fontSize = fontSize.innerText)

}

for (let u=0; u<line.length; u++){
    line[u].addEventListener('click', (event) =>{
        fLine(event)
    })
}
function fLine(event){
    console.log(event.target)
    let fontLine = event.target;
    text.style.lineHeight = fontLine.innerText;
    localStorage.setItem('lineheigth',text.style.lineHeight = fontLine.innerText)
}

for (let o=0; o<line.length; o++){
    family[o].addEventListener('click', (event) =>{
        fFamily(event)
    })
}
function fFamily(event){
    console.log(event.target)
    let fontF = event.target;
    text.style.fontFamily = fontF.innerText;
    localStorage.setItem('fontFamily',text.style.fontFamily = fontF.innerText)
}