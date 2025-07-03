// 1. Crea un elemento (por ejemplo, un <h1 id="title">) y cambia su contenido a "¡Hola Mundo!"" al cargar la página
document.getElementById("title").textContent = "¡Hola Mundo!"

// 2. Inserta una imagen con id="myImage" y cambia su atributo src a otra URL
document.getElementById("myImage").src = "https://placekitten.com/200/300"

// 3. Crea un <div id="box"> sin clases y agrega la clase resaltado cuando se cargue la página
document.getElementById("box").classList.add("resaltado")

// 4. Crea un párrafo con id="paragraph" y cambia su color de texto a azul
document.getElementById("paragraph").style.color = "blue"

// 5. Agrega un botón que, al hacer clic, cree un nuevo elemento <li> con el texto "Nuevo elemento y lo agregue a una lista <ul id="list">
function agregarElemento() {
    const li = document.createElement("li")
    li.textContent = "Nuevo elemento"
    document.getElementById("list").appendChild(li)
}

// 6. Crea un párrafo con id="deleteParagraph" y un botón. Al hacer clic en el botón, elimina el párrafo del DOM
function eliminarParrafo() {
    const p = document.getElementById("deleteParagraph")
    if (p) p.remove()
}

// 7. Crea un <div id="content"> con algún texto y reemplaza su contenido por un <h2> con el mensaje "Nuevo Contenido"
document.getElementById("content").innerHTML = "<h2>Nuevo Contenido</h2>"

// 8. Crea un botón con id="greetBtn" y añade un evento que muestre una alerta con el mensaje "¡Hola!" al hacer clic
document.getElementById("greetBtn").addEventListener("click", () => {
    alert("¡Hola!")
})

// 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, el <div> se debe actualizarse mostrando lo que se escribe
document.getElementById("textInput").addEventListener("input", (e) => {
    document.getElementById("result").textContent = e.target.value
})

// 10. Crea un botón con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body> a un color diferente
document.getElementById("backgroundBtn").addEventListener("click", () => {
    document.body.style.backgroundColor = "#d0f0c0"
})