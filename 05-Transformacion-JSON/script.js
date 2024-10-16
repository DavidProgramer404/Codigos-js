// Definimos un objeto JSON
const objetoJSON = {
    persona: {
        nombre: "Juan",
        edad: 30,
        direccion: {
            calle: "Calle Falsa 123",
            ciudad: "Springfield"
        }
    },
    telefonos: [
        { tipo: "casa", numero: "555-1234" },
        { tipo: "móvil", numero: "555-5678" }
    ]
};

// Mostrar el objeto original en consola
console.log("Objeto original:", objetoJSON);



// Transformar el objeto JSON a String
const jsonString = JSON.stringify(objetoJSON);
console.log("Transformado a String:", jsonString);

// Transformar el String de vuelta a un objeto JSON
const objetoTransformado = JSON.parse(jsonString);

// Mostrar el objeto transformado en consola
console.log("Objeto transformado:", objetoTransformado);

// Comprobamos que se mantienen todas las propiedades
console.log("Nombre:", objetoTransformado.persona.nombre);
console.log("Edad:", objetoTransformado.persona.edad);
console.log("Dirección:", objetoTransformado.persona.direccion);
console.log("Teléfonos:", objetoTransformado.telefonos);
