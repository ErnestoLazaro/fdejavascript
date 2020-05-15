var miriam = {
    nombre: 'Miriam',
    apellido: 'Rodriguez',
    edad: 25,
    peso: 75
}

console.log(`Àl inicio del año ${miriam.nombre} peso ${miriam.peso}kg`)

const INCREMENTO_PESO = 0.2

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= 365; i++) {
    var random = Math.random()

    if (random < 0.25) {
        aumentarDePeso(miriam)
    } else if (random < 0.5) {
        adelgazar(miriam)
    }
}


console.log(`Al final del año ${miriam.nombre} pesa ${miriam.peso.toFixed(2)}kg`)

