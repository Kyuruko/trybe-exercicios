// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultado =0;
// let max = 0;
// let min = numbers[0]
// let n =0;

// for (i=0;i<numbers.length;i++){
//     console.log(numbers[i])
//     resultado = resultado + numbers[i];
//     if(numbers[i]>max){
//         max = numbers[i]
//     }
//     if(numbers[i] < min){
//         min = numbers[i]
//     }
//     if(numbers[i]%2 == 0){
//         console.log("O número "+numbers[i]+" é par")
//     }else{
//         console.log("O número "+numbers[i]+" é ímpar")
//     }

// }
// resultado = resultado/numbers.length

// if(resultado > 20){
//     console.log("Resultado maior que 20")
// }
// else if(resultado<20 || resultado==20){
//     console.log("Resultado menor ou igual a 20")
// }
// console.log(max)
// console.log(min)

// array=[]
// for (i=1;i<=25;i++){
//     array.push(i)
// }
// for(n of array){
//     resultado = n/2
//     console.log(resultado)
// }
// console.log(array)

// function squareDigits(num){
//     let number = ''+num;
//     num=[]
//     number.split('')
//     for(i=0;i<number.length;i++){
//         if(i+1<number.length){
//             num.push(parseInt(Math.pow(parseInt(number[i]), 2)));
//         }else{
//             num.push(parseInt(Math.pow(parseInt(number[i]), 2)));
//         }
//     }
//     num = num.join('')
//     console.log(num)
//     return 0;
//   }
//   squareDigits(9119)

// function isPrimo(numero){
//     for(divisor = 2; divisor < numero; divisor ++){
//         if(numero % divisor === 0){
//             return false;
//         }
//     }
//     return true;
// }
// function exibirPrimo(limite){
//     for(numero = 2; numero <= limite; numero ++){
//         if(isPrimo(numero))console.log(numero)
        
//     }
// }

// exibirPrimo(15)