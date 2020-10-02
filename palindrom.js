let word = 'tenet'
let word2 = 'asd'

function palindrom(a, b){
    return a === b.split("").reverse().join("");
}
console.log(palindrom(word, word2))
