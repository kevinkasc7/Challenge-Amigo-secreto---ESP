// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if (!nombreAmigo) {
        alert("Por favor, escribe un nombre válido");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombreAmigo);
    
    // Actualizar la lista visual
    actualizarListaAmigos();
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar lista existente

    amigos.forEach(amigo => {
        const elementoLista = document.createElement('li');
        elementoLista.textContent = amigo;
        listaAmigos.appendChild(elementoLista);
    });
}

// Función para realizar el sorteo aleatorio
function sortearAmigo() {
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = ''; // Limpiar resultados anteriores

    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo para sortear");
        return;
    }

    // Seleccionar un amigo aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado
    const elementoResultado = document.createElement('li');
    elementoResultado.textContent = amigoSecreto;
    resultadoElemento.appendChild(elementoResultado);
}