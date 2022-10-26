const substituaX = name =>{
    word = 'Tryber x aqui!';
    word = word.split(' ')
    word.sort()
    word.pop()
    word[1]= name
    word[2] = "aqui!"
    word = word.join(' ')
    return word
}
console.log(substituaX("Bruno"))