var ernesto = {
    nombre: 'Ernesto',
    apellido: 'Lazaro',
    edad: 35,
}

var miriam = {
    nombre: 'Miriam',
    apellido: 'Martinez',
    edad: 17
}

// function imprimirNombreyEdad (persona)
// {
//     var { nombre } = persona 
//     var { edad } = persona
//     console.log (`Hola me llamo ${nombre} y tengo ${edad} años`)

// }

// imprimirNombreyEdad (ernesto)
// imprimirNombreyEdad (miriam)

const MAYORIA_DE_EDAD = 18;
const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD;

const esMenorDeEdad = persona => !esMayorDeEdad(persona)

const permitirAcceso = persona => {

    if(esMenorDeEdad(persona)) {
        console.log('Acceso denego')
    }else{
        console.log('Acceso Permitido')
    }
}