const formulario = document.querySelector('#formulario');
const tabla = document.getElementById('tabla')
let productos = JSON.parse(localStorage.getItem('producto')) ?? []
agregarTabla();

//ingreso de datos
tabla.style.display = "none"
formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    agregarProducto();
    agregarTabla();
});

function agregarProducto() {
    tabla.style.display = "block"
    let nombreProducto = document.getElementById('nP').value;
    let precioProducto = document.getElementById('pP').value;
    let cantidadProducto = document.getElementById('cP').value;

    let producto = {

        nombre: nombreProducto,
        precio: precioProducto,
        cantidad: cantidadProducto,
    }

    let prueb = productos.some((item) => {
        return item.nombre == nombreProducto
    })

    if (prueb == false) {

        productos.push(producto)
        let prop = productos.reduce((sumatoria, datos) => {

            return sumatoria = datos.cantidad * datos.precio
        }, 0)
        producto.total = prop
        localStorage.setItem('producto', JSON.stringify(productos));
        agregarTabla();
    } else { alert('producto ya existe') }
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
                <td>${productos[i].total}</td>
            </tr>
            `
    }

    tr.innerHTML = tabla;

}











