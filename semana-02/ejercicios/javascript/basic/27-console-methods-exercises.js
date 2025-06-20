// 1. Crea un función que utilice error correctamente
function lanzarError() {
    console.error("❌ Ha ocurrido un error grave")
}
lanzarError()

// 2. Crea una función que utilice warn correctamente
function advertencia() {
    console.warn("⚠️ Esta es una advertencia")
}
advertencia()

// 3. Crea una función que utilice info correctamente
function mostrarInfo() {
    console.info("ℹ️ Información útil para el usuario")
}
mostrarInfo()

// 4. Utiliza table
const frutas = [
    { nombre: "Manzana", color: "Rojo" },
    { nombre: "Plátano", color: "Amarillo" },
    { nombre: "Kiwi", color: "Verde" }
]
console.table(frutas)

// 5. Utiliza group
console.group("Mensajes agrupados")
console.log("Mensaje 1")
console.log("Mensaje 2")
console.groupEnd()

// 6. Utiliza time
console.time("tiempoProceso")
for (let i = 0; i < 1000000; i++) { }
console.timeEnd("tiempoProceso")

// 7. Valida con assert si un número es positivo
function validarPositivo(num) {
    console.assert(num > 0, `❗ El número ${num} no es positivo`)
}
validarPositivo(5) // No muestra nada
validarPositivo(-3) // Muestra error con assert

// 8. Utiliza count
function contarLlamadas() {
    console.count("Función llamada")
}
contarLlamadas()
contarLlamadas()
contarLlamadas()

// 9. Utiliza trace
function nivel1() {
    nivel2()
}
function nivel2() {
    console.trace("Rastro de ejecución")
}
nivel1()

// 10. Utiliza clear
setTimeout(() => {
    console.clear()
    console.log("✅ Consola limpia")
}, 3000)