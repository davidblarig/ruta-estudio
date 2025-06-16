// ✅ Ejercicio 1: función tipada + tipos básicos

function saludar(nombre: string): void {
  console.log(`Hola, ${nombre}`);
}

const edades: number[] = [20, 30, 40];
const total: number = edades.reduce((a, b) => a + b, 0);

saludar("Luis");
console.log("Suma de edades:", total);
