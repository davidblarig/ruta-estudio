// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
const colores = ["rojo", "azul", "verde", "amarillo"]
const [primero, segundo] = colores
console.log(primero)
console.log(segundo)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
const numeros = [10]
const [a = 1, b = 2] = numeros
console.log("a:", a, "b:", b)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
const persona = { nombre: "Laura", edad: 25, ciudad: "Sevilla" }
const {nombre, edad} = persona
console.log("Nombre:", nombre)
console.log("Edad:", edad)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
const { nombre: nombrePersona, edad: edadPersona } = persona
console.log("Nombre (renombrado):", nombrePersona)
console.log("Edad (renombrada):", edadPersona)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let empleado = {
    nombre: "Pedro",
    edad: 32,
    direccion: {
        calle: "Gran Vía",
        numero: 10
    }
}
const { direccion: { calle: nombreCalle, numero } } = empleado
console.log("Dirección:", nombreCalle, "-", numero)

// 6. Usa propagación para combinar dos arrays en uno nuevo
const frutas = ["manzana", "pera"]
const verduras = ["zanahoria", "lechuga"]
const alimentos = [...frutas, ...verduras]
console.log(alimentos)

// 7. Usa propagación para crear una copia de un array
const copiaFrutas = [...frutas]
console.log("Copia de frutas:", copiaFrutas)

// 8. Usa propagación para combinar dos objetos en uno nuevo
const info1 = { a: 1, b: 2 }
const info2 = { c: 3, d: 4 }
const combinado = {...info1, ...info2}
console.log(combinado)

// 9. Usa propagación para crear una copia de un objeto
const copiaPersona = { ...persona }
console.log("Copia de persona:", copiaPersona)

// 10. Combina desestructuración y propagación
const vehiculo = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020,
  color: "gris"
}
const { marca, ...restoDatos } = vehiculo
console.log("Marca:", marca)
console.log("Resto de propiedades:", restoDatos)