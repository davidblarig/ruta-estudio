// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
const palabras = ["hola", "mundo", "javascript", "es", "genial"]
const longitudes = palabras.map(p => p.length)
console.log(longitudes)
const mayoresA4 = longitudes.filter(len => len > 4)
console.log(mayoresA4)
const sumaTotal = mayoresA4.reduce((a, b) => a + b, 0)
console.log(sumaTotal)

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
const numeros = [1, 2, 3, 4, 5]
const cubosPares = numeros.map(n => n ** 3).filter(n => n % 2 === 0)
console.log(cubosPares)

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
const frases = ["Hola mundo", "JS es genial"]
const palabrasSeparadas = frases.flatMap(f => f.split(" "))
console.log(palabrasSeparadas)

const anidado = [1, [2, [3, [4]]]]
console.log(anidado.flat(2))

// 4. Ordena un array de números de mayor a menor
const valores = [5, 2, 8, 1, 3]
const ordenDesc = valores.sort((a, b) => b - a)
console.log(ordenDesc)

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
const setA = new Set([1, 2, 3, 4])
const setB = new Set([3, 4, 5, 6])

const union = new Set([...setA, ...setB])
const interseccion = new Set([...setA].filter(x => setB.has(x)))
const diferencia = new Set([...setA].filter(x => !setB.has(x)))

// 6. Itera los resultados del ejercicio anterior
console.log("Unión:")
union.forEach(x => console.log(x))

console.log("Intersección:")
interseccion.forEach(x => console.log(x))

console.log("Diferencia:")
diferencia.forEach(x => console.log(x))

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos
const usuarios = new Map([
  ["juan@mail.com", { nombre: "Juan", edad: 20, email: "juan@mail.com" }],
  ["ana@mail.com", { nombre: "Ana", edad: 17, email: "ana@mail.com" }],
  ["pedro@mail.com", { nombre: "Pedro", edad: 30, email: "pedro@mail.com" }]
])

usuarios.forEach((usuario, email) => {
  console.log(`${usuario.nombre} (${usuario.edad}) - ${email}`);
})

// 8. Dado el mapa anterior, crea un array con los nombres
const nombres = Array.from(usuarios.values()).map(u => u.nombre)
console.log(nombres)

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
const emailsMayores = new Set(
  [...usuarios.values()]
    .filter(u => u.edad >= 18)
    .map(u => u.email)
)
console.log(emailsMayores)

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario
// Map a Objecto
const objetoUsuarios = Object.fromEntries(usuarios)
console.log(objetoUsuarios)

// Objecto a nuevo Map con email como clave
const nuevoMapa = new Map(
  Object.values(objetoUsuarios).map(user => [user.email, user])
)
console.log(nuevoMapa)