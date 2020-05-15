var miriam = {
    nombre: 'Miriam',
    apellido: 'Rodriguez',
    edad: 25,
    peso: 75
}

console.log(`Àl inicio del año ${miriam.nombre} peso ${miriam.peso}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = miriam.peso - 3
var dias = 0 

while (miriam.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(miriam)
    }
    if (realizaDeporte()) {
        adelgazar(miriam)
    }
    dias += 1
}



console.log(`pasaron ${dias} días hasta que ${miriam.peso.toFixed(2)} adelgazo 3kg`)

