// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


const userChoice = prompt("Facciamo un gioco...pari o dispari?")
console.log(userChoice);
const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"))
console.log(userNumber);

if (!userChoice.includes("pari" , "dispari")){
    alert("Scegli pari o dispari ho detto...")

} else if (userNumber <= 0 || userNumber >= 6 || isNaN(userNumber)) {
     alert("Ti sembra un numero tra 1 e 5?")
} else {

     const CPUnumber = getRndInteger(1,5)
     console.log(CPUnumber);
     const result = ODDorEVEN(userNumber, CPUnumber)
     console.log(result);

     if (userChoice === result){
         alert(`${userNumber} + ${CPUnumber} è ${result}. Vivrai ancora per un altro refresh...`)
     } else {
        alert( `${userNumber} + ${CPUnumber} è ${result}. Mi dispiace, hai perso....knock knock...`)
     }
 } 


//! Funzioni

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function ODDorEVEN (firstNumb, secondNumb){
    if ((firstNumb + secondNumb) % 2 === 0 ){
        total = "pari"
    } else{
        total = "dispari"
    }
    return total  
}