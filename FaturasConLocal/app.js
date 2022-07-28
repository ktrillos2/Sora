const formulario = document.querySelector('#formulario');
let productos = JSON.parse(localStorage.getItem('producto')) ?? []
agregarTabla();

//ingreso de datos

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    agregarProducto();
    agregarCantidad();
    agregarTabla();
});

function agregarProducto(){
    let nombreProducto = document.getElementById('nP').value;
    let precioProducto = document.getElementById('pP').value;
    let cantidadProducto = document.getElementById('cP').value;

    let producto = {

        nombre: nombreProducto,
        precio: precioProducto,
        cantidad: cantidadProducto,
    }
    
    let prueb=productos.some((item)=>{
        return item.nombre==nombreProducto
    })
    
    if (prueb == false) {
        productos.push(producto)
        localStorage.setItem('producto', JSON.stringify(productos));
        agregarTabla();
    } else {alert('producto ya existe') }
}
function agregarCantidad(){

    let prop=productos.reduce((sumatoria,datos)=>{

        return sumatoria+=datos.cantidad*datos.precio
    })
    productos.map(()=>{})
}
function agregarTabla() {
    //let local = JSON.parse(localStorage.getItem('producto'))
    let tr = document.getElementById('bod');
    let tabla = "";

    for (let i = 0; i < productos.length; i++) {
        tabla += `<tr>
                <td>${productos[i].nombre}</td>
                <td>${productos[i].precio}</td>
                <td>${productos[i].cantidad}</td>
            </tr>
            `
    }

    tr.innerHTML = tabla;

}











