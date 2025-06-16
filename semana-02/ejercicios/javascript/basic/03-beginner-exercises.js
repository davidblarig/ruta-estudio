// 1. Escribe un comentario en una línea
// Este es un comentario en una sola linea

// 2. Escribe un comentario en varias líneas
/*
   Este es un comentario
   que abarca varias lineas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let miCadena = "Hola"   // string
let miNumero = 42       // number
let miBooleano = true   // boolean
let miUndefined         // undefined
let miNull = null       // null
let miSymbol = Symbol("simbolo")        // symbol
let miBigInt = 12345678901234567890n    // bigint

// 4. Imprime por consola el valor de todas las variables
console.log(miCadena)
console.log(miNumero)
console.log(miBooleano)
console.log(miUndefined)
console.log(miNull)
console.log(miSymbol)
console.log(miBigInt)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof miCadena)
console.log(typeof miNumero)
console.log(typeof miBooleano)
console.log(typeof miUndefined)
console.log(typeof miNull)
console.log(typeof miSymbol)
console.log(typeof miBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
miCadena = "Adios"
miNumero = 100
miBooleano = false
miBigInt = 9007199254740991n
miSymbol = Symbol("nuevoSimbolo")

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
miCadena = 123
miNumero = "ahora soy una cadena"
miBooleano = "true"
miUndefined = null
miNull = "ya no soy un null"
miBigInt = 42
miSymbol = "simbolo como string"

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const CONST_STR = "constante cadena"
const CONST_NUM = 123
const CONST_BOOL = true
const CONST_UNDEF = undefined
const CONST_NULL = null
const CONST_BIGINT = 12345678901234567890n
const CONST_SYMBOL = Symbol("const")

// 9. A continuación, modifica los valores de las constantes
// CONST_NUM = 6.28;         // ❌ Error
// CONST_STR = "Cambio";     // ❌ Error
// CONST_BOOL = false;       // ❌ Error
// CONST_UNDEF = "algo";     // ❌ Error
// CONST_NULL = 0;           // ❌ Error
// CONST_BIGINT = 321n;      // ❌ Error
// CONST_SYMBOL = Symbol();  // ❌ Error

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
// Las líneas anteriores ya están comentadas con ❌ Error