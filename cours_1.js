/* EXO 1 
console.log('EXO 1')
let a = 4;
let b = 5;
let c = 3;

if (a == b) {
    console.log("c'est egale");
}

if (c < b && (a+c != 3)) {
    console.log("ok");
}else {
    console.log("raté");
}

/* EXO 2 
console.log('EXO 2')
switch(a) {
    case b :
        console.log('égal a b')
        break
    case c :
        console.log('egal a c')
        break
    default :
        console.log('egale a rien')
}

/* EXO 3 
console.log('EXO 3')
for(i=0; i < a; i++){
    console.log('oklm')
}

/* EXO 4 
console.log('EXO 4')

let d = 3
while(d < 9) {
    d ++
    if (d == 8) {
        break
    }
    if (d == 7) {
        continue
    }
    console.log(d)
}

 EXO 5 
console.log('EXO 5')
let e = "Jean"
let f = "Paul"
let result = isSame(e,f)
function isSame(name1,name2) {
    return name1 == name2
}
console.log(result)

 EXO 6 
console.log('EXO 6')

let tab = []
tab.push('Vincent', 'Paul', 'Arthur')

for (i = 0; i < tab.length; i++) {
    tab[i] += ' va à la peche'
    console.log(tab[i])
}
*/

/* EXO 7 */
console.log('EXO 7')
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
class pokemon {
    constructor (name, attack, defense, hp, speed, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.speed = speed
        this.luck = luck
    }
    
    isLucky() {
        let random = Math.random(0,1)
        return this.luck > random
    }

    attackPokemon(defenseur) {
        let degats = this.attack - (defenseur.defense / 2)
        defenseur.hp -= degats
        return degats
    }

}
/* constructor (name, attack, defense, hp, speed, luck) */
const pokemon1 = new pokemon ('pikachu', 55, 40, 35, 90, 0.7)
const pokemon2 = new pokemon ('reptincelle', 64, 58, 58, 80, 0.7)
const pokemon3 = new pokemon ('luxio', 85, 49, 60, 60, 0.7)
const pokemon4 = new pokemon ('mustébouée', 65, 35, 55, 85, 0.7)
const pokemon5 = new pokemon ('étourvol', 75, 50, 55, 80, 0.7)
const pokemon6 = new pokemon ('racaillou', 80, 100, 40, 20, 0.7)

let myTeam = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5]

const pokemon_encounter1 = new pokemon('chenipan',30, 35, 45, 45, 0.5)
const pokemon_encounter2 = new pokemon('roucool',45, 40, 40, 56, 0.5)
const pokemon_encounter3 = new pokemon('ratata', 56, 35, 30, 72, 0.5)

let encounter = [pokemon_encounter1, pokemon_encounter2, pokemon_encounter3]

let score = 0
let tour = 0
let random = 1
let limit = 1

while (myTeam.length > 0) {
    random = getRandomInt(0,2)
    console.log('You encounter ' + encounter[random].name)

    while (myTeam[0].hp > 0) {
        limit++
        if (myTeam[0].isLucky()) {
            console.log("PDV de " + encounter[random].name + " " + encounter[random].hp)
            let degats = myTeam[0].attackPokemon(encounter[random])
            console.log(myTeam[0].name + " inflige " + degats + " dégats à " + encounter[random].name)
            console.log("PDV de " + encounter[random].name + " " + encounter[random].hp)
            if (encounter[random].hp <= 0) {
                score++
                console.log(encounter[random].name + " n'a plus de points de vie")
                break
            }
        }else {
            console.log(myTeam[0].name + ' a raté son attaque')
        }
        if (encounter[random].isLucky()) {
            console.log("PDV de " + myTeam[0].name + " " + myTeam[0].hp)
            let degats = encounter[random].attackPokemon(myTeam[0])
            console.log(encounter[random].name + " inflige " + degats + " dégats à " + myTeam[0].name)
            console.log("PDV de " + myTeam[0].name+ " " + myTeam[0].hp)
            if (myTeam[0].hp <= 0) {
                console.log(myTeam[0].name + " n'a plus de points de vie")
                myTeam.shift()
                break
            }
        }else {
            console.log(encounter[random].name + " a raté son attaque")
        }

        if (limit == 100) {
            break
        }
    }


}
console.log(score)

    /*
    for (i = 0; i < myTeam.length; i++) {
        console.log("valeur taille equipe : " + myTeam.length)
        console.log("valeur i : " + i)
        if (myTeam[i].isLucky()) {
            console.log("PDV de " + encounter[random].name + " " + encounter[random].hp)
            let degats = myTeam[i].attackPokemon(encounter[random])
            console.log(myTeam[i].name + " inflige " + degats + " dégats à " + encounter[random].name)
            console.log("PDV de " + encounter[random].name + " " + encounter[random].hp)
            if (encounter[random].hp <= 0) {
                console.log(encounter[random].name + " n'a plus de points de vie")
                score++
                break
            }
        }else {
            console.log(myTeam[i].name + ' a raté son attaque')
        }
        if (encounter[random].isLucky()) {
            console.log("PDV de " + myTeam[i].name + " " + myTeam[i].hp)
            let degats = encounter[random].attackPokemon(myTeam[i])
            console.log(encounter[random].name + " inflige " + degats + " dégats à " + myTeam[i].name)
            console.log("PDV de " + myTeam[i].name+ " " + myTeam[i].hp)
            if (myTeam[i].hp <= 0) {
                console.log(myTeam[i].name + " n'a plus de points de vie")
                myTeam.shift()
                break
            }
        }else {
            console.log(encounter[random].name + " a raté son attaque")
        }
    }*/

    
/*
if (pokemon1.speed > pokemon2.speed){
    pokemonFirst = pokemon1
    pokemonSecond = pokemon2
}else {
    pokemonFirst = pokemon2
    pokemonSecond = pokemon1
}
while (pokemon1.hp > 0 && pokemon2.hp > 0) {
    tour++
    console.log(tour)
    if (pokemonFirst.isLucky()) {
        console.log("PDV de " + pokemonSecond.name+ " " + pokemonSecond.hp)
        let degats = pokemonFirst.attackPokemon(pokemonSecond)
        console.log(pokemonFirst.name + " inflige " + degats + " dégats à " + pokemonSecond.name)
        console.log("PDV de " + pokemonSecond.name + " " + pokemonSecond.hp)
        if (pokemonSecond.hp <= 0) {
            console.log(pokemonSecond.name + " n'a plus de points de vie")
            break
        }
    }else {
        console.log(pokemonFirst.name + ' a raté son attaque')
    }
    if (pokemonSecond.isLucky()) {
        console.log("PDV de " + pokemonFirst.name + " " + pokemonFirst.hp)
        let degats = pokemonSecond.attackPokemon(pokemonFirst)
        console.log(pokemonSecond.name + " inflige " + degats + " dégats à " + pokemonFirst.name)
        console.log("PDV de " + pokemonFirst.name + pokemonFirst.hp)
        if (pokemonFirst.hp <= 0) {
            console.log(pokemonFirst.name + " n'a plus de points de vie")
            break
        }
    }else {
        console.log(pokemonSecond.name + " a raté son attaque")
    }
}*/