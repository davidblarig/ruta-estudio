// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
let i = 0
do {
    i++
    console.log(i)
} while (i < 20)

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0
for (let i = 1; i <= 100; i++) {
    suma += i;
}
console.log("Suma del 1 al 100:", suma)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ["Ana", "Luis", "Carlos", "Elena"]
for (let nombre of nombres) {
    console.log(nombre)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let texto = "Hola mundo"
let contadorVocales = 0
for (let letra of texto) {
    if ("aeiouAEIOU".includes(letra)) {
        contadorVocales++
    }
}
console.log("Número de vocales:", contadorVocales)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros = [2, 3, 4]
let producto = 1
for (let numero of numeros) {
    producto *= numero
}
console.log("Producto total:", producto)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
i = 1
while (i <= 10) {
    console.log(`5 x ${i} = ${i*5}`)
    i++
}

// 8. Usa un bucle para invertir una cadena de texto
let original = "javascript"
let invertido = []
for (let letra of original) {
    invertido.push(letra)
}
console.log("Cadena invertida:", invertido.reverse().join(""))

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let fib = [0, 1]
let f = 2
while (f < 10) {
  fib[f] = fib[f - 1] + fib[f - 2]
  f++
}
console.log("Secuencia Fibonacci:", fib)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let nums = [4, 15, 8, 23, 9, 12]
let mayoresA10 = []
for (let numero of nums) {
    if (numero > 10) {
        mayoresA10.push(numero)
    }
}
console.log("Mayores a 10:", mayoresA10)