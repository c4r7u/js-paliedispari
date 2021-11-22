
const userWord = prompt("Inserisci una parola");
console.log(userWord);

// funzione per invertire la parola inserita
function reverseWord(str) {
    let inverti  = str.split('').reverse().join('');
    return inverti;
}

const changedWord = reverseWord(userWord);


if(changedWord == userWord) {
    console.log("Parola palindroma");
} else {
    console.log("Parola non palindroma");
}


