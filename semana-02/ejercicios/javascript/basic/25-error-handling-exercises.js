// 1. Captura una excepción utilizando try-catch
try {
    let resultado = 10 / 0
    throw new Error("División por cero")
} catch (error) {
    console.error("Error capturado:", error.message)
}

// 2. Captura una excepción utilizando try-catch y finally
try {
    let json = '{"invalidoJson": }'
    JSON.parse(json)
} catch (error) {
    console.error("Error al parsear JSON:", error.message)
} finally {
    console.log("Finalizando intento de parseo.")
}

// 3. Lanza una excepción genérica
function lanzarError() {
    throw new Error("Esto es un error genérico")
}
// lanzarError() // Descomentar para probar

// 4. Crea una excepción personalizada
class MiExcepcion extends Error {
    constructor(mensaje) {
        super(mensaje)
        this.name = "MiExcepcion"
    }
}

// 5. Lanza una excepción personalizada
function verificarEdad(edad) {
    if (edad < 0) {
        throw new MiExcepcion("La edad no puede ser negativa")
    }
    return edad
}

try {
    verificarEdad(-5)
} catch (e) {
    console.error(e.name + ":", e.message)
}

// 6. Lanza varias excepciones según una lógica definida
function evaluar(valor) {
    if (typeof valor !== "number") {
        throw new TypeError("Debe ser un número")
    } else if (valor < 0) {
        throw new RangeError("El número no puede ser negativo")
    }
    return Math.sqrt(valor)
}

try {
    evaluar("texto")
} catch (e) {
    console.error(e.name + ":", e.message)
}

// 7. Captura varias excepciones en un mismo try-catch
try {
    let a = undefined
    console.log(a.propiedad) // TypeError
    JSON.parse("invalido")   // SyntaxError (no se ejecutará)
} catch (e) {
    console.error("Error capturado:", e.name, "-", e.message)
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
const valores = ["12.3", "abc", "45.6", "NaN", "78.9"]
for (let val of valores) {
    try {
        let num = parseFloat(val)
        if (isNaN(num)) throw new Error(`No es un número válido: ${val}`)
        console.log("Número válido:", num)
    } catch (err) {
        console.warn("Error al convertir:", err.message)
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
function verificarPropiedad(obj, prop) {
    if (!obj.hasOwnProperty(prop)) {
        throw new MiExcepcion(`Falta la propiedad: ${prop}`)
    }
    return obj[prop]
}

try {
    const user = { nombre: "Ana" }
    verificarPropiedad(user, "edad")
} catch (err) {
    console.error(err.name + ":", err.message)
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function conReintentos(fn, maxIntentos = 10) {
    let intentos = 0
    while (intentos < maxIntentos) {
        try {
            return fn()
        } catch (e) {
            intentos++
            console.warn(`Error en intento ${intentos}:`, e.message)
            if (intentos === maxIntentos) {
                throw new Error("Se alcanzó el máximo de reintentos")
            }
        }
    }
}

// Ejemplo de uso con función aleatoria fallida
function puedeFallar() {
    if (Math.random() < 0.7) {
        throw new Error("Fallo aleatorio")
    }
    return "Éxito"
}

try {
    let resultado = conReintentos(puedeFallar, 10)
    console.log("Resultado final:", resultado)
} catch (e) {
    console.error("Error final:", e.message)
}