// Iniziare sempre i file con un console.log per verificare se da ispeziona e console il java funziona e viene letto
console.log('Ciao Mondo!')

let nome = 'Emanuele' // string
console.log(nome)

const age = '32' // string
console.log(age);
// age = 21  non consentito alterare un valore di const (constant)

const age2 = 32 // number
console.log(age2);

// ricorda di mettere ; alla fine di ogni operazione di JavaScript anhe se non ci sono problemi: su altri programmi potrebbe essere obbligatorio


// operazioni matematiche

let numA = 8
let numB = 10

numA = 'ciao' // string assegna nuovo valore se possibile, altrimenti compare il codice errore NAN
console.log('somma: ', numA + numB) // string
console.log('sottrazione: ', numA - numB)
console.log('divisione: ', numA / numB)
console.log('moltiplicazione: ', numA * numB)


const numC = 8
const numD = 10


console.log('somma: ', numC + numD) // number
console.log('sottrazione: ', numC - numD)
console.log('divisione: ', numC / numD)
console.log('moltiplicazione: ', numC * numD)



// prompt('inserire il tuo nome')

let name = prompt('Inserisci il tuo nome')// il valore che possiamo ottenere è string oppure null
console.log(name)

const number = prompt('Inserisci il tuo numero')// il valore che possiamo ottenere è string oppure null
console.log(typeof number) //typeof visualizza il tipo di informazione

const random = Math.random()
console.log(random)