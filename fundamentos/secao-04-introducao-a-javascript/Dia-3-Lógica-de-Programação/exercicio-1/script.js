// let array = ["java", "javascript","j", "pythonadsadsadasd","pythonb", "html", "css"];
// let maior = "";
// let menor = "gambiarra";

// // console.log(array[4].length)
// for (i = 0; i < array.length; i++) {
//     for (j=0;j<array.length; j++){
//         if(array[i].length > array[j].length && array[i].length >= maior.length){
//             maior = array[i]
//         }
//     }
// }
// for (i = 0; i < array.length; i++) {
//     for (j=0;j<array.length; j++){
//         if(array[i].length < array[j].length && array[i].length <= menor.length){
//             menor = array[i]
//         }
//     }
// }
// console.log(maior);
// console.log(menor)

// let number = 50;
// let div = 0
// let arr = []

// for (i=2; i<number; i++){
//     div = 0
//     for(j = 1; j<number; j++){
//         if (i%j === 0){
//             div +=1;
//         }
//     }
//     if(div == 2){
//         arr.push(i)
//     }
// }
// console.log(arr)


// let resultado = 1
// for(i=1; i<10; i++){
//     resultado = resultado * i
// }
// console.log(resultado)


// // Quadrado com *
// let num = 5
// let output = ""
// for(i = 0; i < num; i++){
//     output += "\n"
//     for(j = 0; j < num; j++){
//         output += "*"
//     }
// }

// console.log(output)

// // Lado do Triangulo
// let num = 5
// let output = ""
// for(i = 0; i < num; i++){
//     output += "\n"
//     for(j = 0; j < i+1; j++){
//         output += "*"
//     }
// }

// console.log(output)



// // Lado do Triangulo invertido
// let num = 5;
// let output = "";
// for (i = num; i > 0; i--) {
//   for (j = 0; j <= num; j++) {
//     if(j < i){
//       output += " ";
//     }
//     if (j >= i) {
//       output += "*";
//       if(j==num && i != 0){
//         output += "\n"
//       }
//     }
//   }
// }

// console.log(output);


// // Triangulo inteiro
// let num = 6;
// let output = "";
// let mid = (num+1)/2
// let midEsq = mid
// let midDir = mid

// for (i = 0; i <= mid; i++) {
//   for (j = 1; j <= num; j++) {
//     if (j > midEsq && j < midDir){
//       output += "*"
//     }
//     else{
//       output += " "
//     }
//     if(j == num && i+1 < num){
//       output+="\n"
//     }
//   }
//   midEsq -= 1
//   midDir +=1
// }
// console.log(output);




// let num = 50
// let resultado = 0;

// for (i=0; i<=num; i++){
//     resultado += num
// }
// console.log(`O resultado é: ${resultado}`)
// let num = 151
// let cont = 0
// for(i=2; i<num;i++){
//     if(i%3 === 0){
//         cont +=1
//     }
// }
// console.log(cont)
// if(cont == 50){
//     console.log("Mensagem Secreta")
// }
// else if(cont > 50){
//     console.log("Há mais de 50 divisores")
// }
// if(cont < 50){
//     console.log("Há menos de 50 divisores")
// }


// players = ["Player 1", "Player 2"]
// jogadas = ["Papel", "Pedra", "Tesoura"]

// for (i = 0; i< players.length; i++){
//     for(j = 0; j<jogadas.length; j++){
        
//     }
// }

// let player1 = "papel"
// let player2 = "pedra"
// let pedra = 1
// let tesoura = 2
// let papel = 3

// if(player1 == "papel" && player2 == "pedra"){
//     console.log("Player 1 Won")
// }

// let idade = 18
// let maiorDeIdade = (idade >= 18) ? console.log("A pessoa é maior de idade") || false: console.log("É menor de idade")

// let carol = 20
// let murilo = 25
// let baeta = 27

// if(carol < murilo && carol < baeta){
//     console.log(`O mais novo é Carol`)
// }

// if(carol > murilo && murilo > baeta){
//     console.log(`O mais novo é Murilo`)
// }

// if(baeta < murilo && baeta < carol){
//     console.log(`O mais novo é Baeta`)
// }