const boton = document.getElementById('botontransferencias');
let cuentas3 = JSON.parse(localStorage.getItem('cuentas')) ?? []
let depositos = JSON.parse(localStorage.getItem('depositos')) ?? []
let transferencias= JSON.parse(localStorage.getItem('transferencias'))??[]

boton.addEventListener('click', (e) => {

    e.preventDefault();
    verificarCuentas();


})
function verificarCuentas(){

    let envia = document.getElementById('numEnviar').value;
    let recibe = document.getElementById('numRecibir').value;
    let transferido=document.getElementById('cantidad').value;
    let prueb = cuentas3.some((item) => {
        return item.numeroCuenta == envia
    })
    let prueb2 = cuentas3.some((item) => {
        return item.numeroCuenta == recibe
    })
    let objeto=cuentas3.filter((item)=>{

        return item.numeroCuenta==recibe
    })
    let objeto2=cuentas3.filter((item)=>{

        return item.numeroCuenta==envia
    })
    if(prueb==true && prueb2==true){

        let objetoNuevo={
    
            nombreRecibe:objeto[0].nombre,
            nombreEnvia:objeto2[0].nombre,
            numeroCuentaRecibe:recibe,
            numeroCuentaEnvia:envia,
            cantidadTransferencia:transferido,
            fechaTransferencia:new Date().toLocaleDateString()
        }

        transferencias.push(objetoNuevo);
        localStorage.setItem('transferencias', JSON.stringify(transferencias))

    }else {

        alert('una o todas las cuentas no existen')
    }
}