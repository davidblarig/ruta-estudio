// 1. Crea una clase que reciba dos propiedades
class Persona {

    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    // 2. Añade un método a la clase que utilice las propiedades
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`)
    }

    // 4. Añade un método estático a la primera clase
    static especie() {
        return "Humano"
    }

}

// 3. Muestra los valores de las propiedades e invoca a la función
const persona1 = new Persona("Juan", 35)
console.log("Nombre:", persona1.nombre)
console.log("Edad:", persona1.edad)
persona1.saludar()

// 5. Haz uso del método estático
console.log("Especie:", Persona.especie())

// 6. Crea una clase que haga uso de herencia
class Estudiante extends Persona {

    constructor(nombre, edad, curso) {
        super(nombre, edad)
        this.curso = curso
    }

    // 10. Sobrescribe un método de una clase que utilice herencia
    saludar() {
        console.log(`Hola, me llamo ${this.nombre}, tengo ${this.edad} años y estudio ${this.curso}.`)
    }

}

const estudiante1 = new Estudiante("Lucía", 30, "Matemáticas")
estudiante1.saludar()

// 7. Crea una clase que haga uso de getters y setters
class Producto {
    constructor(nombre, precio) {
        this._nombre = nombre
        this._precio = precio
    }

    get nombre() {
        return this._nombre
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre
    }

    get precio() {
        return this._precio
    }

    set precio(nuevoPrecio) {
        if (nuevoPrecio >= 0) {
            this._precio = nuevoPrecio
        }
    }
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas
class ProductoPrivado {
    #nombre
    #precio

    constructor(nombre, precio) {
        this.#nombre = nombre
        this.#precio = precio
    }

    get nombre() {
        return this.#nombre
    }

    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre
    }

    get precio() {
        return this.#precio
    }

    set precio(nuevoPrecio) {
        if (nuevoPrecio >= 0) {
            this.#precio = nuevoPrecio
        }
    }
}

// 9. Utiliza los get y set y muestra sus valores
const prod = new ProductoPrivado("Laptop", 1200)
console.log("Nombre producto:", prod.nombre)
prod.precio = 1000
console.log("Precio actualizado:", prod.precio)