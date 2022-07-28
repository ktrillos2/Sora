'use strict'

//DOM - Document Object Model

function cambiaColor(color){
   caja.style.background=color

   
}
//conseguir todos los elementos por su id
//var caja = document.getElementById("micaja");
var caja= document.querySelector("#micaja")
caja.innerHTML = "¡TEXTO EN LA CAJA DESDE JS!";
caja.style.background = "black";
caja.style.padding="20px";
caja.style.color="white";
caja.className="micaja";  

//conseguir todos los elementos por su etiqueta
var todosLosDivs= document.getElementsByTagName('div')
console.log(todosLosDivs);

var contenido= todosLosDivs[2]
var otrodiv=document.querySelector('#nuevo')

otrodiv.style.background="blue"
otrodiv.style.padding="5px";
console.log(window.location);


contenido.innerHTML = "Otro Texto"
contenido.style.background="black"
contenido.style.color="white"

var valor
   for(valor in todosLosDivs){
      if (typeof todosLosDivs[valor].textContent=='string'){

         
         var parrafo = document.createElement("p");
         var texto =document.createTextNode(todosLosDivs[valor].textContent);
         parrafo.prepend(texto);
         document.querySelector("#miseccion").appendChild(parrafo);
      }
   }
