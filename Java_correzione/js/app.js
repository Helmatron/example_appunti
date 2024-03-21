console.log ('PW me');


// chiedere all'utente il suo nome (significa dichiarare una variabile 'nome' dove salviamo il prompt dell'utente)
const nome = prompt('inserisci il tuo nome')
console.log(nome);

// chiedere all'utente il suo cognome (dichiarare una variabile cognome e gli assegnamo il cognome)
const cognome = prompt('Inserisci il tuo cognome')
console.log(cognome);

// chiedere all'utente il suo colore preferito (come sopra)
const colore = prompt('Inserisci il tuo colore')
console.log(colore);

// generare la password (dichiarare una variabile password e assegnargli le concatenazioni di 'nome', 'cognome', 'colore' e numero)

// const numero = 21

// const password = nome + cognome + colore + numero
// console.log(password)

const numero = Math.floor(Math.random() * 100) // number da 0-0.99999 se moltiplico per 100 sposto la virgola, per arrotondarlo usiamo un'altra funzione Math


const password = nome + cognome + colore + numero
console.log(password)


// Math.floor arrotonda al più alto
// Math.ceil arrotonda al più basso