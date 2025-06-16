// 1. Crea una variable para cada operación aritmética
let suma = 10 + 5
let resta = 10 - 5
let multiplicacion = 10 * 5
let division = 10 / 5
let modulo = 10 % 3
let exponente = 2 ** 3

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let asignacion = suma          // =
asignacion += 5                // +=
asignacion -= 2                // -=
asignacion *= 2                // *=
asignacion /= 3                // /=
asignacion %= 4                // %=
asignacion **= 2               // **=

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(10 > 5)
console.log(5 <= 5)
console.log(7 === 7)
console.log("a" != "b")
console.log(3 !== "3")

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(5 > 10)
console.log(5 < 5)
console.log(5 === "5")
console.log(7 !== 7)
console.log("hello" == "world")

// 5. Utiliza el operador lógico and
let esMayorYPar = 10 > 5 && 10 % 2 === 0
console.log(esMayorYPar)

// 6. Utiliza el operador lógico or
let esMayorOPar = 10 < 5 || 10 % 2 === 0
console.log(esMayorOPar)

// 7. Combina ambos operadores lógicos
let resultadoComplejo = (10 > 5 && 4 < 2) || (3 === 3)
console.log(resultadoComplejo)

// 8. Añade alguna negación
let noEsVerdad = !(5 > 2)
console.log(noEsVerdad)

// 9. Utiliza el operador ternario
let edad = 18
let acceso = edad >= 18 ? "Permitido" : "Denegado"
console.log(acceso)

// 10. Combina operadores aritméticos, de comparáción y lógicas
let total = 5 * 2 + 3
let condicionFinal = total > 10 && total % 2 === 1
console.log(condicionFinal)