var luis = {
    nombre: 'Luis',
    apellido: 'Herrera',
    edad: 28,
    peso: 85
}

console.log(`Al inicio del año ${luis.nombre} pesa ${luis.peso} Kg`);

const INCREMENTO_PESO = 0.300;
const DIAS = 365;
const META = luis.peso - 3;

const aumentaDePeso = persona => persona.peso += INCREMENTO_PESO * 100;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO * 100;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;
let dias = 0;

while (luis.peso > META) {
    if (comeMucho()) {
        // Aumenta peso
        aumentaDePeso(luis);
    } else if(realizaDeporte()){
        // adelgazar
        adelgazar(luis);
    }
    dias += 1;
}

console.log(`Pasaron ${dias} días hasta que ${luis.nombre} bajó 3kg`);