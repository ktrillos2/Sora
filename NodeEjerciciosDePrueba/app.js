//llamando datos del html
const boton = document.getElementById("boton");
const arr = [];
const ariba = [];
const abajo = [];
const derecha = [];
const izquierda = [];
const x = 0;
const y = 0;
let contador = 0;
//evento al presionar el boton
boton.addEventListener("click", (e) => {
	e.preventDefault();
	crearMovimientos();
	mayorQue();
});
let crearMovimientos = () => {
	let Dato = document
		.getElementById("movimientos")
		.value.toLowerCase()
		.split("");
	Dato.forEach((item) => {
		if (item === "r") {
            contador += 1;
            x+=1
			derecha.push(contador);
		} else if (item === "u") {
            contador += 1;
            y += 1;
			ariba.push(contador);
		} else if (item === "l") {
            contador += 1;
            y-=1
			izquierda.push(contador);
		} else if (item === "d") {
            contador += 1;
            y += 1;
			abajo.push(contador);
		}
	});
};
let mayorQue = () => {
	let Dato = document
		.getElementById("movimientos")
		.value.toLowerCase()
		.split("");

	if (ariba.length > derecha.length && abajo.length && izquierda.length) {
		for (let i = 0; i < Dato.length; i++) {
			if (Dato[i] == "u") {
				contador = i;
			}
		}
		console.log(
			"la posicion con mas movimientos hasta el punto de arranque es",
			contador
		);
	}
	if (derecha.length > ariba.length && abajo.length && izquierda.length) {
		for (let i = 0; i < Dato.length; i++) {
			if (Dato[i] == "r") {
				contador = i;
			}
		}
		console.log(
			"la posicion con mas movimientos hasta el punto de arranque es",
			contador
		);
	}
	if (abajo.length > ariba.length && derecha.length && izquierda.length) {
		for (let i = 0; i < Dato.length; i++) {
			if (Dato[i] == "d") {
				contador = i;
			}
		}
		console.log(
			"la posicion con mas movimientos hasta el punto de arranque es",
			contador
		);
	}
	if (izquierda.length > ariba.length && abajo.length && derecha.length) {
		for (let i = 0; i < Dato.length; i++) {
			if (Dato[i] == "l") {
				contador = i;
			}
		}
		console.log(
			"la posicion con mas movimientos hasta el punto de arranque es",
			contador
		);
	}
};
