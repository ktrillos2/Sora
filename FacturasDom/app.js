function haceralgo(e){
    e.preventDefault()
    console.log('evento submit');
    const nom=document.getElementById('NombrePro').value
    const prec=document.getElementById('Precio').value
    let tablepro=document.getElementById('producto_table')
    let preciopro=document.getElementById('producto_precio')

    if([nom,prec].includes("")){
        alert('los campos son invalidos');
        return;
    }
    factura.style.display="block"
    tablepro.textContent=nom
    preciopro.textContent=prec
}

const formulario=document.getElementById('productos')

formulario.addEventListener('submit',haceralgo)

const factura=document.querySelector('#factura')
factura.style.display="none"
