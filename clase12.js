var luis = {
    nombre: 'Luis',
    apellidos: 'Herrera',
    edad: 29,
    ingeniero: true,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: true,
    drone: true
};

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`);

    if (persona.ingeniero) {
        console.log('Ingeniero');
    } else {
        console.log('No es ingeniero');
    }

    if (persona.cocinero) {
        console.log('Cocinero');
    } else {
        console.log('No es cocinero');
    }

    if (persona.cantante) {
        console.log('Cantante');
    }

    if (persona.dj) {
        console.log('DJ');
    }

    if (persona.guitarrista) {
        console.log('Guitarrista');
    }

    if (persona.drone) {
        console.log('Piloto de drone');
    }
}

imprimirProfesiones(luis);

const MAYORIA_DE_EDAD = 18;

/**
 * Forma común de declarar funciones
 */
/* function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
} */

/**
 * Asignando una función anónima a una variable
 */
/* const ES_MAYOR_DE_EDAD = function (persona) {
    return persona.edad >= MAYORIA_DE_EDAD
} */

/**
 * Usando arrow function
 */
/* const ES_MAYOR_DE_EDAD = persona => {
    return persona.edad >= MAYORIA_DE_EDAD
} */

/**
 * Desestructurando objeto "persona" y declarando todo en una sola línea
 * solo funciona si se retorna un solo valor
 */
const ES_MAYOR_DE_EDAD = ({edad}) => edad >= MAYORIA_DE_EDAD

function imprimirSiesMayorDeEdad(persona) {
    if (ES_MAYOR_DE_EDAD(persona)) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} NO es mayor de edad`);
    }
}

imprimirSiesMayorDeEdad(luis);


const PERMITIR_ACCESO = (persona) => ES_MAYOR_DE_EDAD(persona) ? 'ACCESO' : 'ACCESO DENEGADO';
console.log(PERMITIR_ACCESO(luis));

const ES_MENOR_DE_EDAD = (persona) => (!ES_MAYOR_DE_EDAD(persona)) ? 'Es menor' : 'Es mayor';
console.log(ES_MENOR_DE_EDAD(luis));