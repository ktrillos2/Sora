'use strict'

let arre = ['marco', 'perez', 'lucas', 'juan']

let parrafo = document.getElementById('parrafo')
let fragment=document.createDocumentFragment()

/*arre.forEach(function (element) {
   parrafo.innerHTML+=`<li>${element}</li>`}
)*/
arre.forEach(element => {
   let li=document.createElement('li')
   li.textContent=element
   const chilnode=fragment.firstChild
   console.log(element,chilnode);
   fragment.insertBefore(li,chilnode)
});
parrafo.appendChild(fragment)