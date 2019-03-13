const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const OPTS = {
    crossDomain: true
};

const onPeopleResponse = persona => console.log(`Hola yo soy ${persona.name}`);

const getCharacter = function (id, callback) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(URL, OPTS, function (persona) {
        console.log(`Hola yo soy ${persona.name}`);
        callback ? callback() : '';
    });
}

getCharacter(1, function() {
    getCharacter(2, function () {
        getCharacter(3, function () {
            getCharacter(4, function () {
                getCharacter(5)
            })
        })
    })
})