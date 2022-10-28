arr = []
function palindromo(string){
    for (i = 0; i< string.length; i++){
        let tam = string.length-1
        if(string[i] == string[tam-i]){
            arr.push(string[i])
        }else{
            return console.log(false)
        }
    }
    return console.log(arr.join(''))
}

palindromo("aibofobia")


// function greaterNumber(arr){
//     let maior = 0
//     for (i = 0; i < arr.length; i++){
//         for(j=0; j< arr.length; j++){
//             if(arr[i] == arr[j] && arr[i]> maior){
//                 maior = i
//             }
//         }
//     }
//     return console.log(maior)
// }

// greaterNumber([2, 3, 6, 7, 10, 1])

// function lessNumber(arr){
//     let menor = 0
//     for (i = 0; i < 1; i++){
//         for(j=0; j< arr.length; j++){
//             if(arr[i]<arr[j]&& arr[i]< menor){
//                 menor = arr[i]
//             }else if(arr[i]>arr[j] && arr[j]< menor){
//                 menor = arr[j]
//             }
//         }
//     }
// return console.log(menor)
// }

// lessNumber([2,-4, 4, -3, 7, 10, 0])

// function moreChar(arr){
//     let maiorString =''
//     for (i in arr){
//         chari = arr[i].split('').length
//         for(j in arr){
//             charj = arr[j].split('').length
//             if(chari > charj){
//                 maiorString = arr[i]
//             }else if(chari < charj){
//                 maiorString = arr[j]
//             }
//         }
//     }
//     console.log(maiorString)
// }


// moreChar(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairodsadasd', 'Joana'])

// function repeatNumbers(arr){
//     let cont = 0
//     let contTotal = 0
//     repetido = 0
//     for (i in arr){
//         cont = 0
//         for (j in arr){
//             if(arr[i] == arr[j]){
//                 cont += 1
//                 if(cont > contTotal){
//                     contTotal = cont
//                     repetido = arr[i]
//                 }
//             }
//         }
//     }
// return console.log(repetido)
// }

// repeatNumbers([2, 5, 5, 5, 2, 5, 8, 2, 3])

// function summNumbers(num){
//     let result = 0
//     for(i=1; i<=num;i++){
//         result += i
//     }
//     return console.log(result)
// }
// summNumbers(5)

// function verifyEndWord(string, endString){
//     word = string.split('')
//     endWord = endString.split('')
//     wLength = word.length;
//     endLength = endWord.length;
    
//     if(word[wLength-1] == endWord[endLength-1]){
//         if(word[wLength-2] == endWord[endLength-2]){
//             return true
//         }
//     }
//     if(word[word.length-1] != endWord[endWord.length-1]){
//             return false
//     }
// }

// console.log(verifyEndWord('joaofernando', 'fernan'))