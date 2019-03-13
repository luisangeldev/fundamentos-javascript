const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const OPTS = {
    crossDomain: true
};

const onPeopleResponse = persona => console.log(`Hola yo soy ${persona.name}`);

const getCharacter = function (id) {
    return new Promise((resolve, reject) => {
        const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $.get(URL, OPTS, data => {
            resolve(data)
        })
        .fail(() => {
            reject(id)
        })
    });
}

const siError = function (id){
    console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`);
}

getCharacter(1)
    .then(persona => {
        console.log(`Hola yo soy ${persona.name}`);
    }).catch(siError);