let mudarP = (string) =>{
    texto = document.getElementsByTagName('p')[1].innerText = string
}
mudarP("Lorem Ipsum")

let mudarBg = () =>{
    document.getElementsByClassName("main-content")[0].style.background = "rgb(76,164,109)"
}
mudarBg()

let mudarInnerBg = ()=>{
    document.getElementsByClassName('center-content')[0].style.background = '#FFFFFF'
}
mudarInnerBg()

let correH1 = (string) =>{
    document.getElementsByTagName('h1')[0].innerText = string
}
correH1("Exercício - JavaScript")

let minP = () =>{
    document.getElementsByTagName('p')[0].style.textTransform = "lowercase"
}
minP()

let consoleLog = () =>{
    let parag = document.getElementsByTagName('p')
    for(i=0; i<parag.length; i++){
        console.log(parag[i].innerText)
    }
}
consoleLog()