/* crear factura con solo id fecha y productos,productos va a ser un 
objeto que va a tener la id del producto y el precio

crear factura, la id y fecha es dinamico,cada vez que se crea una factura se le 
ingresan productos,listar todas las facturas,devolver factura por id,devolver 
producto por id(solo precio total),mostrar todas las facturas con su valor total*/
let facturas = []
let productos = []
let i = 0

function crearProducto(nombre, monto) {
    let proc = {
        id: i++,
        nombre,
        monto
    }
    productos.push(proc)
    return proc
}

function buscarProducto(nombre) {
    const buscar = productos.find((datos) => {
        return datos.nombre === nombre;
    })

    return buscar;
}

function crearFactura(...producto) {

    let factu = {
        fecha: new Date().toISOString(),
        id: i++,
        producto
    }
    facturas.push(factu)
    return factu
}
function mostrarValorFacturaId(id) {
    let obtener = facturas.reduce((suma, fact) => {
        return fact.id === id ? suma += fact.producto.reduce((total, prod) => total += prod.monto, 0) : suma
    }, 0)
    return obtener
}
function mostrarValorTodasFacturas() {
    let obtener = facturas.reduce((suma, fact) => {
        return suma += fact.producto.reduce((total, prod) => total += prod.monto, 0)
    }, 0)
    return obtener
}
function mostrarFacturas() {
    return facturas
}
function mostrarFacturasId(id) {
    let obtener = facturas.filter((trans) => {

        return trans.id === id
    })
    return obtener
}
function mostrarProductosId(id) {
    let obtener = productos.filter((trans) => {

        return trans.id === id
    })
    return obtener
}

