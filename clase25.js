class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura; // Reto
    }
    
    saludar() {
        console.log(`Hola soy ${this.nombre}`);
    }

    soyAlto() {
        console.log(this.altura > 1.8 ? 'Si, lo eres' : 'No, no lo eres')
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura);
    }
    saludar() {
        console.log(`Hola soy ${this.nombre} y soy desarrollador`);
    }
}

// Instanciando clase
var luis = new Desarrollador('Luis', 'Herrera', 1.65);
var erika = new Persona('Erika', 'Luna', 1.89);
var mario = new Persona('Mario', 'Perez', 1.70);