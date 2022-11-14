function newContent() {
    document.open();
    document.write("<h1>Out with the old, in with the new!</h1>");
    document.close();
  } 

  function addElement() {
    // create a new div element
    const newDiv = document.createElement("div");
    newDiv.className = 'batons'
    // and give it some content
    for (let i = 1; i <= 15; i++) {
        const newChildDiv = document.createElement('div')
        newChildDiv.classList.add('baton')
        newChildDiv.classList.add(i.toString())
        newChildDiv.classList.add('joueur1')
        newDiv.appendChild(newChildDiv)
    }
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  }

addElement()


function nextPlayer(test2, active) {
    if (active === 'j1') {
        console.log("j2 is active")
        for (i = 0; i <= 14; i++) {
            test2[i].classList.remove('joueur1')
            test2[i].classList.add('joueur2')
        }
        return 'j2'
    }else {
        console.log("j1 is active")
        for (i = 0; i <= 14; i++) {
            test2[i].classList.remove('joueur2')
            test2[i].classList.add('joueur1')
        }
        return 'j1'
    }
}

let activePLayer = document.getElementById("text")

let active = 'j1'
activePLayer.innerHTML = "Au tour du " + active;

let nbRetire = 0
let test2 = document.querySelectorAll('.baton')
console.log(test2.length)
//let teste = document.getElementsByClassName('baton '+i);
//console.log(teste[0].classList)
//console.log(teste)

let pass = document.querySelector('.pass')
console.log('pass' + pass)

pass.addEventListener('click', function(){
    nbRetire = 0
    active = nextPlayer(test2,active)
    activePLayer.innerHTML = "Au tour du " + active;
})

let allBatons = []

for (let i = 0; i <= 14; i++){
    allBatons.push(test2[i])
}

let limite = document.querySelectorAll('.baton')

for (let i = 0; i <= 14; i++) {
    test2[i].addEventListener("click", function(){
        console.log('celui retiré : ' + test2[i])
        test2[i].remove()

        limite = document.querySelectorAll('.baton')
        console.log('nb baton : ' + limite.length)
        nbRetire++

        if (limite.length === 0) {
            active = nextPlayer(test2,active)
            console.log(active)
            let winner = document.getElementById("winner")
            winner.innerHTML = "C'est fini " + active + " a gagné"
            activePLayer.innerHTML = ""
            pass.remove()
        }else if (nbRetire === 3) {
            nbRetire = 0
            active = nextPlayer(test2,active)
            activePLayer.innerHTML = "Au tour du " + active;
        }

    })
}
