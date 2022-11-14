class jason {
    constructor () {
        this.name = 'Jason'
        this.hp = 100
    }

}

let Jason = new jason()

class caracteristique {
    constructor (name, probaMort, probaDegat, probaDegatMort) {
        this.name = name
        this.probaMort = probaMort
        this.probaDegat = probaDegat
        this.probaDegatMort = probaDegatMort
    }

    isMort() {
        let random = Math.random(0,1)
        //console.log("le nombre randmo dans isMort " + random)
        return this.probaMort > random
    }

    isDegat() {
        let random = Math.random(0,1)
        return this.probaDegat > random
    }

    isDegatMort() {
        let random = Math.random(0,1)
        return this.probaDegatMort > random
    }
}

class survivant {
    constructor(name,caracteristique) {
        this.name = name
        this. caracteristique = caracteristique
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

let Nerd = new caracteristique('nerd', 0.6, 0.5, 0.3)
let Blonde = new caracteristique('blonde', 0.7, 0.3, 0.5)
let Sportif = new caracteristique('sportif', 0.4, 0.8, 0.4)
let Chanceux = new caracteristique('chanceux', 0.1, 0.7, 0.1)
let Malchanceux = new caracteristique('malchanceux', 0.8, 0.1, 0.8)

let caracteristiqueTab = [Nerd, Blonde, Sportif, Chanceux, Malchanceux]
let nom = ['Emma', 'Liam', 'Olivia', 'Noah', 'Alice', 'William', 'Léa', 'Thomas', 'Sophia', 'Logan', 'Mia', 'Jacob', 'Charlie', 'Nathan', 'Amélia', 'Édouard', 'Florence', 'Léo', 'Charlotte', 'Félix']

let survivant1 = new survivant(' ',' ')
let survivant2 = new survivant(' ',' ')
let survivant3 = new survivant(' ',' ')
let survivant4 = new survivant(' ',' ')
let survivant5 = new survivant(' ',' ')

let survivors = [survivant1, survivant2, survivant3, survivant4, survivant5]

for (let i = 0; i <= 4; i++) {
    let random = getRandomInt(0,19)
    let nomSurvivant = nom[random]
    survivors[i].name = nomSurvivant
    random = getRandomInt(0,4)
    let cara = caracteristiqueTab[random]
    survivors[i].caracteristique = cara
  }

let fin = 0
while (Jason.hp > 0 && survivors.length > 0) {
    let random = getRandomInt(0,survivors.length - 1)
    //console.log(survivors[random].caracteristique.probaMort)
    if (survivors[random].caracteristique.isMort()) {
        console.log("Jason attaque et tue " + survivors[random].name)
        survivors.splice(random, 1);
    }else if (survivors[random].caracteristique.isDegat()) {
        console.log(survivors[random].name + " esquive l'attaque de Jason et lui inflige 10 dégats")
        Jason.hp -= 10
        console.log(Jason.hp)
    }else if (survivors[random].caracteristique.isDegatMort()) {
        console.log(survivors[random].name + " inflige 15 point de degats a jason mais meurt suite a ca")
        Jason.hp -= 15
        console.log(Jason.hp)
    }
    fin += 1
    console.log("fin du tour : " + fin)
    if (fin > 100) {
        Jason.hp = 0
    }
    if (Jason.hp <= 0) {
        console.log('Jason est mort')
    }else if (survivors.length === 0) {
        console.log("Tout les surviants sont morts")
    }
}



