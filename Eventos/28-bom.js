'use strict'

//Evento del raton
window.addEventListener('load', () => {

   var boton = document.querySelector("#boton");

   function cambiaColor() {
      var bg = boton.style.background
      if (bg == "green") {
         boton.style.background = "red";
         boton.style.padding = "10px";
         boton.style.border = "0px solid #ccc";
      } else {
         boton.style.background = "green";
      }
      return true;
   }
   //click
   boton.addEventListener('click', function () {

      cambiaColor()
   });

   //mouse over
   boton.addEventListener('mouseover', function () {
      var bg = boton.style.background
      if (bg == "purple") {
         boton.style.background = "blue"
      } else {
         boton.style.background = "purple";
      }

   })
   //mouseout
   //Focus
   var input = document.querySelector("#campo_nombre");
   input.addEventListener('focus', function () {

      console.log('estas haciendo foco en el input');
   });
   //Blur
   input.addEventListener('blur', function () {

      console.log('estas fuera del input');
   });
   //keydown
   input.addEventListener('keydown', function () {

      console.log('estas pulsando el input');
   });
   //keypress
   input.addEventListener('keypress', function () {

      console.log('estas tocando el input');
   });
   //keyup
   input.addEventListener('keyup', function () {

      console.log('tecla soltada')
   });

})

