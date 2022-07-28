/*hacer un programa que haga transferencias,muestre todas las transferencias
tambien muestre las transferencias hechas, y transferencias que recibimos,
mostrar las transferencias mayores a la de un numero que debemos colocar,
mostrar las transferencias por id

se necesitan 5 objetos, emisor,receptor,monto,fecha e id, la fecha e id se deben 
colocar automaticamente,el emisor y receptor puede ser por numero de cedula o numero
de celular,para la fecha se usa la funcion date now, el id puede ser de aumento de 1
en 1*/


let i = 0
let transferencias = []
function realizarTransferencia(emisor, receptor, monto) {
    i++
    if ( monto > 0 ) {

        let transferencia = {
            emisor,
            receptor,
            monto,
            fecha: new Date().toISOString(),
            id: i,
        }
        transferencias.push(transferencia)
        return transferencia
    }
}
function mostrarTransferencia() {
    return transferencias
}

function obtenerTransferenciasHechas(usuario) {
    let obtener = transferencias.filter((trans) => {
        return trans.emisor === usuario
    })
    return obtener
}

function obtenerTransferenciasRecibidas(usuario) {
    let obtener = transferencias.filter((trans) => {

        return trans.receptor === usuario
    })
    return obtener
}

function mostrarTransferenciaMayor(monto) {
    let obtener = transferencias.filter((trans) => {

        return trans.monto > monto
    })
    return obtener
}

function mostrarTransferenciaId(id) {
    let obtener = transferencias.find((trans) => {

        return trans.id === id
    })
    return obtener
}


/* hacer una funcion para crear depositos, mostrar todos los depositos,mostrar 
depositos por id,mostrar todos los depositos hechos por mi, y mostrar cuantos 
depositos por dia se han realizado, solo contar los que se han hecho, mas no
mostrar todos los depositos

se necesitan 4 valores, que son la cuenta a la que vamos a depositar,el monto
total que vamos a enviar, y la fecha e id, los cuales deben ser estaticos*/


let depositos = []
function crearDepositos(cuenta, monto) {
    i++

    if (monto > 0 ) {
        let deposito = {
            cuenta,
            monto,
            fecha: new Date(),
            id: i,
        }
        depositos.push(deposito)
        return deposito;
    }
}
function mostrarDepositos() {

    return depositos

}
function obtenerDepositosHechos(cuenta) {
    let obtener = depositos.filter((trans) => {

        return trans.cuenta === cuenta
    })
    return obtener
}
function mostrarDepositosId(id) {
    let obtener = depositos.find((tranññs) => {

        return trans.id === id
    })
    return obtener

}

function mostrarDepositosDia(dia, mes, anio) {
    const obtener = depositos.filter((trans) => {
        let igual2 = trans.fecha.getDate() == dia && trans.fecha.getMonth() + 1 == mes && trans.fecha.getFullYear() == anio;
        return igual2
    })
    return 'hay ' + obtener.length + ' depositos'
}

/*hacer una funcion que realize retiros, tambien debemos mostrar cuantos
retiros en total se han hecho,mostrar retiros por id, mostrar los retiros hechos 
por mi y obtener el balance de la cuenta que ingresemos

se necesitan 4 valores, que son la cuenta a la que vamos a realizar un retiro,el monto
total que vamos a retirar, y la fecha e id, los cuales deben ser estaticos*/

let retiros = [];
let balance = 0;

function realizarRetiros(cuenta, monto) {
    i++
    if (monto>0) {
        let retiro = {
            cuenta,
            monto,
            fecha: new Date(),
            id: i,
        }
        retiros.push(retiro)
    } 
    
    return 'su retiro fue exitoso, su balance restante es: ' + totalBalance(cuenta);


}
function mostrarRetiros() {

    return retiros

}

function mostrarRetirosId(id) {
    let obtener = cuentas.find((trans) => {

        return trans.id === id
    })
    return obtener

}

function totalBalance(cuenta) {
    let total = depositos.reduce((sumar, datos) => {
        return datos.cuenta === cuenta ? sumar += datos.monto : sumar;
    }, 0);
    let total2 = retiros.reduce((sumar, datos) => {
        return datos.cuenta === cuenta ? sumar += datos.monto : sumar;
    }, 0);
    let result=total-total2

    return 'su balance es: ' + result;
}

/* crear factura con solo id fecha y productos,productos va a ser un 
objeto que va a tener la id del producto y el precio

crear factura, la id y fecha es dinamico,cada vez que se crea una factura se le 
ingresan productos,listar todas las facturas,devolver factura por id,devolver 
producto por id(solo precio total),mostrar todas las facturas con su valor total*/
