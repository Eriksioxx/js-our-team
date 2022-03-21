console.log('JS OK!');

// Aggiungere un file js in cui definire *un array di oggetti* che rappresentano i membri del team. Ogni
// membro ha le informazioni necessarie per stampare la relativa card: *Nome, Ruolo e Foto*.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html,
// stampare dinamicamente una card per ogni membro del team.
// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team:
// cliccando sul pulsante "add" viene creato un *nuovo oggetto*, il quale viene *inserito nell'array iniziale* e
// viene stampata una nuova card con tutte le informazioni inserite dall'utente.

// Creazione *un array di oggetti* che rappresentano i membri del team.

const characterPeople = [{
    nome: 'Luca',
    cognome: 'Rossi',
    lavoro: 'Web Design'
},
{
    nome: 'Mary',
    cognome: 'Rossi',
    lavoro: 'Web Design'
},
{
    nome: 'Nadia',
    cognome: 'Rossi',
    lavoro: 'Web Design'
},
{
    nome: 'Vittorio',
    cognome: 'Rossi',
    lavoro: 'Web Design'
},
{
    nome: 'Eros',
    cognome: 'Rossi',
    lavoro: 'Web Design'
},
{
    nome: 'Eros',
    cognome: 'Rossi',
    lavoro: 'Web Design'
}];

// Ogni membro ha le informazioni necessarie per stampare la relativa card: *Nome, Ruolo e Foto*.

for (let i = 0; i < characterPeople.length; i++) {
    const detals = characterPeople[i];
    console.log('ciclo una classe', detals);
}

// Stampare dinamicamente una card per ogni membro del team.
let teamCard = document.querySelector('.team-card');

for (let i = 0; i < characterPeople.length; i++) {

    const worker = document.createElement('div');
    worker.className = 'description';
    teamCard.appendChild(worker);

    worker.innerText = characterPeople.nome;
}
