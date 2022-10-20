// let n1 = 12;
// let n2 = 10;
// let resultado;

// resultado = n1+n2;
// console.log(resultado)

// resultado = n1-n2;
// console.log(resultado)

// resultado = n1*n2;
// console.log(resultado)

// resultado = n1/n2;
// console.log(resultado)

// resultado = n1%n2;
// console.log(resultado)

// let n1 = 20
// let n2 = 20

// if(n1 > n2){
//     console.log("n1 é maior")
// }
// else if(n1 < n2){
//     console.log("n2 é maior")
// }
// else{
//     console.log("os 2 são iguais")
// }

// let n1 = 20
// let n2 = 20
// let n3 = 30

// if(n1 > n2 && n1 > n3){
//     console.log("n1 é maior")
// }
// else if(n1 < n2 && n3 < n2){
//     console.log("n2 é maior")
// }
// else if(n3 > n1 && n3 > n2){
//     console.log("n3 é maior")
// }
// else{
//     console.log("os 3 são iguais")
// }

// let n = 0

// if(n > 0){
//     console.log("positive")
// }
// else if(n < 0){
//     console.log("negative")
// }
// else{
//     console.log("zero")
// }

// let a1 = -50
// let a2 = 60
// let a3 = 60
// if(a1 > 0 && a2 > 0 && a3 > 0){
//     if((a1 + a2 + a3) == 180){
//         console.log("É um triângulo")
//     }
//     else if((a1 + a2 + a3) != 180){
//         console.log("Não é um triângulo")
//     }
// }else{
//     console.log("Ângulos inválidos")
// }

// let peca = "CAVALO"
// let pecaLower = peca.toLowerCase()

// console.log(peca)
// console.log(pecaLower)

// switch(pecaLower){
//     case "peão":
//         console.log("2 casas na frente durante primeira jogada, 1 casa para frente depois da primeira jogada");
//         break
//     case "bispo":
//         console.log("diagonal");
//         break
//     case "torre":
//         console.log("linha reta horizontal ou vertical");
//         break
//     case "cavalo":
//         console.log("movimento em L");
//         break
//     case "rainha":
//         console.log("Diagonal, horizontal, vertical");
//     case "rei":
//         console.log("Qualquer casa adjascente");
//     default:
// }

// let nota = 49;
// if(nota > 0 && nota <= 100){
//     if(nota >= 90){
//         console.log("A")
//     }
//     else if(nota >= 80){
//         console.log("B")
//     }
//     else if(nota >= 70){
//         console.log("C")
//     }
//     else if(nota >= 60){
//         console.log("D")
//     }
//     else if(nota >= 50){
//         console.log("E")
//     }
//     if(nota < 50){
//         console.log("F")
//     }
// }else{
//     console.log("Nota inválida")
// }

// const n1 = 11
// const n2 = 15
// const n3 = 17

// if(n1%2 == 0 || n2%2 == 0 || n3%2 == 0){
//     console.log(true)
// }else{
//     console.log(false)
// }

// const n1 = 13
// const n2 = 12
// const n3 = 10

// if(n1%2 > 0 || n2%2 > 0 || n3%2 > 0){
//     console.log(true)
// }else{
//     console.log(false)
// }

// const custoProduto = 50;
// const vendaProduto = 75;

// if(custoProduto > 0 && vendaProduto > 0){
//     const imposto = custoProduto * 0.2
//     const custoTotal = custoProduto + imposto
//     const lucro = (vendaProduto*1000) - (custoTotal*1000)
//     console.log("Total de lucro foi: "+lucro)
// }else{
//     console.log("valor inválido")
// }

// let salario = 2000;
// let salarioInss = 0;
// let salarioLiq = 0

// if (salario <= 1556.94) {
//   console.log(salario + "a");
//   salarioInss = salario - salario * (11 / 100);
// }
// if (salario >= 1556.95 && salario <= 2594.92) {
//   console.log(salario + "b");
//   salarioInss = salario - salario * (11 / 100);
// }
// if (salario >= 2594.93 && salario <= 5189.82) {
//   console.log(salario + "c");
//   salarioInss = salario - salario * (11 / 100);
// }
// if (salario > 5189.82) {
//   console.log(salario + "d");
//   salarioInss = salario - 570.88;
// }

// if (salarioInss <= 1903.98) {
//   console.log(salarioInss);
// }
// if (salarioInss >= 1903.99 && salarioInss <= 2826.65) {
//     salarioLiq = salarioInss - ((salarioInss * (7.5/100)) - 142.80);
//     console.log(salarioLiq);
// }
// if (salarioInss >= 2826.66 && salarioInss <= 3751.05) {
//     salarioLiq = salarioInss - ((salarioInss * (15/100)) - 354.80);
//     console.log(salarioLiq);
// }
// if (salarioInss >= 3751.06 && salarioInss <= 4664.68) {
//     salarioLiq = salarioInss - ((salarioInss * (22.5/100)) - 636.13);
//     console.log(salarioLiq);
// }
// if (salarioInss > 4664.68) {
//     salarioLiq = salarioInss - ((salarioInss * (27.5/100)) - 869.36);
//     console.log(salarioLiq);
// }
