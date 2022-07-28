function imprimirtTabla(base,limite) {
    
    for (let i = 1; i<=limite; i++ ) {
    
        let resultado= base * i;
    
        console.log(base + ' x '+ i +'='+ resultado);
    
    }
    

}

imprimirtTabla(1,4);
imprimirtTabla(2,5);