const { faker } = require('@faker-js/faker');
let nombres=[]
const crearNombres = () => {
    
    for (let i = 0; i <= 100; i++) {
        const randomName = faker.name.firstName().toLowerCase();
        nombres.push(randomName);
    }
}
const cambiarLetra = (letra1, letra2) => {  
    nuevosNombres = nombres.map(e => e.replace(new RegExp(letra1, 'g'), letra2));
}
