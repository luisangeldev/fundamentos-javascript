const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const OPTS = {
    crossDomain: true
};

const onPeopleResponse = persona => console.log(`Hola yo soy ${persona.name}`);

const getCharacter = function (id, callback) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(URL, OPTS, callback).
    fail(() => {
        console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`);
    });
}

getCharacter(1, function (persona) {
    console.log(`Hola yo soy ${persona.name}`);
    getCharacter(2, function (persona) {
        console.log(`Hola yo soy ${persona.name}`);
        getCharacter(3, function (persona) {
            console.log(`Hola yo soy ${persona.name}`);
            getCharacter(4, function (persona) {
                console.log(`Hola yo soy ${persona.name}`);
                getCharacter(5, (persona) => {
                    console.log(`Hola yo soy ${persona.name}`);
                })
            })
        })
    })
})