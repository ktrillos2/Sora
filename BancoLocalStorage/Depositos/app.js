const boton=document.getElementById('botondepositos');
let cuentas2=JSON.parse(localStorage.getItem('cuentas')) ?? []
let depositos=JSON.parse(localStorage.getItem('depositos'))??[]
agregartabla();
boton.addEventListener('click',(e)=>{
    e.preventDefault();
    realizarDeposito();
    agregartabla();
    agregarMonto();
})
function agregarMonto(){
    let numero=document.getElementById('numCuenta').value;
    let monto=document.getElementById('cantidad').value;
    cuentas.find((item)=>{
        
        if(item.numeroCuenta==numero){
            item.monto=Number(item.monto)+Number(monto)
        }
        return
    })
    localStorage.setItem('cuentas',JSON.stringify(cuentas))
}
function realizarDeposito(){

    let numero=document.getElementById('numCuenta').value;
    let monto=document.getElementById('cantidad').value;

    let objeto=cuentas2.filter((item)=>{

        return item.numeroCuenta==numero
    })
    let prueb = cuentas2.some((item) => {
        return item.numeroCuenta == numero
    })
    if(prueb==true){
        let objetoNuevo={
    
            nombre:objeto[0].nombre,
            numeroCuenta:numero,
            cantidadDeposito:monto,
            fechaDeposito:new Date().toLocaleDateString()
        }


        alert('Deposito Exitoso')
        depositos.push(objetoNuevo);
        localStorage.setItem('depositos', JSON.stringify(depositos))

    }else{

        alert('La Cuenta No Existe')
        return false
    }
}

function agregartabla(){

    let spanNombre=document.getElementById('spanNombre');
    let spanNumero=document.getElementById('spanNumero');
    let spanDepositado=document.getElementById('spanDepositado');
    let spanFecha=document.getElementById('spanFecha');
    depositos.forEach((item)=>{
        spanNombre.textContent=item.nombre
        spanNumero.textContent=item.numeroCuenta
        spanDepositado.textContent=item.cantidadDeposito
        spanFecha.textContent=item.fechaDeposito
    })
}