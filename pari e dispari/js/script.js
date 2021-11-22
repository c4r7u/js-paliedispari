

const choice = prompt("Pari o Dispari?");

function IsNotUneven(numero) {

    if (isNaN(numero) == false) {
        return (numero %2 == 1 ?  true : false);
    }
    else {
        return null;
    }
}




const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log("Numero scelto: " + numeroUtente);


console.log(IsNotUneven(numeroUtente));

//  Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function compNumber(min, max) {
    let OutNumPC = Math.floor(Math.random() * (max - min) ) + min;
    return OutNumPC;
}


const OutNumPC = compNumber(1,6);


console.log("Numero pc: " + OutNumPC);



function somma(numeroUtente, OutNumPC) {
    let risultato = numeroUtente + OutNumPC;
    return risultato;
}

const results = somma(numeroUtente, OutNumPC);

console.log('Il risultato é:'+ results);




function pariDispari(results) {

    if(results % 2 == 0) {
        console.log("Il numero è pari");
    } else {
        console.log("Il numero è dispari");
    }
}
pariDispari(results);

