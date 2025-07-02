// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".
function saludar(nombre, callback) {
    setTimeout(() => {
        callback(`Hola, ${nombre}`)
    }, 2000)
}

saludar("Carlos", console.log)

// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.
function task1(callback) {
    setTimeout(() => {
        console.log("Tarea 1 completa")
        callback()
    }, 1000)
}

function task2(callback) {
    setTimeout(() => {
        console.log("Tarea 2 completa")
        callback()
    }, 1000)
}

function task3(callback) {
    setTimeout(() => {
        console.log("Tarea 3 completa")
        callback()
    }, 1000)
}

task1(() => task2(() => task3(() => console.log("Todas las tareas completas"))))

// 3. Crea una función para verificar un número que retorne una Promesa.
//    Si el número es par, la promesa se resuelve con el mensaje "Número par".
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".
function verificarNumero(n) {
    return new Promise((resolve, reject) => {
        if (n % 2 === 0) resolve("Número par")
        else reject("Número impar")
    })
}

verificarNumero(4).then(console.log).catch(console.error)

// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".
function firstTask() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Primera tarea completada")
            resolve()
        }, 1000)
    })
}

function secondTask() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Segunda tarea completada")
            resolve()
        }, 2000)
    })
}

function thirdTask() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Tercera tarea completada")
            resolve()
        }, 1500)
    })
}

// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().
async function executeTasks() {
    await firstTask()
    await secondTask()
    await thirdTask()
    console.log("Todas las tareas completadas")
}

executeTasks()

// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id < 5) resolve({ id, nombre: "Usuario " + id })
            else reject("Usuario no encontrado")
        }, 2000)
    })
}

async function obtenerUsuario(id) {
    try {
        const usuario = await getUser(id)
        console.log("Usuario:", usuario)
    } catch (error) {
        console.error("Error:", error)
    }
}

obtenerUsuario(3)

// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
//    console.log("Inicio")
//    setTimeout(() => console.log("setTimeout ejecutado"), 0)
//    Promise.resolve().then(() => console.log("Promesa resuelta"))
//    console.log("Fin")

// Predicción:
// 1. "Inicio"
// 2. "Fin"
// 3. "Promesa resuelta"
// 4. "setTimeout ejecutado"

console.log("Inicio")
setTimeout(() => console.log("setTimeout ejecutado"), 0)
Promise.resolve().then(() => console.log("Promesa resuelta"))
console.log("Fin")

// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.
function tareaA() {
    return new Promise(resolve => setTimeout(() => resolve("A"), 1000))
}
function tareaB() {
    return new Promise(resolve => setTimeout(() => resolve("B"), 2000))
}
function tareaC() {
    return new Promise(resolve => setTimeout(() => resolve("C"), 1500))
}

Promise.all([tareaA(), tareaB(), tareaC()]).then(() => console.log("Todas las promesas resueltas"))

// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.
function waitSeconds(segundos) {
    return new Promise(resolve => setTimeout(resolve, segundos * 1000))
}

async function esperar() {
    await waitSeconds(3)
    console.log("Tiempo finalizado")
}

esperar()

// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes
let saldo = 500

function checkBalance() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(saldo)
        }, 1000)
    })
}

function withdrawMoney(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (saldo >= amount) {
                saldo -= amount
                resolve(`Operación exitosa, saldo restante: $${saldo}`)
            } else {
                reject("Error: Fondos insuficientes")
            }
        }, 2000)
    })
}

async function cajero() {
    const balance = await checkBalance()
    console.log(`Saldo disponible: $${balance}`)

    try {
        console.log("Retirando $300...")
        const mensaje1 = await withdrawMoney(300)
        console.log(mensaje1)

        console.log("Retirando $300...")
        const mensaje2 = await withdrawMoney(300)
        console.log(mensaje2)
    } catch (error) {
        console.error(error)
    }
}

cajero()