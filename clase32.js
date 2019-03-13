const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const OPTS = {
    crossDomain: true
};

const onPeopleResponse = persona => console.log(`Hola yo soy ${persona.name}`);

const getCharacter = function (id) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(URL, OPTS, onPeopleResponse);
}

getCharacter(1)
getCharacter(2)
getCharacter(3)