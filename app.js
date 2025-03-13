// Lista de amigos
let listaAmigos = [];

// Función para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    document.querySelector(elemento).innerHTML = texto;
}

// Función para agregar amigo a la lista
function agregarAmigo() {
    let input = document.getElementById('amigo');
    let amigoUsuario = input.value.trim();

    if (amigoUsuario === '') {
        alert('Por favor, ingrese un nombre válido');
        return;
    }

    if (listaAmigos.includes(amigoUsuario)) {
        alert('Este nombre ya está en la lista.');
        input.value = ''; // Limpia el campo inmediatamente
        return;
    }

    listaAmigos.push(amigoUsuario);
    input.value = ''; // 🔥 Ahora limpia el campo inmediatamente después de agregar
    actualizarLista();
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = listaAmigos.map(amigo => `<li>${amigo}</li>`).join('');

    // Habilita el botón de sorteo si hay amigos en la lista
    document.getElementById('btnSortear').disabled = listaAmigos.length === 0;
}

// Función para validar si hay nombres para sortear
function validarSorteo() {
    if (listaAmigos.length === 0) {
        alert('No hay amigos para sortear.');
        return false;
    }
    return true;
}

// Función para sortear un amigo
function sortearAmigo() {
    if (!validarSorteo()) return;

    let procesoAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos.splice(procesoAleatorio, 1)[0]; // Remueve y obtiene el nombre

    asignarTextoElemento('#resultado', `🎉 ¡El amigo secreto es: ${amigoSorteado}! 🎉`);
    
    // Oculta los nombres en pantalla después del sorteo
    document.getElementById('listaAmigos').innerHTML = '';

    // Deshabilita el botón si ya no hay más amigos en la lista
    document.getElementById('btnSortear').disabled = listaAmigos.length === 0;
}
