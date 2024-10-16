// Parte 1: Obtener los elementos <p> y mostrarlos en un alert
const parrafos = document.querySelectorAll("p");
let textosParrafos = Array.from(parrafos).map(p => p.textContent);
alert(textosParrafos.join('\n'));

// Parte 2: Añadir un nuevo párrafo al body
const nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = 'Texto del nuevo párrafo';
document.body.appendChild(nuevoParrafo);

// Parte 3: Eliminar el primer párrafo

const primerParrafo = document.querySelector('p');
primerParrafo.parentNode.removeChild(primerParrafo);

// Parte 4: Cambiar el color del primer párrafo a rojo

const primerParrafoRojo = document.querySelector('p');
primerParrafoRojo.style.color = 'red';

// Parte 5: Añadir un enlace al primer párrafo

const enlace = document.createElement('a');
enlace.href = 'https://www.google.com';
enlace.textContent = 'Enlace a Google';
primerParrafoRojo.appendChild(enlace);