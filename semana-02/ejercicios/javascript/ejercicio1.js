// 🔁 Ejercicio 1: map + filter
const edades = [12, 25, 8, 30, 18];
const mayores = edades.filter(e => e >= 18);
console.log("Mayores de edad:", mayores);

const nombres = ["Ana", "Luis", "Carlos"];
const enMayus = nombres.map(n => n.toUpperCase());
console.log("Nombres en mayúscula:", enMayus);
