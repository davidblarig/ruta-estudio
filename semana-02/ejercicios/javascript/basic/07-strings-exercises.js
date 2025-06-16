// 1. Concatena dos cadenas de texto
let saludo = "Hola"
let nombre = "Mundo"
let frase = saludo + " " + nombre
console.log(frase)

// 2. Muestra la longitud de una cadena de texto
console.log(frase.length)

// 3. Muestra el primer y último carácter de un string
let primeraLetra = frase[0]
let ultimaLetra = frase[frase.length-1]
console.log(primeraLetra)
console.log(ultimaLetra)

// 4. Convierte a mayúsculas y minúsculas un string
console.log(frase.toUpperCase())
console.log(frase.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let multilinea = `Esto es una línea
y esta es otra línea
y esta es una tercera línea.`
console.log(multilinea)

// 6. Interpola el valor de una variable en un string
let edad = 25
let mensaje = `Tienes ${edad} años.`
console.log(mensaje)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let texto = "Esto es un texto con espacios"
let textoConGuiones = texto.replace(/ /g, "-")
console.log(textoConGuiones)

// 8. Comprueba si una cadena de texto contiene una palabra concreta
let contieneTexto = texto.includes("texto")
console.log(contieneTexto)

// 9. Comprueba si dos strings son iguales
let str1 = "javascript"
let str2 = "javascript"
console.log(str1 === str2)

// 10. Comprueba si dos strings tienen la misma longitud
let cadena1 = "hola"
let cadena2 = "casa"
console.log(cadena1.length === cadena2.length)