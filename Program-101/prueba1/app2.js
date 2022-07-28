
function crearAsignaturas(cantidad) {
    let cuentas = []

    for (let i = 1; i <= cantidad; i++) {
        let cuenta = {
            nombre: i,
            primeraNota: (Math.random().toFixed(1) * 10) / 2,
            segundaNota: (Math.random().toFixed(1) * 10) / 2,
            terceraNota: (Math.random().toFixed(1) * 10) / 2,
            examen: 0
        }
        cuentas.push(cuenta)
    }
    return cuentas
}
function agregarExamen(arreglo,nota) {
    
    let obtener = arreglo.filter((dato) => {
        return dato.examen = nota
    })
    return obtener
}
function calcularDefinitiva(arreglo) {
    let definitas = []
    for (let i = 0; i < arreglo.length; i++) {
        let multi=arreglo[i].primeraNota + arreglo[i].segundaNota + arreglo[i].terceraNota
        let divi=multi / arreglo.length
        let definitivas = (divi * 0.7) + (arreglo[i].examen * 0.3)
        let cuenta2 = {
            nombre: arreglo[i].nombre,
            primeraNota: arreglo[i].primeraNota,
            segundaNota: arreglo[i].segundaNota,
            terceraNota: arreglo[i].terceraNota,
            examen: arreglo[i].examen,
            definitiva:definitivas.toFixed(2)
        }
        definitas.push(cuenta2)
    }
    return definitas
}

