console.log('Oggetti')


let nome = 'mamma'
let number = 23
let numeri = [1,2,3,4,5,6,7]
let nomi = ['maria','giuseppe','patrizia']
let ePari = true
let parola = undefined
let cosa = null

let userName = 'Mario'
let userAge = 32
let userEmail = 'mario.mario@gmail.com'

// spesso capita di gestire più elementi e questi dati possono essere organizzati in ogetti:
// un oggetto ha delle caratteristiche che possiamo definire
// un oggetto è composto da una struttura di dati
// un oggetto si richiama con una etichetta


// palla è il nostro oggetto
const palla = {

    // proprietà dell'oggetto (nome: valore)
    colore: ('rosso'),
    tipo: 'pallina da golf',
    chiave: 'tipoDiDato'

};

// lo sviluppatore decide come chiamare gli oggetti e organizzare i dati

let mimmo = {
    name: 'mimmo',
    age: 36,
}

console.log(mimmo)

//per accedere ad una proprità interna di un oggetto è come quando lo cerchi in html

console.log(mimmo.name)

console.log(mimmo['name'])

mimmo.children = ['mario']