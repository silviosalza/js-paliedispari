// **Palindroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.


const userWord = prompt("Dimmi una parola a casissimo")
console.log(userWord);

const result = palindromo(userWord)
alert(result);


//! Funzioni

function palindromo (word){
let letterArray = []
let letterArrayreverse = []
let answer = ""

    let i = 0
    let k = word.length - 1
    while (i < word.length){
        let letter = word.charAt(i)
        i++
        letterArray.push(letter)
    }
    while ( k >= 0){
        let letter = word.charAt(k)
        k--
        letterArrayreverse.push(letter)
    }
    console.log(letterArray , letterArrayreverse);

    for (let j = 0 ; j<letterArray.length ; j++){
        if (letterArray[j] === letterArrayreverse[j]){
            answer = "E' palindroma"
        } else {
            answer = "Non è palindroma"
        }
    }

    return answer
}

