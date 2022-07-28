let nu = 0
let numeros = []
function generarNumeros() {


    while (nu < 1000) {
        nu++,
            numeros.push(nu)

    }
    console.log(numeros);
    return 'numeros generados'

}
function multiplos4() {

    for (let i = 0; i > numeros.length; i++) {

        if (numeros[i] % 4 == 0) {

            console.log(numeros[i])

        }

    }
}