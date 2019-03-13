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

let ids = [1,2,3,4,'error',6,7];

const promesas = ids.map( id => getCharacter(id));

Promise
    .all(promesas)
    .then(personajes => {
        console.log(personajes);
    })
    .catch(siError);



/* getCharacter(1)
    .then(persona => {
        console.log(`Hola yo soy ${persona.name}`);
        return getCharacter(2);
    })
    .then(persona => {
        console.log(`Hola yo soy ${persona.name}`);
        return getCharacter(3);
    })
    .then(persona => {
        console.log(`Hola yo soy ${persona.name}`);
        return getCharacter(4);
    })
    .then(persona => {
        console.log(`Hola yo soy ${persona.name}`);
        return getCharacter(5);
    })
    .then(persona => {
        console.log(`Hola yo soy ${persona.name}`);
        return getCharacter(6);
    })
    .then(persona => {
        console.log(`Hola yo soy ${persona.name}`);
        return getCharacter(7);
    }).then(persona => {
        console.log(`Hola yo soy ${persona.name}`);
    })
    .catch(siError); */