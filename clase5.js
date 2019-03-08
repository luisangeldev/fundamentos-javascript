var luis = {
    nombre: 'Luis',
    apellido: 'Herrera',
    edad: 28
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