


class Carro {

    constructor(marca1,tipo1,puertas){

        this.marca=marca1;
        this.tipo=tipo1;
        this.puertas=puertas;

        this.creadoEn='Hoy';
        this.encendido=false;
        this.gasolina=100;
    }

    encenderCarro(){

        if (this.encendido) {

            console.error('El carro ya esta prendido')
        } else {

            this.encendido=true
            console.log('el carro esta encencido')
        }

        return this;
    }

    realizarViaje(consumo ) {
        
        this.gasolina=this.gasolina-consumo
        if (this.encendido===false){

            return 'El Carro No esta Encendido'
        }
        else if (this.gasolina<0) {

            return 'No Hay Mas gasolina'

        } else if (this.gasolina>100) {

            return 'No Se Puede Realizar'

        }

        return 'le queda '+ this.gasolina

    }
}

let carro= new Carro ('mazda','sedan',4)

console.log(carro)