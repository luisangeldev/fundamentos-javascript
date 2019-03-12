let signo = prompt('¿Cuál es tu signo?');

switch (signo) {
    case 'virgo':
        console.log('Hoy será un día chingón >:D')
        break;
    case 'aries':
        console.log('Hoy será un día chevere')
        break;
    case 'capricornio':
        console.log('La vida te sonrie')
        break;

    default:
        console.log('No ingresaste tu signo :(')
        break;
}