let contador = 0;

const llueve = () => Math.random() < 0.25; // Devuelve true o false

do {
    contador++;
} while (!llueve());

palabra = contador => contador > 1 ? `${contador} veces` : `${contador} vez`;

console.log(`Fui a ver si llovia ${palabra(contador)}`);