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

function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiesMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} NO es mayor de edad`);
    }
}

imprimirSiesMayorDeEdad(luis);