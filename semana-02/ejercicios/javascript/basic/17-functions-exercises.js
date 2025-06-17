// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function sumar(a, b) {
    console.log("Suma:", a + b)
}
sumar(3, 7)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
const mayorNumero = function (numeros) {
  return Math.max(...numeros)
}
console.log("Mayor número:", mayorNumero([3, 12, 5, 8]))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
const contarVocales = (texto) => {
    let contador = 0
    for (let letra of texto.toLowerCase()) {
        if ("aeiou".includes(letra)) contador++
    }
    return contador
}
console.log("Número de vocales:", contarVocales("Aeronave"))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
const aMayusculas = arr => arr.map(str => str.toUpperCase())
console.log("Strings en mayúsculas:", aMayusculas(["hola", "mundo"]))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function esPrimo(n) {
  if (n < 2) return false
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false
  }
  return true
}
console.log("¿Es primo 7?", esPrimo(7))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
const elementosComunes = function(arr1, arr2) {
  return arr1.filter(elemento => arr2.includes(elemento))
}
console.log("Elementos comunes:", elementosComunes([1, 2, 3], [2, 3, 4]))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
const sumaPares = numeros => numeros.filter(n => n % 2 === 0).reduce((a, b) => a + b, 0)
console.log("Suma de pares:", sumaPares([1, 2, 3, 4, 5, 6]))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
const alCuadrado = numeros => numeros.map(n => n**2)
console.log("Cuadrados:", alCuadrado([2, 3, 4]))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
const invertirPalabras = function(texto) {
  return texto.split(" ").reverse().join(" ");
}
console.log("Texto invertido:", invertirPalabras("Hola cómo estás"))

// 10. Crea una función que calcule el factorial de un número dado
function factorial(n) {
  if (n < 0) return undefined;
  let resultado = 1
  for (let i = 2; i <= n; i++) {
    resultado *= i
  }
  return resultado
}
console.log("Factorial de 5:", factorial(5))