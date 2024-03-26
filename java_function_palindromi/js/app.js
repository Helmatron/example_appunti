console.log('esisto')

const parola = prompt('inserisci parola')
console.log(parola)

const risultato = isPalindrome(parola) // boolean true folse

if (risultato === true) {
    console.log('la parola ' + parola + ' è palindroma')
    
} else {
    console.log('La parola ' + parola + ' non è palindroma')
}

function isPalindrome(text) {
    console.log(text)

    
    let invertedText = ''

    // pino
    // generare la stringe invertita
    for (let i = text.length -1; i >= 0; i--) {
        // const char = text[i];
        const char = text.charAt(i)
        console.log(char)

        invertedText += char
        
    }
    console.log(invertedText)

    // o
    // on
    // oni
    // onip

    // SE la parola === parolaInvertita
    if (text === invertedText){
    // -- return true
    return true

    // ALTRIMENTI
    } else {
        // -- return folse
        return false
    }
    
    
    
    
}