window.addEventListener('load',function(){
    console.log("DOM cargado!!");

    var formulario=document.querySelector('#formulario')
    var boxe=document.querySelector('.dashed')
    boxe.style.display="none";
    formulario.addEventListener('submit',function(){

        console.log('evento submit capturado');
        var nombre=document.querySelector('#nombre').value;
        var apellidos=document.querySelector('#apellidos').value;
        var edad=document.querySelector('#edad').value;
        if(nombre.trim()==null||nombre.trim()==0){
            alert('el nombre no es valido');
            return false
        }

        boxe.style.display="block";

        var pnombre=document.querySelector('#p_nombre span')
        var papellidos=document.querySelector('#p_apellidos span')
        var pedad=document.querySelector('#p_edad span')

        pnombre.innerHTML= nombre;
        papellidos.innerHTML= apellidos;
        pedad.innerHTML= edad;

        
    })

})