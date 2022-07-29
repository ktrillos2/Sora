const formulariocuentas=document.getElementById('formulariocuentas')
const botoncuentas=document.getElementById('botoncuentas')
const tablaResultado=document.getElementById('resultadocuenta')
tablaResultado.style.display="none"
let cuentas=JSON.parse(localStorage.getItem('cuentas')) ?? []
botoncuentas.addEventListener('click',(e)=>{
    e.preventDefault();
    //ingreso del usuario
    let numero=document.getElementById('numCuenta').value;
    //
    

    if(numero<10000||numero>99999){
        
        alert('el numero debe ser de 5 cifras')
        return false
    }else{
        
        crearCuenta();
        agregarTablaCuentas();
        tablaResultado.style.display="block"

    }
    
    
})
function agregarTablaCuentas(){
    let spanNombre=document.getElementById('spanNombre');
    let spanNumero=document.getElementById('spanNumero');
    let spanMonto=document.getElementById('spanMonto');
    let spanFecha=document.getElementById('spanFecha');
    let cuentasA=JSON.parse(localStorage.getItem('cuentas'))
    cuentasA.forEach((item)=>{
        spanNombre.textContent=item.nombre
        spanNumero.textContent=item.numeroCuenta
        spanMonto.textContent=item.monto
        spanFecha.textContent=item.fechaCreacion
    })
    


}
function crearCuenta(){
    
    //ingreso del usuario
    let numero=document.getElementById('numCuenta').value;
    let nombre=document.getElementById('nomCuenta').value;
    //

    let cuenta={

        nombre:nombre,
        numeroCuenta:numero,
        fechaCreacion:new Date().toLocaleDateString(),
        monto:0
    }
    let prueb = cuentas.some((item) => {
        return item.numeroCuenta == numero
    })
    console.log(prueb);

    if (prueb == false) {
        cuentas.push(cuenta);
        localStorage.setItem('cuentas', JSON.stringify(cuentas));
    } else { alert('producto ya existe') }

}