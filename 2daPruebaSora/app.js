let asignaturas = JSON.parse(localStorage.getItem('asignaturas')) ?? []
agregartodo();
let materiasCanceladas = []

function procesos(e) {
    
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
        id:i++
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
    localStorage.setItem('asignaturas', JSON.stringify(asignaturas))

}

function agregartodo() {
    let p = 0
    p++
    let tab = ""
    asignaturas.forEach((element) => {


        tab += `
        <tr id="tr">
        <th id="bot${p}">${element.nombre}</th>
        <th>${element.primer}</th>
        <th>${element.segund}</th>
        <th>${element.tercer}</th>
        <th>${element.examen}</th>
        <th style="background-color: ${element.color};">${element.definitiva}</th>
        <th><button type="submit" class="boton" id="botonca">Cancelar</button><button type="submit" class="my-2 ml-2" id="botonEditar">Editar</button></th>
        </tr>
        </tbody>
        `
    })
    
    let bodyt = document.getElementById('bodyt')
    bodyt.innerHTML = tab

}
function cancelar() {
    let tab = ""
    let i = 0
    i++
    console.log('enevo cancelar');
    let botonCan = document.getElementById('tr');
    console.log(botonCan);
    let prueba1=asignaturas.filter((item)=>{

        return botonCan==item.id
    })
    
    prueba1.forEach((item) => {
        
        tab += `
                <div class="card-header">
                    <h3>${item.nombre}</h3>
                </div>
                <div class="card-body">
                    <p id="tituloCardB">Primer Previo: ${item.primer}</p>
                    <p id="tituloCardB">Primer Previo: ${item.segund}</p>
                    <p id="tituloCardB">Primer Previo: ${item.tercer}</p>
                    <p id="tituloCardB">Primer Previo: ${item.examen}</p>
                    <p id="tituloCardB">Primer Previo: ${item.definitiva}</p>
                </div>`

    })
    materiasCanceladas.push(prueba1)
    let bodyCard = document.getElementById('card')
    bodyCard.innerHTML = tab



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
let i = 0
i++
const formulario = document.getElementById('formulario')
formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    procesos();
    
})
const boton = document.querySelectorAll('#tr')

for(let i=0;i<asignaturas.length;i++){
    
    boton[i].addEventListener('click',cancelar)

}
