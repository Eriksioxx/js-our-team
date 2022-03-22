console.log('JS OK!');

// Aggiungere un file js in cui definire *un array di oggetti* che rappresentano i membri del team. Ogni
// membro ha le informazioni necessarie per stampare la relativa card: *Nome, Ruolo e Foto*.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html,
// stampare dinamicamente una card per ogni membro del team.


// *****VARIABILI*****

let teamCard = document.querySelector('.team-container');


// Creazione delle Card del Team
function cardCreation() {

    for (let i = 0; i < characterPeople.length; i++) {

        let divCard = document.createElement('div');
        divCard.className = 'team-card';
        teamCard.appendChild(divCard);

        let divImage = document.createElement('div');
        divCard.appendChild(divImage);

        let img = document.createElement('img');
        divImage.appendChild(img);
        img.src = characterPeople[i].image;
        divImage.classList.add('card-image');

        let divText = document.createElement('div');
        divCard.appendChild(divText);
        divText.classList.add('card-text');

        let nameOfMembers = document.createElement('h3');
        nameOfMembers.innerText = characterPeople[i].name;
        divText.appendChild(nameOfMembers);

        let roleOfMembers = document.createElement('p');
        roleOfMembers.innerText = characterPeople[i].role;
        divText.appendChild(roleOfMembers);
    }
}


// Caratteristiche del Team

const characterPeople = [{
    name: 'Franco Forte',
    role: 'Raccoglitori di gomme da masticare',
    image: 'img/scott-estrada-developer.jpg'
},
{
    name: 'Licenziato Assunto',
    role: 'Cercatore di palline da golf',
    image: 'img/wayne-barnett-founder-ceo.jpg'
},
{
    name: 'Eros Peloso',
    role: 'Moderatore di assemblee di condominio',
    image: 'img/walter-gordon-office-manager.jpg'
},
{
    name: 'Bevilacqua Chiara',
    role: 'Assaggiatrice di cibo per animali',
    image: 'img/angela-caroll-chief-editor.jpg'
},
{
    name: 'Foglio Rosa',
    role: 'Creatrice di avatar per l’aldilà',
    image: 'img/angela-lopez-social-media-manager.jpg'
},
{
    name: 'Santa Pazienza',
    role: 'Web Design',
    image: 'img/barbara-ramos-graphic-designer.jpg'
}];

console.log(characterPeople.length);

cardCreation()


// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team:
// cliccando sul pulsante "add" viene creato un *nuovo oggetto*, il quale viene *inserito nell'array iniziale* e
// viene stampata una nuova card con tutte le informazioni inserite dall'utente.

const addButton = document.getElementById('addMemberButton');

addButton.addEventListener('click', () => {

    teamCard.innerHTML = '';

    let insertName = document.getElementById('name').value;
    let insertRole = document.getElementById('role').value;
    let insertImage = document.getElementById('image').value;

    let newMember = {
        name: insertName,
        role: insertRole,
        image: insertImage,
    }

    characterPeople.push(newMember);

    cardCreation();

    console.log(characterPeople.length);

});
