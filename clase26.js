class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura; // Reto
    }

    saludar(fn) {
        var {nombre, apellido} = this
        console.log(`Hola soy ${this.nombre}`);
        if (fn) {
            fn(nombre, apellido)
        }
    }

    soyAlto() {
        console.log(this.altura > 1.8 ? 'Si, lo eres' : 'No, no lo eres')
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura);
    }
    saludar(fn) {
        console.log(`Hola soy ${this.nombre} y soy desarrollador`);
        if (fn) {
            fn(this.nombre, this.apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`);
    if (esDev) {
        console.log(`Ah mira, no sabía que eras desarrollador/a`);
    }
}

// Instanciando clase
var luis = new Desarrollador('Luis', 'Herrera', 1.65);
var erika = new Persona('Erika', 'Luna', 1.89);
var mario = new Persona('Mario', 'Perez', 1.70);

luis.saludar(responderSaludo);
erika.saludar();
mario.saludar(responderSaludo);