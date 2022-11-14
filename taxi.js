class personnage {
    constructor (name,hp) {
        this.name = name
        this.hp = hp
    }

}

const perso = new personnage('pierrick', 10)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

let radio = ['Anissa - Wejdene', 'BB.part3 - Green Montana', 'Dit pas ca! - Couli B', 'Miss you - Oliver Tree', 'Plug walk - Rich Kid']
let nbChangement = 30

for (let i = 1; i <= nbChangement; i++) {
    let random = getRandomInt(0,4)
    //console.log("Nombre random : " + random)
    console.log('Radio song : ' + radio[random])
    console.log('Feux restant : ' + (30 - i))
    if (radio[random] === 'Anissa - Wejdene') {
        perso.hp--
        console.log("PDV " + perso.hp)
        if (perso.hp === 0) {
            console.log(perso.name + " n'a plus de point de santé mentale, il explose")
            break
        }
    }

  }
console.log(perso.name + " est arrivé(e) à destination, il lui aurra fallu " + nbChangement + " changement de musique.")