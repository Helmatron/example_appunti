console.log('sono vivo')

// verifica se un numero è negativo, positivo o uguale a 0
// SE il numero è positivo (> 0)
// Scrivo in console "il numero è positivo"

// ALTRIMENTI SE il numero è negativo (< 0)
//  scrivo in console "Il numero è negativo"

// ALTRIMENTI il numero è uguale a 0
//  scrivo in console "il numero è uguale a 0"

let number = 1
console.log (number);

if(number > 0) {
    console.log("il numero è positivo");

}   else if (number < 0) {
    console.log('il numero è negativo');

}   else if (number == 0) {
    console.log('il numero è uguale a zero');
}


/* verifichiamo se una persona può votare
età per votare 18

SE età >= a 18
allora può votare
ALTRIMENTI
non può votare */

let età = prompt ('iserisci la tua età') // senza inserire numero diventa stringa, sarebbe bene convertire in number la string
età = parseInt(età) //restituisce un intero come Number convertendo il valore dichiarato
console.log(età)



if(età > 18) {
    console.log('può votare');
} else {
    console.log('non puoi votare');
}


// verifichiamo se un numero è pario dispari

// SE il valore è divisibile per 2
// ALLORA è pari
// SE il valore NON è divisibile per 2
// ALLORA è dispari

const num = 13;

const resto = num % 2;
console.log('resto: ', resto)

const divisione = num / 2;
console.log('divisione: ', divisione)


// mi calcolo il modulo 2
// SE il resto è 0

if (resto === 0){
    console.log('il numero è pari');
}   else {
    console.log('il numer è dispari');
}