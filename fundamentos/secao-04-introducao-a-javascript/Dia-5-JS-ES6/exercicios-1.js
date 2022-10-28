    // // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
    // const pessoa = {
    //     nome: 'Henri',
    //     idade: 20
    //   }
    //   const pessoa2 = {
    //     nome: 'Luna',
    //     idade: 19
    //   } // Altere essa estrutura para corrigir o erro.
    //   console.log('Nome:', pessoa.nome);
    //   console.log('Idade:', pessoa.idade);

    // let randomNumber = () => Math.random()
    // console.log(randomNumber())

    // let hello = (name) => console.log(name)

    // hello("Bruno")

    // let fullName= (name, surname) => console.log(`${name} ${surname}`)

    // fullName("Bruno", "Costa")

    // let speed = 90

    // const pardal = speed >= 120 ? "Você ultrapassou o limite de velocidade" : "Você está abaixo do limite de velocidade"
    // console.log(pardal)

// let status = "desligado"

// const turnOnCar = () => (status === "desligado" ? status = "ligado": status ="desligado")
// console.log(turnOnCar())
// console.log(turnOnCar())

// let circleArea = (raio) => (raio*raio)*3.14
// console.log(`A área do Circulo é: ${circleArea(5)}`)

// let longestWord = (string) =>{
//     let letters  = string.split(' ')
//     let newString = ''
//     for(i of letters){
//         for(j of letters){
//             if(i.length > j.length && newString.length < i.length){
//                 newString = i
//             }
//             if(i.length < j.length && newString.length < j.length){
//                 newString = j
//             }
//         }
//     }
// return console.log(newString);
// }


// longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

// const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

// console.log(longestWord("Antonio foi ao banheiro e não sabemos o que aconteceu"));