// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => console.log(posts))
    .catch(err => console.error('Error al obtener posts:', err))

// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        if (!res.ok) throw new Error(`HTTP error ${res.status}`)
        return res.json()
    })
    .then(posts => console.log(posts))
    .catch(err => console.error('Error:', err))

// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas
async function obtenerPosts() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!res.ok) throw new Error(`HTTP error ${res.status}`)
        const posts = await res.json()
        console.log(posts)
    } catch (err) {
        console.error('Error:', err)
    }
}
obtenerPosts()

// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Título nuevo', body: 'Contenido aquí', userId: 1 })
})
    .then(res => res.json())
    .then(data => console.log('Creado:', data))
    .catch(err => console.error(err))

// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: 1, title: 'Actualizado', body: 'Nuevo contenido', userId: 1 })
})
    .then(res => res.json())
    .then(data => console.log('Recurso PUT:', data))

// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Título parcial' })
})
    .then(res => res.json())
    .then(data => console.log('Recurso PATCH:', data))

// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
})
    .then(res => {
        if (res.ok) console.log('Recurso eliminado')
        else console.error('Error al eliminar', res.status)
    })
    .catch(err => console.error(err))

// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap
async function getWeather(ciudad) {
    const apiKey = 'TU_API_KEY'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`
    try {
        const res = await fetch(url)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        console.log(`Clima en ${ciudad}:`, data.weather[0].description)
    } catch (err) {
        console.error('Error clima:', err)
    }
}
getWeather('Madrid')

// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie
async function getPokemonChain(nombre) {
    try {
        const poke = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)).json()
        const species = await (await fetch(poke.species.url)).json()
        const evo = await (await fetch(species.evolution_chain.url)).json()
        console.log('Pokémon:', poke.name)
        console.log('Especie:', species.name)
        console.log('Evolución →', evo.chain.species.name,
            evo.chain.evolves_to.map(e => e.species.name))
    } catch (err) {
        console.error('Error PokéAPI:', err)
    }
}
getPokemonChain('charmander')

// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API