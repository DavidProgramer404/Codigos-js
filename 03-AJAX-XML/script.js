// Seleccionamos los elementos del DOM
const form = document.getElementById('formXML');
const inputTexto = document.getElementById('texto');

// Manejador del evento submit del formulario
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    // Crear la petición AJAX usando XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Configuramos la petición: método GET y ruta del archivo XML
    xhr.open('GET', 'ejemploXML.xml', true);

    // Manejamos la respuesta de la petición
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Extraemos el contenido del XML
            const xmlDoc = xhr.responseXML;
            const mensaje = xmlDoc.getElementsByTagName('mensaje')[0].textContent;

            // Colocamos el contenido en el campo de texto
            inputTexto.value = mensaje;
        } else {
            inputTexto.value = 'Error al cargar el XML';
        }
    };

    // En caso de error de conexión
    xhr.onerror = function () {
        inputTexto.value = 'Error de conexión';
    };

    // Enviar la petición AJAX
    xhr.send();
});
