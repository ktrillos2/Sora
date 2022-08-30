/* hacer un programa que inicialice un array de numeros con valores aleatorios, 
y posteriormente ordene los elementos de menor a mayor*/

let NumerosRandom = [];

function random() {
	let cantidad = 100;
	let Aleatorios = 0;
	for (let i = 0; i < cantidad; i++) {
		Aleatorios = Math.floor(Math.random(NumerosRandom[i]) * 100);
		NumerosRandom.push(Aleatorios);
	}
	ordenarnumeros = NumerosRandom.sort((a, b) => {
		return a - b;
	});
}
console.log(random());
console.log(NumerosRandom);
