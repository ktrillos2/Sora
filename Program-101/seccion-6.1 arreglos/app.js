let persona1={

    nombre:'Fernando',
    edad:28
}
let persona2={

    nombre:'Melissa',
    edad:41
}
let persona3={

    nombre:'Camila',
    edad:18
}

let personas=[persona1,persona2,persona3];

console.log(personas)

for (let i=0;i<personas.length;i++) {


    let persona=personas[i]
    console.log(`${persona.nombre} -- ${persona.edad}`)

}