// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "David"
if (nombre === "David") {
  console.log("Mi nombre es David")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "admin"
let contraseña = "1234"
if (usuario === "admin" && contraseña === "1234") {
  console.log("Acceso concedido")
} else {
  console.log("Acceso denegado")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = -5
if (numero > 0) {
  console.log("El número es positivo")
} else if (numero < 0) {
  console.log("El número es negativo")
} else {
  console.log("El número es cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 16;
if (edad >= 18) {
  console.log("Puedes votar")
} else {
  console.log(`No puedes votar. Te faltan ${18 - edad} años`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let categoria = edad >= 18 ? "adulto" : "menor"
console.log(`Eres un(a) ${categoria}`)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "marzo";
if (["diciembre", "enero", "febrero"].includes(mes)) {
  console.log("Es invierno")
} else if (["marzo", "abril", "mayo"].includes(mes)) {
  console.log("Es primavera")
} else if (["junio", "julio", "agosto"].includes(mes)) {
  console.log("Es verano")
} else if (["septiembre", "octubre", "noviembre"].includes(mes)) {
  console.log("Es otoño")
} else {
  console.log("Mes no válido")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if ("febrero" == mes) {
    console.log("Tiene 28 o 29 días")
} else if (["abril", "junio", "septiembre", "noviembre"].includes(mes)) {
    console.log("Tiene 30 días")
} else if (["enero", "marzo", "mayo", "julio", "agosto", "octubre", "diciembre"].includes(mes)) {
    console.log("Tiene 31 días")
} else {
    console.log("Mes no válido")
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "fr"
switch (idioma) {
  case "es":
    console.log("¡Hola!")
    break
  case "en":
    console.log("Hello!")
    break
  case "fr":
    console.log("Bonjour!")
    break
  case "de":
    console.log("Hallo!")
    break
  default:
    console.log("Idioma no soportado")
    break
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch (mes) {
  case "diciembre":
  case "enero":
  case "febrero":
    console.log("Es invierno")
    break
  case "marzo":
  case "abril":
  case "mayo":
    console.log("Es primavera")
    break
  case "junio":
  case "julio":
  case "agosto":
    console.log("Es verano")
    break
  case "septiembre":
  case "octubre":
  case "noviembre":
    console.log("Es otoño")
    break
  default:
    console.log("Mes no válido")
    break
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes) {
  case "febrero":
    console.log("Tiene 28 o 29 días")
    break
  case "abril":
  case "junio":
  case "septiembre":
  case "noviembre":
    console.log("Tiene 30 días")
    break
  case "enero":
  case "marzo":
  case "mayo":
  case "julio":
  case "agosto":
  case "octubre":
  case "diciembre":
    console.log("Tiene 31 días")
    break
  default:
    console.log("Mes no válido")
    break
}