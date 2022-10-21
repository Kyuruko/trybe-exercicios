numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let  x = 0;

for (j=0;j<numbers.length-1;j++){
    for (i=0;i<(numbers.length);i++){
        if(numbers[i]>numbers[i+1]){
            // JavaScrip n faz sentido
            x = numbers[i]
            numbers[i] = numbers[i+1]
            numbers[i+1] = x
            // [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]]
        
        }
    }
}
console.log(numbers)
arr = []
for (i=0; i<numbers.length;i++){
    if (i + 1 < numbers.length) {
        arr.push(numbers[i] * numbers[i+1])
    } else {
        arr.push(numbers[i] * 2);
    }
}
console.log(arr);