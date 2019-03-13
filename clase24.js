function heredaDe(PrototipoHijo, PrototipoPadre) {
    let fn = function () {
        fn.prototype = PrototipoPadre.prototype;
        PrototipoHijo.prototype = new fn;
        PrototipoHijo.prototype.constructor = PrototipoHijo;
    }
} 
// Definiendo el prototipo(clase)
function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura; // Reto
}

// Agregando función a prototipo(clase)
Persona.prototype.saludar = function () {
    console.log(`Hola soy ${this.nombre}`);
}
// Reto
Persona.prototype.soyAlto = function () {
    console.log(this.altura > 1.8 ? 'Si, lo eres' : 'No, no lo eres')
}

function Desarrollador(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

Desarrollador.prototype.saludar = function name() {
    console.log(`Hola soy ${this.nombre} y soy desarrollador`);
}

heredaDe(Persona, Desarrollador)

// Instanciando prototipo(clase)
let luis = new Persona('Luis', 'Herrera', 1.65);
let erika = new Persona('Erika', 'Luna', 1.89);
let mario = new Persona('Mario', 'Perez', 1.70);