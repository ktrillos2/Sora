obtenerlocal()

function obtenerlocal(){

    let nombre=localStorage.getItem("nombre");
    let persona=JSON.parse(localStorage.getItem("persona"));
    console.log(nombre);
    console.log(persona);

}
function guardarlocal(){
    let todo = []
    let carro = {
        marca: "mazda",
        hp: 435,
        capacidad: 4,
        largoMetros: 4,
    }
    
    let nombre = "sedan"
    todo.push(nombre)
    localStorage.setItem("nombre", todo);
    localStorage.setItem("persona", JSON.stringify(carro));

}



