console.log('biglietto del treno')


const pricePerKm = 0.21

//  chiedere il numero di km
const km = parseInt(prompt('Inserire i km')) //number
console.log(km)


//  chiedere l'età del passeggero
const eta = parseInt(prompt('Inserire età')) //number
console.log(eta)

// validare i dati
// - km >0
km > 0
// - eta >= 0
eta >= 0
// - km non è NaN - ! per dire non
!isNaN(km)

// - eta non è NaN
!isNaN(eta)

// SE i dati sono validi
if (
    km > 0 &&
    eta >= 0 &&
    !isNaN(km) &&
    !isNaN(eta)
    ) {

    
// - calcoleremo il prezzo del biglietto
// ALTRIMENTI
// - stamperemo che i dati non sono validi

//  calcolare il prezzo del biglietto
//  - calcolare il prezzo base = km x 0.21€
const basePrice = km * pricePerKm
console.log(basePrice)
//  - calcolare lo sconto:
let discount = 0 // number
//  -- SE età < 18 => sconto del 20%
if (eta < 18) {
    discount = 0.2
} else if (eta > 65) {
//  -- ALTRIMENTI SE età > 65 =>> sconto 40%
discount = 0.4
}

//  -- ALTRIMENTI sconto 0%
//  - calcolare il prezzo finale = prezzo base - sconto
const price = basePrice - basePrice * discount //number
console.log(price.toFixed(2), price)


// stampare il prezzo con due cifre decimali

const priceElement = document.getElementById('price')
priceElement.innerHTML = 'Prezzo del biglietto: ' + price.toFixed(2) + ' &euro;'

} else {
    alert('i dati inseriti non sono validi')
}