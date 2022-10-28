// function romanoToDec(string){
//     let numerosRomanos = {
//         i: 1,
//         v: 5,
//         x: 10,
//         l: 50,
//         c: 100,
//         d: 500,
//         m: 1000,
//       };
//     string = string.toLowerCase()
//     // string = string.split('')
//     tam = string.length
//     soma = numerosRomanos[string[tam-1]]
//     atual = numerosRomanos[string[tam-1]]
//     for(i=2; i<=tam;i++){
//         let prox = numerosRomanos[string[tam-i]]  
//         if (atual <= prox) {
//             soma += prox;
//           } else {
//             soma -= prox;
//           }
      
//           atual = prox;
//         }
      
//         return soma;
// }

// console.log(romanoToDec('MMXVIII'))

// function arrayOfNumbers(arr){
//     newArr=[]
//     for (row = 0; row<arr.length; row++){
//         let arrayInterno = arr[row].length
//         let aux = arr[row]
//         for(col = 0; col<arrayInterno; col++){
//             if(aux[col] % 2 == 0){
//                 newArr.push(aux[col])
//             }
//         }        
//     }
// return newArr
// }
// console.log(arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]))


// const basket = [
//   'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
//   'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
//   'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
//   'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
//   'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
//   'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
//   'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
//   'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
//   'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
//   'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
//   'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
//   'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
//   'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
//   'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
//   'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
//   'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
//   'Banana', 'Pera', 'Abacate', 'Uva',
// ];

// cesta = {
//   melancia: {
//     contador: 0 ,
//     nome: "Melancia",
//   },
//   abacate: {
//     contador: 0,
//     nome: "Abacate",
//   },
//   uva:{
//     contador: 0,
//     nome:"Uva",
//   },
//   banana:{
//     contador: 0,
//     nome:"Banana",
//   },
//   jaca:{
//     contador: 0,
//     nome:"Jaca",
//   },
//   pera:{
//     contador: 0,
//     nome:"Pera",
//   },
//   laranja:{
//     contador: 0,
//     nome:"Laranja",
//   },
// }
//   for(j = 0; j<basket.length; j++){
//     if(basket[j] == cesta.melancia.nome){
//       cesta.melancia.contador += 1
//   }
//     if(basket[j] == cesta.abacate.nome){
//       cesta.abacate.contador += 1
//   }
//     if(basket[j] == cesta.uva.nome){
//       cesta.uva.contador += 1
//   }
//     if(basket[j] == cesta.banana.nome){
//       cesta.banana.contador += 1
//   }
//     if(basket[j] == cesta.jaca.nome){
//       cesta.jaca.contador += 1
//   }
//     if(basket[j] == cesta.pera.nome){
//       cesta.pera.contador += 1
//   }
//     if(basket[j] == cesta.laranja.nome){
//       cesta.laranja.contador += 1
//     }
// }

// console.log(`Sua cesta possui:
// ${cesta.melancia.contador} ${cesta.melancia.nome}
// ${cesta.abacate.contador} ${cesta.abacate.nome}
// ${cesta.uva.contador} ${cesta.uva.nome}
// ${cesta.banana.contador} ${cesta.banana.nome}
// ${cesta.jaca.contador} ${cesta.jaca.nome}
// ${cesta.pera.contador} ${cesta.pera.nome}
// ${cesta.laranja.contador} ${cesta.laranja.nome}`)



// let moradores = {
//   blocoUm: [
//     {
//       nome: 'Luiza',
//       sobrenome: 'Guimarães',
//       andar: 10,
//       apartamento: 1005,
//     },
//     {
//       nome: 'William',
//       sobrenome: 'Albuquerque',
//       andar: 5,
//       apartamento: 502,
//     },
//   ],
//   blocoDois: [
//     {
//       nome: 'Murilo',
//       sobrenome: 'Ferraz',
//       andar: 8,
//       apartamento: 804,
//     },
//     {
//       nome: 'Zoey',
//       sobrenome: 'Brooks',
//       andar: 1,
//       apartamento: 101,
//     },
//   ],
// };

// console.log(`O morador do bloco dois se chama: ${moradores.blocoDois[1].nome} ${moradores.blocoDois[1].sobrenome}
// mora no ${moradores.blocoDois[1].andar}° andar 
// apartamento ${moradores.blocoDois[1].apartamento}`)


// let tam = moradores.blocoUm.length
// let tam2 = moradores.blocoDois.length

// for (let i = 0; i< tam; i++){
//   console.log(`${moradores.blocoUm[i].nome} ${moradores.blocoUm[i].sobrenome}`)
// }
// for (let i = 0; i< tam2; i++){
//   console.log(`${moradores.blocoDois[i].nome} ${moradores.blocoDois[i].sobrenome}`)
// }
