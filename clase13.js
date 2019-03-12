var luis = {
    nombre: 'Luis',
    apellido: 'Herrera',
    edad: 28,
    peso: 85
}

console.log(`Al inicio del año ${luis.nombre} pesa ${luis.peso} Kg`);

const INCREMENTO_PESO = 0.2;
const DIAS = 365;

const aumentaDePeso = persona => persona.peso += INCREMENTO_PESO * 100;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO * 100;

for (let i = 1; i <= DIAS; i++) {
    let random = Math.random();
    if (random < 0.25) {
        aumentaDePeso(luis)
    } else if(random < 0.5) {
        adelgazar(luis)
    }
}

console.log(`Al final del año ${luis.nombre} pesa ${luis.peso.toFixed(1)} Kg`);