document.getElementById("agregar").addEventListener("click", () => {
  const input = document.getElementById("tarea");
  const texto = input.value.trim();
  if (texto !== "") {
    const li = document.createElement("li");
    li.textContent = texto;
    const btn = document.createElement("button");
    btn.textContent = "Eliminar";
    btn.onclick = () => li.remove();
    li.appendChild(btn);
    document.getElementById("lista-tareas").appendChild(li);
    input.value = "";
  }
});
