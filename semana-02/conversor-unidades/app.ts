function convertir(): void {
  const valor = parseFloat((document.getElementById("valor") as HTMLInputElement).value);
  const tipo = (document.getElementById("tipo") as HTMLSelectElement).value;
  let resultado: number = 0;

  if (isNaN(valor)) {
    (document.getElementById("resultado") as HTMLElement).textContent = "Valor no válido";
    return;
  }

  switch (tipo) {
    case "c-f": resultado = valor * 9/5 + 32; break;
    case "f-c": resultado = (valor - 32) * 5/9; break;
    case "km-mi": resultado = valor * 0.621371; break;
    case "mi-km": resultado = valor / 0.621371; break;
  }

  (document.getElementById("resultado") as HTMLElement).textContent = resultado.toFixed(2);
}

document.getElementById("valor")!.addEventListener("input", convertir);
document.getElementById("tipo")!.addEventListener("change", convertir);
