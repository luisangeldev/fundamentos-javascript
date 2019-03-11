
/**
 * si se comparan los siguientes objetos con === el resultado será "false"
 * ya que se encuentran declarados de manera independiente, haciendo referencia
 * a espacios de memoria distintos
 */
var persona = {
    nombre: 'luis'
}

var otraPersona = {
    nombre: 'luis'
}

/**
 * Se se hace una comparación === en las siguientes declaraciones están darán 
 * como resultado "true", ya que otraPersona está haciendo referencia a la misma
 * variable en memoria que tiene persona
 */
var persona = {
    nombre: 'luis'
}

var otraPersona = persona