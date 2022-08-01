let asignaturas = JSON.parse(localStorage.getItem('asignaturas')) ?? []
agregartodo();
let materiasCanceladas = JSON.parse(localStorage.getItem('materiasCanceladas')) ?? []
agregarMateria();
let materiasEditadas=[]

function procesos() {
    i++
    let nombre = document.getElementById('nombresAsi').value;
    let primer = document.getElementById('primerPrevio').value;
    let segund = document.getElementById('segundoPrevio').value;
    let tercer = document.getElementById('tercerPrevio').value;
    let examen = document.getElementById('examenFinal').value;
    const asig = {
        nombre: nombre,
        primer: primer,
        segund: segund,
        tercer: tercer,
        examen: examen,
        id:i
    }


    if (primer > 5.0 || primer < 0) {
        alert('el numero es mayor a 5.0 o menor a 0');
        return false
    } else if (segund > 5.0 || segund < 0) {
        alert('el numero es mayor a 5.0 o menor a 0');
        return false
    } else if (tercer > 5.0 || tercer < 0) {
        alert('el numero es mayor a 5.0 o menor a 0');
        return false
    } else if (examen > 5.0 || examen < 0) {
        alert('el numero es mayor a 5.0 o menor a 0');
        return false
    }
    asignaturas.push(asig)
    definitivatot();
    cambiarColor();
    agregartodo();
    localStorage.setItem('asignaturas', JSON.stringify(asignaturas));

}

function agregartodo() {
    let i=1
    let tab = ""
    asignaturas.forEach((element) => {


        tab += `
        <tr id="${i++}">
        <th>${element.nombre}</th>
        <th>${element.primer}</th>
        <th>${element.segund}</th>
        <th>${element.tercer}</th>
        <th>${element.examen}</th>
        <th style="background-color: ${element.color};">${element.definitiva}</th>
        <th><button type="button" onclick="cancelar(${element.id})">Cancelar</button><button type="submit" class="my-2 ml-2" id="botonEditar" onclick="editar(${element.id})">Editar</button></th>
        </tr>
        </tbody>
        `
    })
    
    let bodyt = document.getElementById('bodyt')
    bodyt.innerHTML = tab

}
function editar(id){
    let formularioEditar=document.querySelector('.editar');
    formularioEditar.style.display="block"
    return id
}
function cancelar(id) {
    



    let materiasCancelada=asignaturas.filter((item)=>{

        return item.id!==id

    })
    let cancelada=asignaturas.find((item)=>{

        return item.id==id
    })
    materiasCanceladas.push(cancelada)
    asignaturas=materiasCancelada
    localStorage.setItem('materiasCanceladas',JSON.stringify(materiasCanceladas))
    localStorage.setItem('asignaturas',JSON.stringify(materiasCancelada))
    agregarMateria();
    agregartodo();
    
}
function agregarMateria(){

    
    
    let estructura=""   
    materiasCanceladas.forEach((item)=>{
        
        estructura+=`<div class="card">
        <div class="card-header">
        <p>${item.nombre}</p>
        </div>
        <div class="card-body">
        <p>Definitiva: ${item.definitiva}</p>
        <p>fecha: ${new Date().toLocaleDateString()}</p>
        </div>
        </div>
        `
    })
    
    let divCard=document.querySelector('.card-group')

    divCard.innerHTML=estructura

}


function cambiarColor() {



    asignaturas.map(element => {

        if (element.definitiva > 0.0 && element.definitiva <= 2.9) {

            element.color = "red"
        } else if (element.definitiva >= 3.0 && element.definitiva <= 3.9) {

            element.color = "yellow"
        } else if (element.definitiva >= 4.0 && element.definitiva <= 5.0) {

            element.color = "green"
        }


    })
}


function definitivatot() {

    asignaturas.map(element => {


        let multi = (Number(element.primer) + Number(element.segund) + Number(element.tercer))
        let divi = multi / 3
        let definitiva1 = (divi * 0.7) + (element.examen * 0.3)
        if (definitiva1 >= 2.95 && definitiva1 < 3) {

            definitiva1 = 3
        }
        element.definitiva = definitiva1.toFixed(1)
    })

}
function agregarEditada(){
    i++
    let nombre = document.getElementById('nombresAsi2').value;
    let primer = document.getElementById('primerPrevio2').value;
    let segund = document.getElementById('segundoPrevio2').value;
    let tercer = document.getElementById('tercerPrevio2').value;
    let examen = document.getElementById('examenFinal2').value;
    const edit = {
        nombre: nombre,
        primer: primer,
        segund: segund,
        tercer: tercer,
        examen: examen,
        id:i
    }
    if (primer > 5.0 || primer < 0) {
        alert('el numero es mayor a 5.0 o menor a 0');
        return false
    } else if (segund > 5.0 || segund < 0) {
        alert('el numero es mayor a 5.0 o menor a 0');
        return false
    } else if (tercer > 5.0 || tercer < 0) {
        alert('el numero es mayor a 5.0 o menor a 0');
        return false
    } else if (examen > 5.0 || examen < 0) {
        alert('el numero es mayor a 5.0 o menor a 0');
        return false
    }
    materiasEditadas.push(edit)
    localStorage.setItem('materiasEditadas',JSON.stringify(materiasEditadas))
    
    console.log(evento);
    asignaturas.push(edit)
    definitivatot();
    agregartodo();
    localStorage.setItem('materiasEditadas',JSON.stringify(materiasEditadas))
    
}
let i = 0
const formulario = document.getElementById('formulario')
formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    procesos();
    
})
const boton = document.getElementById('botonRegistrarEdicion')
boton.addEventListener('click',(e)=>{
    e.preventDefault();
    agregarEditada();


})
