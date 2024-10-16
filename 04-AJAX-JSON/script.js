// Seleccionamos los elementos del DOM
const form = document.getElementById('formJSON');
const inputTexto = document.getElementById('texto');

// Manejador del evento submit del formulario
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita la recarga del formulario

    // Crear la petición AJAX usando XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Configuramos la petición: método GET y ruta del archivo JSON
    xhr.open('GET', 'ejemploJSON.json', true);

    // Manejamos la respuesta de la petición
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Parsear la respuesta JSON
            const data = JSON.parse(xhr.responseText);
            // Colocamos el contenido en el campo de texto
            inputTexto.value = `Name: ${data.name}, Country: ${data.country}`;
        } else {
            inputTexto.value = `Error: ${xhr.status}`;
        }
    };

    // En caso de error de conexión
    xhr.onerror = function () {
        inputTexto.value = 'Error de conexión';
    };

    // Enviar la petición AJAX
    xhr.send();
});
