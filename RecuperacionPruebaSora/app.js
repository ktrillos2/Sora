//si hay objetos con la clave personas en el localstorage, el arreglo personas toma esos datos
//de lo contrario se crea como un arreglo vacio
let personas = JSON.parse(localStorage.getItem('personas')) ?? []
crearTabla();
let personasEliminadas = JSON.parse(localStorage.getItem('personasEliminadas')) ?? []
agregarCancelada();


function calcularEdad(fecha) {
    //definimos el dia de hoy
    var hoy = new Date();
    //definimos la fecha a calcular
    var cumpleanos = new Date(fecha);
    //calculamos la edad por los años
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    //calculamos los meses de la edad
    var m = hoy.getMonth() - cumpleanos.getMonth();
    //verificamos los meses y los dias para la edad
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}
function crearPersona() {
    //obtenemos los valores ingresados
    let nombre = document.getElementById('nombre').value;
    let cedula = document.getElementById('cedula').value;
    let fecha = document.getElementById('fecha').value;
    //creamos un objetocon los datos ingresados
    let nuevaPersona = {

        nombre: nombre,
        cedula: cedula,
        edad: calcularEdad(fecha),
        fecha: fecha,
    }
    //agregamos el objeto creado al arreglo Personas
    personas.push(nuevaPersona)
    //agregamos el arreglo de personas al localstorage
    localStorage.setItem('personas', JSON.stringify(personas));

}
function crearTabla() {
    //definimos una variable para agregar la tabla en html
    let tab = ""
    //hacemos un recorrido al arreglo y asignamos los valores a la tabla
    personas.forEach((element) => {

        tab += `
        <tr>
        <th>${element.nombre}</th>
        <th>${element.cedula}</th>
        <th>${element.edad}</th>
        <th>${element.fecha}</th>
        <th><button type="button" onclick="cancelar(${element.cedula})">Cancelar</button>
        <button type="submit" class="my-2 ml-2" id="botonEditar" onclick="editar(${element.cedula})">Editar</button></th>
        </tr>
        `
    })
    //seleccionamos el cuerpo de la tabla
    let bodyt = document.getElementById('bodyt')
    //agregamos la tabla al cuerpo de la tabla
    bodyt.innerHTML = tab
}
function cancelar(cedula) {
    //hacemos un filter para buscar todas las personas que no tengan la misma cedula
    let personasDiferentes = personas.filter((item) => {

        return item.cedula != cedula
    })
    //hacemos un find para buscar el objeto con la misma cedula
    let personaSimilar = personas.find((item) => {

        return item.cedula == cedula
    })
    //agregamos al arreglo la persona que eliminamos
    personasEliminadas.push(personaSimilar);
    //igualamos el arreglo personas con el filter para editarlo
    personas = personasDiferentes;
    //metemos al localstorage las personas eliminadas y las nuevas personas
    localStorage.setItem('personas', JSON.stringify(personas));
    localStorage.setItem('personasEliminadas', JSON.stringify(personasEliminadas));
    //agregamos directamente la tabla y agregamos las materias canceladas
    crearTabla();
    agregarCancelada();
}
function agregarCancelada() {
    //creamos la estructura para agregarlo al card
    let estructura = ""
    //recorremos el arreglo de personas eliminadas y asignamos los valores a la estructura
    personasEliminadas.forEach((item) => {

        estructura += `<div class="card">
        <div class="card-header">
        <p>${item.nombre}</p>
        </div>
        <div class="card-body">
        <p>Cedula: ${item.cedula}</p>
        <p>fecha: ${new Date().toLocaleDateString()}</p>
        </div>
        </div>
        `
    })
    //llamamos el div que contiene el card
    let divCard = document.querySelector('.card-group')
    //insertamos la estructura html al div
    divCard.innerHTML = estructura
}
function editar(cedula) {
    //agregamos el boton de guardar edicion
    let botonGuardarEdicion = `<input type="text" class="my-1 text-center" id="nombre" name="Nombre" placeholder="Nombre" required /><br>
    <input type="number" class="my-1 text-center" id="cedula" name="cedula" placeholder="Cedula" required /><br>
    <input type="date" class="my-1 text-center" id="fecha" name="fecha" placeholder="Fecha De Nacimiento"
    required /><br>
    <button type="submit" id="guardarFormulario" class="my-2">Guardar</button>`
    botonGuardarEdicion += `<button type="button" id="guardarEdicion" onclick="edicion(${cedula})">Guardar Edicion</button>`
    formulario.innerHTML = botonGuardarEdicion
    //ocultamos el boton de guardar formulario para agregar el boton de guardar edicion
    let botonFormulario = document.getElementById('guardarFormulario');
    botonFormulario.style.display = "none"
    //buscamos con un find la persona con la misma cedula
    let buscarPersona = personas.find((item) => {

        return item.cedula == cedula
    })
    //agregamos los valores al formulario
    let nombre = document.getElementById('nombre');
    let cedulaInput = document.getElementById('cedula');
    let fecha = document.getElementById('fecha');
    nombre.setAttribute("value", buscarPersona.nombre);
    cedulaInput.setAttribute("value", buscarPersona.cedula);
    fecha.setAttribute("value", buscarPersona.fecha);

}
function edicion(cedula) {
    //definimos los valores que vamos a ingresar en el formulario
    let nombre = document.getElementById('nombre').value;
    let cedula2 = document.getElementById('cedula').value;
    let fecha = document.getElementById('fecha').value;
    //buscamos la posicion del elemento a eliminar
    let busquedaPersona = personas.findIndex((item) => {

        return item.cedula == cedula
    })
    let comparacionPersona=personas.some((item)=>{

        return item.nombre==nombre && item
    })
    if(comparacionPersona==true){

        alert('El Nombre Ya Existe')
        return false
    }
    personas.splice(busquedaPersona, 1)
    let nuevaPersona = {

        nombre: nombre,
        cedula: cedula2,
        fecha: fecha,
        edad: calcularEdad(fecha),

    }
    personas.push(nuevaPersona);
    localStorage.setItem('personas', JSON.stringify(personas))
    crearTabla();

}



let formulario = document.getElementById('formulario');
formulario.addEventListener('submit', (e) => {

    e.preventDefault();
    //llamamos la funcion para crear la persona
    crearPersona();
    //reiniciamos el formulario
    formulario.reset();
    //insertamos la tabla
    crearTabla();
})