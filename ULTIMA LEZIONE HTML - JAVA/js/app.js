console.log('ciao')

const teams = [
    {
        name: 'Ludovica Massimino',
        job: 'Developer',
        email: 'ludo@gmail.com',
    },
    {
        name: 'Alessandro Laenzao',
        job: 'Project Manager',
        email: 'ale.lea@gmail.com',
    },
    {
        name: 'Andrea Giacometti',
        job: 'Designer',
        email: 'and.gia@gmail.com',
    },
    

]
console.log(teams)



// PER ogni elemento
for (let i = 0; i < teams.length; i++) {
    const currentTeamsMenber = teams[i];
    // console.log(currentTeamsMenber)

// recuperiamo il nome
const name = currentTeamsMenber.name
// recuperiamo il job
const job = currentTeamsMenber.job
// recuperiamo email
const email = currentTeamsMenber.email

console.log(name, job, email)
// creare il tag html del tr
// LITERAL deve stare in mezzo a delle virgolette strane: Alt + 96
const trHTMLString = `
<tr>
<td>${nome}</td>
<td>${job}</td>
<td>${nome}</td>
</tr>
`


//  aggiungiamo il tag nel tbody dell'html
tBodyElement.innerHTML = trHTMLString

}

const form = document.getElementById("form-add-members")

//Funzione che accetta un parametro di tipo evento
function aggiungiMembro(e) {
    //Disabilitare la propagazione del submit del Form che refresha la pagina
    e.preventDefault(); //disabilita l'evento richiamato
    
    //Recuperiamo i singoli imput per ID dal form
    const name = document.getElementById("name").value1;
    const job = document.getElementById("role").value;
    const email = document.getElementById("email").value;

    //con i valori costruiamo l'oggetto "nuovo membro" da pushare
    const nuovoMembro = {
        name: name,
        job: job,
        email: email,
    };

    console.log(nuovoMembro)

    //Pushare il nuovo membro nell'array
    teams.push(nuovoMembro);
}