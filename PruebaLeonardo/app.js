//---------LOGICA---------//

/*crear un array de objetos cuyos objetos deben tener nombre, cedula, direccion y email,}
NO SE PUEDEN REPETIR Y TIENEN QUE SER LEGIBLES; esta funcion recibe 2 parametros: 
cantidad (cantidad de elementos que se quieren crear) y letra (Todos los elementos que 
contengan esta  letra debe ser mayuscula en el nombre, ejemplo buscar z en lopez, el 
resultado seria lopeZ, en todos los objetos)*/

//---------PRODUCCION---------//

//Importamos el framework de Chance JS

let Chance = require("chance");
const chance = new Chance();

//creamos la funcion para crear la direccion, la cedula, y la direccion

let crearDireccion = () => {
    let direccion = `calle ${Math.round(
        Math.random() * (31 - 0)
    )} avenida ${Math.round(Math.random() * (31 - 0))}`;
    return direccion;
};

let crearCedula = () => {
    let cedula = `${Math.round(Math.random() * (99999999 - 10000000))}`;
    return cedula;
};

//Creamos la funcion para crear la persona

let crearPersona = (cantidad, letra) => {
    //creamos el array
    const personas = [];
    const letra2 = letra.toLowerCase();
    
    const letra3 = letra.toUpperCase();
    //creamos el objeto con un ciclo
    for (let i = 0; i < cantidad; i++) {
        let objetoPersona = {
            nombre: chance.name().toLowerCase(),
            cedula: crearCedula(),
            direccion: crearDireccion(),
            email: chance.email({ domain: "gmail.com" }),
        };
        if (
            personas.length !== 0 ||
            objetoPersona.nombre !== personas.nombre ||
            objetoPersona.cedula !== personas.cedula ||
            objetoPersona.direccion !== personas.direccion ||
            objetoPersona.email !== personas.email
        ) {
            personas.push(objetoPersona);
        }
    }
    //buscamos l a letra en el arreglo y la ponemos en mayuscula
    personas.forEach((item) => {
        item.nombre = item.nombre.replace(new RegExp(letra2, "g"), letra);
        item.nombre = item.nombre.replace(new RegExp(letra, "g"), letra3);
        item.direccion = item.direccion.replace(new RegExp(letra2, "g"), letra);
        item.direccion = item.direccion.replace(new RegExp(letra, "g"), letra3);
        item.email = item.email.replace(new RegExp(letra2, "g"), letra);
        item.email = item.email.replace(new RegExp(letra, "g"), letra3);
    });
    //mostramos el arreglo
    return personas;
};
console.log(crearPersona(1, "o s"));
