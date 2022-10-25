// ages = [18, 25, 30]

// console.log("Idade de Marina é: " +ages[0]+" Idade de Iza: "+ages[1]+ " Idade de fulana: "+ages[2])

// let ageMarina = 21
// let ageIza = 18
// let ageFulana = 20

// if(ageFulana < ageIza && ageFulana < ageMarina){
//     console.log("Fulana é mais jovem e possui: "+ageFulana)
// }
// else if(ageIza < ageFulana && ageIza < ageMarina){
//     console.log("Iza é mais jovem e possui: "+ageIza)
// }
// else if(ageMarina < ageIza && ageMarina < ageIza){
//     console.log("Marina é mais jovem e possui: "+ageMarina)
// }

// (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) + 5
// A fórmula para mulheres:

// (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) – 161
// Imprima no terminal o resultado do cálculo no formato:

// "A taxa metabólica basal é: x Kcal"

// let age = 18;
// let sexo = 'F';
// let weight = 80;
// let height = 170;


// if(sexo == 'M'){
//     let tmH = (height * 6.25) + (weight*9.99) - (age * 4.92) +5
//     console.log(tmH)
// }
// else{
//     let tmF = (height * 6.25) + (weight*9.99) - (age * 4.92) - 161
//     console.log(tmF)
// }

// "1 - Trybe Lanche Feliz"

// "2 - McTrybe"

// "3 - TrybeWooper"

// "4 - X-Trybe"

// "5 - Triplo Trybe com JS"

// Caso a pessoa escolha uma opção inexistente, imprima no terminal:

// "Ainda não possuímos esta opção :("

let pedido = "99";

if(pedido == "1"){
    console.log("1- Trybe Lanche Feliz")
}

else if(pedido == "2"){
    console.log("2- Mc Trybe")
}

else if(pedido == "3"){
    console.log("3- TrybeWooper")
}

else if(pedido == "4"){
    console.log("4- X-Trybe")
}
else if(pedido == "5"){
    console.log("5- Triplo Trybe com JS")
}else{
    console.log("Ainda não possuímos esta opção :(")
}