// 1. Crea un objeto con 3 propiedades
let persona = {
    nombre: "Carlos",
    edad: 30,
    ciudad: "Madrid"
}

// 2. Accede y muestra su valor
console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.ciudad)

// 3. Agrega una nueva propiedad
persona.profesion = "Ingeniero"
console.log(persona["profesion"])

// 4. Elimina una de las 3 primeras propiedades
delete persona.ciudad
console.log(persona)

// 5. Agrega una función e invócala
persona.saludar = function () {
    return `Hola, me llamo ${persona.nombre}`
}
console.log(persona.saludar())

// 6. Itera las propiedades del objeto
for (let key in persona) {
    console.log(key + ": " + persona[key])
}

// 7. Crea un objeto anidado
let empleado = {
    nombre: "Ana",
    edad: 28,
    direccion: {
        calle: "Gran Vía",
        numero: 10
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas
console.log("Calle:", empleado.direccion.calle)
console.log("Número:", empleado.direccion.numero)

// 9. Comprueba si los dos objetos creados son iguales
console.log("¿Son iguales persona y empleado?", persona === empleado)

// 10. Comprueba si dos propiedades diferentes son iguales
console.log("¿Edad igual en ambos?", persona.edad === empleado.edad)