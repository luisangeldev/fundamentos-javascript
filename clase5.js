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

function imprimirNombreEnMayusculas({nombre}) {
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(luis);
imprimirNombreEnMayusculas(dario);