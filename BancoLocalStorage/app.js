const barraNavegacion=document.querySelector('.menu')
const boton=document.getElementById('boton')
const botonCuenta=document.getElementById('cuentas')
barraNavegacion.style.display="none"
let clicks=0
boton.addEventListener('click',()=>{
    clicks++
    if(clicks%2==0){

        barraNavegacion.style.display="block"
    }else{

        barraNavegacion.style.display="none"
    }
})
botonCuenta.addEventListener('click',()=>{

    console.log('evento cuentas');
})