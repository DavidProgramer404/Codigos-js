// Crear el objeto Address del propietario
const ownerAddress = {
    objectid: "a001",
    street: "Avenida Las Condes 1234",
    city: "Santiago",
    state: "RM"
};

// Crear el contacto del propietario
const owner = {
    objectid: "c001",
    phone: "+56912345678",
    name: "Juan Pérez",
    title: "Manager",
    age: 42,
    address: ownerAddress
};

// Crear la lista de contactos
const contacts = [
    {
        objectid: "c002",
        phone: "+56987654321",
        name: "Ana González",
        title: "Developer",
        age: 30,
        address: {
            objectid: "a002",
            street: "Calle Los Robles 567",
            city: "Valparaíso",
            state: "V Región"
        }
    },
    {
        objectid: "c003",
        phone: "+56911223344",
        name: "Carlos Díaz",
        title: "Designer",
        age: 35,
        address: {
            objectid: "a003",
            street: "Camino El Alba 900",
            city: "Concepción",
            state: "VIII Región"
        }
    }
];

// Crear la libreta de contactos (PhoneBook)
const phoneBook = {
    objectid: "pb001",
    owner: owner,
    contacts: contacts
};

// Mostrar el objeto JSON en consola
console.log(JSON.stringify(phoneBook, null, 2));
