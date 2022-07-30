const boton = document.getElementById('botontransferencias');
let cuentas3 = JSON.parse(localStorage.getItem('cuentas')) ?? []
let depositos = JSON.parse(localStorage.getItem('depositos')) ?? []
let transferencias = JSON.parse(localStorage.getItem('transferencias')) ?? []

boton.addEventListener('click', (e) => {

    e.preventDefault();
    verificarCuentas();
    agregartabla();
    modificarMonto();


})
function verificarCuentas() {

    let envia = document.getElementById('numEnviar').value;
    let recibe = document.getElementById('numRecibir').value;
    let transferido = document.getElementById('cantidad').value;
    //verificaciones de datos
    let prueb = cuentas3.some((item) => {
        return item.numeroCuenta == envia
    })
    let prueb2 = cuentas3.some((item) => {
        return item.numeroCuenta == recibe
    })
    //verificacion de ingreso mayor o menor a monto
    let pruarr = cuentas.some((item) => {

        return item.numeroCuenta == envia && transferido < item.monto
    })
    //creando nuevos arreglos para crear objeto
    let objeto = cuentas3.filter((item) => {

        return item.numeroCuenta == recibe
    })
    let objeto2 = cuentas3.filter((item) => {

        return item.numeroCuenta == envia
    })
    if (prueb == true && prueb2 == true ) {

        
        console.log('si existen las cuentas')
        
    } else if(pruarr==true){
        let objetoNuevo = {

            nombreRecibe: objeto[0].nombre,
            nombreEnvia: objeto2[0].nombre,
            numeroCuentaRecibe: recibe,
            numeroCuentaEnvia: envia,
            cantidadTransferencia: transferido,
            fechaTransferencia: new Date().toLocaleDateString()
        }

        transferencias.push(objetoNuevo);
        localStorage.setItem('transferencias', JSON.stringify(transferencias))
        
    }else{
        alert('una o todas las cuentas no existen')
    }
}
function modificarMonto() {
    let envia = document.getElementById('numEnviar').value;
    let recibe = document.getElementById('numRecibir').value;
    let transferido = document.getElementById('cantidad').value;
    cuentas.find((item) => {

        if (item.numeroCuenta == envia && transferido < item.monto) {
            item.monto = Number(item.monto) - Number(transferido)
        }
        return
    })
    let pruarr = cuentas.some((item) => {

        return item.numeroCuenta == envia && transferido < item.monto
    })
    cuentas.find((item) => {

        if (item.numeroCuenta == recibe && pruarr == true) {
            item.monto = Number(item.monto) + Number(transferido)
        }
        return
    })
    //comprobar varios casos cuando la cuenta o el monto son invalidos
    let prueb = cuentas3.some((item) => {
        return item.numeroCuenta == envia
    })
    let prueb2 = cuentas3.some((item) => {
        return item.numeroCuenta == recibe
    })
    if(pruarr==false && prueb==false &&prueb2==false){

        
    }else if(pruarr==false && prueb==true &&prueb2==true){
    
        alert('Excede Cupo Total De Transferencia')
    }
    if (pruarr == true) {
        localStorage.setItem('cuentas', JSON.stringify(cuentas))
    }


}
function agregartabla() {
    let envia = document.getElementById('numEnviar').value;
    let transferido = document.getElementById('cantidad').value;
    let pruarr = cuentas.some((item) => {

        return item.numeroCuenta == envia && transferido < item.monto
    })
    if (pruarr == true) {

        let spanEnvia = document.getElementById('spanEnvia');
        let spanRecibe = document.getElementById('spanRecibe');
        let spanNumeroEnvia = document.getElementById('spanNumeroEnvia');
        let spanNumeroRecibe = document.getElementById('spanNumeroRecibe');
        let spanTransferido = document.getElementById('spanTransferido');
        let spanFecha = document.getElementById('spanFecha');

        transferencias.forEach((item) => {
            spanEnvia.textContent = item.nombreEnvia
            spanRecibe.textContent = item.nombreRecibe
            spanNumeroEnvia.textContent = item.numeroCuentaEnvia
            spanNumeroRecibe.textContent = item.numeroCuentaRecibe
            spanTransferido.textContent = item.cantidadTransferencia
            spanFecha.textContent = item.fechaTransferencia
        })
    }

    //
}