// 1. Crea una función que retorne a otra función
function crearSaludo(saludo) {
    return function (nombre) {
        return `${saludo}, ${nombre}`
    }
}
const saludarHola = crearSaludo("Hola")
console.log(saludarHola("Lucas"))

// 2. Implementa una función currificada que multiplique 3 números
const multiplicar = (a, b, c) => a * b * c
console.log(multiplicar(2, 3, 4))

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
function potencia(base, exponente) {
    if (exponente === 0) return 1
    return base * potencia(base, exponente - 1)
}
console.log(potencia(2, 5))

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
function createCounter(valorInicial) {
    let valor = valorInicial
    return {
        increment() { valor++ },
        decrement() { valor-- },
        getValue() { return valor }
    }
}
const contador = createCounter(10)
contador.increment()
contador.decrement()
console.log(contador.getValue())

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
function sumManyTimes(multiplier, ...numbers) {
    const suma = numbers.reduce((acc, val) => acc + val, 0)
    return suma * multiplier
}
console.log(sumManyTimes(2, 1, 2, 3))

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
function sumarConCallback(callback, ...nums) {
    const suma = nums.reduce((a, b) => a + b, 0)
    callback(suma)
}
sumarConCallback(resultado => {
    console.log("Suma:", resultado)
}, 5, 5, 5)

// 7. Desarrolla una función parcial
function parcial(f, ...argsIniciales) {
    return (...argsFinales) => f(...argsIniciales, ...argsFinales)
}
const suma = (a, b, c) => a + b + c
const sumaParcial = parcial(suma, 1, 2)
console.log(sumaParcial(3))

// 8. Implementa un ejemplo que haga uso de Spread
const arr1 = [1, 2]
const arr2 = [3, 4]
const combinado = [...arr1, ...arr2]
console.log(combinado)

// 9. Implementa un retorno implícito
const cuadrado = x => x * x
console.log(cuadrado(5))

// 10. Haz uso del this léxico
function Persona(nombre) {
    this.nombre = nombre
    this.saludar = () => {
        console.log(`Hola, soy ${this.nombre}`)
    }
}
const persona = new Persona("Valeria")
persona.saludar()