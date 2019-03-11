var luis = {
    nombre: 'Luis',
    apellido: 'Herrera',
    edad: 29
}

var dario = {
    nombre: 'Darío',
    apellido: 'Susnisky',
    edad: 27
}

/* // Desestructurando objeto desde parámetro
function imprimirNombreEnMayusculas({nombre}) {
    console.log(nombre.toUpperCase());
} */

// Desestructurando objeto en una sola línea
function imprimirNombreEnMayusculas(persona) {
    var {nombre} = persona; // <= var nombre = persona.nombre;
    console.log(nombre.toUpperCase());
}
imprimirNombreEnMayusculas(luis);
imprimirNombreEnMayusculas(dario);


function imprimirNombreyEdad({ nombre,edad }) {
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`);
}

imprimirNombreyEdad(luis);
imprimirNombreyEdad(dario);

/**
 * Pasando parámetro objeto como referencia
 * regresa el mismo objto modificado
 */
/* function cumpleanos(persona) {
    persona.edad += 1;
} */

/**
 * Pasando parámetro objeto como valor
 * regresa un nuevo objeto
 */
function cumpleanos(persona) {
    return {
        ...persona, // los 3 puntos indican que copie todos los valores del objeto
        edad: persona.edad + 1, // Se sobre-escribe a propiedad edad
    }
}