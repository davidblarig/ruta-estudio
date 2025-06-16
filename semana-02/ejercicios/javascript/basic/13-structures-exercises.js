// 1. Crea un array que almacene cinco animales
let animales = ["perro", "gato", "elefante", "jirafa", "león"]
console.log("Animales iniciales:", animales)

// 2. Añade dos más. Uno al principio y otro al final
animales.unshift("oso") // al principio
animales.push("cebra")  // al final
console.log("Animales después de añadir:", animales)

// 3. Elimina el que se encuentra en tercera posición
animales.splice(2, 1)
console.log("Animales después de eliminar el tercero:", animales)

// 4. Crea un set que almacene cinco libros
let libros = new Set(["1984", "Cien años de soledad", "El principito", "Fahrenheit 451", "Matar a un ruiseñor"]);
console.log("Libros iniciales:", libros)

// 5. Añade dos más. Uno de ellos repetido
libros.add("Don Quijote");
libros.add("1984"); // repetido, no se añade
console.log("Libros después de añadir:", libros)

// 6. Elimina uno concreto a tu elección
libros.delete("Fahrenheit 451");
console.log("Libros después de eliminar uno:", libros)

// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map([
  [1, "enero"],
  [2, "febrero"],
  [3, "marzo"],
  [4, "abril"],
  [5, "mayo"],
  [6, "junio"],
  [7, "julio"],
  [8, "agosto"],
  [9, "septiembre"],
  [10, "octubre"],
  [11, "noviembre"],
  [12, "diciembre"]
])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (meses.has(5)) {
    console.log("El mes número 5 es:", meses.get(5))
} else {
    console.log("El mes número 5 no existe")
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set("verano", ["junio", "julio", "agosto"])
console.log("Meses de verano:", meses.get("verano"))

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let frutas = ["manzana", "pera", "uva", "manzana"]
let frutasSet = new Set(frutas)
let mapaFrutas = new Map()
mapaFrutas.set("frutasUnicas", frutasSet)

console.log("Frutas originales:", frutas)
console.log("Frutas únicas (Set):", frutasSet)
console.log("Mapa con frutas únicas:", mapaFrutas)