var edad = 27;

edad *= 1;

var peso = 75;

// peso = peso - 1;
peso -= 2;

var sandwich = 1;

peso += sandwich;

var jugarAlFutbol = 3;

peso -= jugarAlFutbol;

/* Multiplicationes */
var precioDeVino = 200.3;

// var total = precioDeVino * 100 * 3 / 100;

var total = Math.round(precioDeVino * 100 * 3) / 100; // Más precisa
var totalStr =  total.toFixed(3);
var total2 = parseFloat(totalStr);

/* Divisiones */
var pizza = 8;
var personas = 2;
var cantidadDePorcionesPorPersona = pizza / personas;