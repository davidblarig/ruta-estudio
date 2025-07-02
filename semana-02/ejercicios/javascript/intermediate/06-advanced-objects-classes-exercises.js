// 1. Agregega una función al prototipo de un objeto
function Persona(nombre) {
    this.nombre = nombre
}

Persona.prototype.saludar = function () {
    console.log(`Hola, soy ${this.nombre}`)
}

const p1 = new Persona("Lucas")
p1.saludar()

// 2. Crea un objeto que herede de otro
const animal = { tipo: "mamifero", respirar() { console.log("Respiro...") } }
const perro = Object.create(animal)
perro.ladrar = function () { console.log("Guau!") }
perro.respirar()
perro.ladrar()

// 3. Define un método de instancia en un objeto
const coche = {
    marca: "Toyota",
    arrancar: function () {
        console.log(`${this.marca} está arrancando`)
    }
}
coche.arrancar()

// 4. Haz uso de get y set en un objeto
const persona = {
    nombre: "Ana",
    apellido: "Gómez",
    get nombreCompleto() {
        return `${this.nombre} ${this.apellido}`
    },
    set nombreCompleto(valor) {
        const partes = valor.split(" ")
        this.nombre = partes[0]
        this.apellido = partes[1]
    }
}

console.log(persona.nombreCompleto)
persona.nombreCompleto = "Laura Pérez"
console.log(persona.nombreCompleto)

// 5. Utiliza la operación assign en un objeto
const destino = { a: 1 }
const fuente = { b: 2, c: 3 }
Object.assign(destino, fuente)
console.log(destino)

// 6. Crea una clase abstracta
class Figura {
    constructor() {
        if (this.constructor === Figura) {
            throw new Error("No se puede instanciar una clase abstracta")
        }
    }
    area() {
        throw new Error("Método abstracto")
    }
}

class Cuadrado extends Figura {
    constructor(lado) {
        super()
        this.lado = lado
    }
    area() {
        return this.lado ** 2
    }
}

const c = new Cuadrado(4)
console.log(c.area())

// 7. Utiliza polimorfismo en dos clases diferentes
class Gato {
    hablar() {
        console.log("Miau")
    }
}

class Perro {
    hablar() {
        console.log("Guau")
    }
}

const animales = [new Gato(), new Perro()]
animales.forEach(a => a.hablar())

// 8. Implementa un Mixin
const hablador = {
    hablar() {
        console.log(`${this.nombre} dice hola`)
    }
}

const persona1 = { nombre: "Carlos" }
Object.assign(persona1, hablador)
persona1.hablar()

// 9. Crea un Singleton
const Singleton = (function () {
    let instancia

    function crearInstancia() {
        return { mensaje: "Soy única" }
    }

    return {
        getInstancia: function () {
            if (!instancia) {
                instancia = crearInstancia();
            }
            return instancia
        }
    };
})();

const a = Singleton.getInstancia()
const b = Singleton.getInstancia()
console.log(a === b)

// 10. Desarrolla un Proxy
const usuario = {
    nombre: "Elena",
    edad: 25
}

const handler = {
    get(obj, prop) {
        return prop in obj ? obj[prop] : "Propiedad no encontrada"
    },
    set(obj, prop, valor) {
        if (prop === "edad" && typeof valor !== "number") {
            throw new Error("Edad debe ser un número")
        }
        obj[prop] = valor
        return true
    }
};

const proxyUsuario = new Proxy(usuario, handler)
console.log(proxyUsuario.nombre) // Elena
console.log(proxyUsuario.direccion) // Propiedad no encontrada
proxyUsuario.edad = 30 // OK
// proxyUsuario.edad = "treinta" // Error