let nota=40;
let notaletra=''

if (nota>=100) {

    notaletra='Error';
} else if (nota>=90) {

    notaletra='A';
} else if (nota>=80) {

    notaletra='B';
} else if (nota>=70) {

    notaletra='C';
} else if (nota>=60) {

    notaletra='D';
} else if (nota<60) {

    notaletra='F';
} 
console.log(nota+' es igual a '+notaletra)