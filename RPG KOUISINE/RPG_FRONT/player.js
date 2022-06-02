const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
console.log(change_map_data)
var no_move=false
canvas.width = 1280
canvas.height = 720

const collisionsMap = []
for(let i = 0; i < collisions.length; i+=30){
    collisionsMap.push(collisions.slice(i, 30 + i))
}

const change_map_x = []
for(let i = 0; i < change_map_data.length; i+=30){
    change_map_x.push(change_map_data.slice(i, 30 + i))
}

console.log(change_map_x)

class Boundary {
    static widht = 96
    static height = 96
    constructor({position}) {
        this.position = position
        this.width = 96
        this.height = 96
    }
    draw() {
        c.fillStyle = 'red (255, 0, 0, 0.5)'
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const offset = {
    x: 100,
    y: -200
}

const boundaries = []
collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 657)
            boundaries.push(
                new Boundary({
                    position: {
                        x: j * Boundary.widht + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            )
    })
})

const change_map = []
change_map_x.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 191)
            change_map.push(
                new Boundary({
                    position: {
                        x: j * Boundary.widht + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            )
    })
})
console.log(change_map);

const image = new Image()
image.src = 'ileFINAL.png'

const foregroundImage = new Image()
foregroundImage.src = 'foregroundObjects.png'

const playerFace = new Image()
playerFace.src = 'Sanji_Face.png'

const playerBack = new Image()
playerBack.src = 'Sanji_Dos.png'

const playerLeft = new Image()
playerLeft.src = 'Sanji_Gauche.png'

const playerRight = new Image()
playerRight.src = 'Sanji_Droite.png'


class sprite{
    constructor({position, velocity, image, frames = { max: 1 }}) {
        this.position = position
        this.image = image
        this.frames = {...frames, val: 0, elapsed: 0}
        this.image.onload = () => {
            this.width = this.image.width / this.frames.max
            this.height = this.image.height
        }
        this.moving = false
    }

    draw(){
        c.drawImage(
            this.image,
            this.frames.val*this.width, 
            0,
            this.image.width / this.frames.max,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max,
            this.image.height
        )

        if (!this.moving) return
            
        if (this.frames.max>1){
                this.frames.elapsed++
            }
        if (this.frames.elapsed % 15 === 0){
            if (this.frames.val<this.frames.max-1) this.frames.val++
            else this.frames.val = 0
            }
    }
}

const player = new sprite({
    position: {
        x: canvas.width / 2 - 1250 / 4 / 2,
        y: canvas.height / 2 - -110/ 2 
    },
    image: playerFace,
    frames: {
        max:3
    }
})
console.log(player)

const background = new sprite({
    position:{
    x: offset.x,
    y: offset.y
    }, 
    image: image
})

const foreground = new sprite({
    position:{
    x: offset.x,
    y: offset.y
    }, 
    image: foregroundImage
})

const keys = {
    z: {
        pressed: false
    },
    q: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

const movables = [background, ...boundaries, foreground, ...change_map]

function rectangularCollision({rectangle1, rectangle2}) {
    return (rectangle1.position.x + rectangle1.width >= rectangle2.position.x && 
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y)
}
function animate(){
    window.requestAnimationFrame(animate)
    background.draw()
    boundaries.forEach((boundary) => {
        boundary.draw()
    })
    change_map.forEach((change_maps) => {
        change_maps.draw()
    })

    player.draw()
    foreground.draw()

    let moving = true
    player.moving = false
    if(keys.z.pressed && lastKey === 'z' && no_move==false ) {
        player.moving = true
        player.image = playerFace
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary, position : {
                        x: boundary.position.x,
                        y: boundary.position.y + 3
                    }}
                }) 
            ) {
                moving = false
                break
            }
        }

        for (let i = 0; i < change_map.length; i++) {
            player.image = playerBack
            const change_maps = change_map[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: change_maps
                }) 
            ) {
                console.log('change map')
                break
            }
        }
        
        
        if (moving)
            movables.forEach(movables => {
                movables.position.y += 3
            })
    } else if(keys.q.pressed  && lastKey === 'q' && no_move==false ) {
        for (let i = 0; i < boundaries.length; i++) {
            player.moving = true
            player.image = playerLeft
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary, position : {
                        x: boundary.position.x + 3,
                        y: boundary.position.y
                    }}
                }) 
            ) {
                moving = false
                break
            }
        }
        if (moving)
            movables.forEach(movables => {
                movables.position.x += 3
            })
    } else if(keys.s.pressed  && lastKey === 's' && no_move==false) {
        for (let i = 0; i < boundaries.length; i++) {
            player.moving = true
            player.image = playerFace
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary, position : {
                        x: boundary.position.x,
                        y: boundary.position.y - 3
                    }}
                }) 
            ) {
                moving = false
                break
            }
        }
        if (moving)
            movables.forEach(movables => {
                movables.position.y -= 3
            })
    } else if(keys.d.pressed  && lastKey === 'd' && no_move==false) {
        for (let i = 0; i < boundaries.length; i++) {
            player.moving = true
            player.image = playerRight
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary, position : {
                        x: boundary.position.x - 3 ,
                        y: boundary.position.y
                    }}
                }) 
            ) {
                moving = false
                break
            }
        }
        if (moving)
            movables.forEach(movables => {
                movables.position.x -= 3
            })
    }
}
animate()
let lastKey = ''
window.addEventListener('keydown',(e)=> {
    switch(e.key){
        case 'z':
            keys.z.pressed = true
            lastKey = 'z'
            break
        case 'q':
            keys.q.pressed = true
            lastKey = 'q'
            break   
        case 's':
            keys.s.pressed = true
            lastKey = 's'
            break 
        case 'd':
        keys.d.pressed = true
        lastKey = 'd'
        break 
    }
})

window.addEventListener('keyup',(e)=> {
    switch(e.key){
        case 'z':
            keys.z.pressed = false
            break
        case 'q':
            keys.q.pressed = false
            break   
        case 's':
            keys.s.pressed = false
            break 
        case 'd':
        keys.d.pressed = false
        break 
    }
})
var i=0,pText;
function typing() {
    if(i<pText.length){
      document.getElementById("pText").innerHTML += pText.charAt(i);
      i++;
      setTimeout(typing, 50);
    }
    
}
var y=0,pText2;

function typing_2() {
    if(y<pText2.length){
      document.getElementById("pText2").innerHTML += pText2.charAt(y);
      y++;
      setTimeout(typing_2, 50);
    }
    
}
var x=0,pText3;

function typing_3() {
    if(x<pText4.length){
      document.getElementById("pText3").innerHTML += pText3.charAt(y);
      x++;
      setTimeout(typing_3, 50);
    }
    
}
var z=0,pText4;

function typing_4() {
    if(z<pText4.length){
      document.getElementById("pText4").innerHTML += pText4.charAt(y);
      z++;
      setTimeout(typing_4, 50);
    }
    
}
// dialogue début
var textCompteur_debut = 1;
window.addEventListener('keydown',(e) =>{
    switch (e.key){
        case 'f':
            if (textCompteur_debut == 1) {
                i=0
                document.getElementById("pText").innerHTML = ""
                pText= "Vous incarnerez le rôle d'un cuisinier dont son but est de trouver la recette divine :" ;
                typing();
                textCompteur_debut ++
            }else if (textCompteur_debut == 2) {
                i=0
                document.getElementById("pText").innerHTML = ""
                pText= "la pizza." ;
                typing();
                textCompteur_debut ++
            }else {
                i=0
                document.getElementById("pText").innerHTML = ""
                pText= "Rejoignez-le dans son aventure pour mettre fin à la famine dans le monde." ;
                typing();
                textCompteur_debut = 1
            }
    } 
})
i=0
document.getElementById("pText").innerHTML = ""

// dialogue début
var textCompteur_debut = 1;
window.addEventListener('keydown',(e) =>{
    switch (e.key){
        case 'f':
            if (textCompteur_debut == 1) {
                i=0
                document.getElementById("pText").innerHTML = ""
                pText = "Vous incarnerez le rôle d'un cuisinier dont son but est de trouver la recette divine :" ;
                textCompteur_debut ++
                typing()
            }else if (textCompteur_debut == 2) {
                i=0
                document.getElementById("pText").innerHTML = ""
                pText = "la pizza." ;
                textCompteur_debut ++
                typing()
            }else {
                i=0
                document.getElementById("pText").innerHTML = ""
                pText    = "Rejoignez-le dans son aventure pour mettre fin à la famine dans le monde." ;
                textCompteur_debut = 1
                typing()
            }
    } 
})

// dialogue pnj 1
var textCompteur_pnj_1 = 1;
var textCompteur_pnj_1_1 = 1;
window.addEventListener('keydown',(e) => {
    switch (e.key){
        case 'e':
            if (textCompteur_pnj_1_1 == 1) {
                if (textCompteur_pnj_1 == 1) {
                        i=0
                        document.getElementById("pText").innerHTML = ""
                        pText = "Je m'appelle Soma, et je suis le gardien du labyrinthe de l'Académie Tootsuki" ;
                        textCompteur_pnj_1 ++
                        no_move=true
                        typing()
                    }else if (textCompteur_pnj_1 == 2) {
                        i=0
                        document.getElementById("pText").innerHTML = ""
                        pText = "Pour obtenir une pâte à pizza, un des ingrédients essentiels de la recette divine," ;
                        textCompteur_pnj_1 ++
                        typing()
                    }else if (textCompteur_pnj_1 == 3) {
                        i=0
                        document.getElementById("pText").innerHTML = ""
                        pText = "vous devrez vous rendre dans l'Académie Tootsuki et y trouver la clé qui se cache quelque part dans ce labyrinthe..." ;
                        textCompteur_pnj_1 ++
                        typing()
                    }else {
                        i=0
                        document.getElementById("pText").innerHTML = ""
                        pText = "Bonne chance" ;
                        textCompteur_pnj_1= 1
                        textCompteur_pnj_1_1 ++
                        no_move=false
                        typing()
                    }
            }else if (textCompteur_pnj_1_1 < 5) {
                if (textCompteur_pnj_1 == 1) {
                        i=0
                        document.getElementById("pText").innerHTML = ""
                        pText = "Vous devez vous rendre dans le labyrinthe de l'Académie Tootsuki" ;
                        textCompteur_pnj_1 ++
                        no_move=true
                        typing()
                    }else {
                        i=0
                        document.getElementById("pText").innerHTML = ""
                        pText= " pour récupérer la pâte à pizza ainsi que la clé secrète." ;
                        textCompteur_pnj_1 = 1
                        textCompteur_pnj_1_1 ++
                        no_move=false
                        typing()
                    }
            }else {
                if (textCompteur_pnj_1 == 1) {
                    i=0
                    document.getElementById("pText").innerHTML = ""
                    pText = "C'est à l'Académie Tootsuki que vous trouverez ce que vous cherchez." ;
                    textCompteur_pnj_1 = 1
                    no_move=false
                    typing()
                }
            }
        }
})

// dialogue pnj 2
var textCompteur_pnj_2= 1;
var textCompteur_pnj_2_1 = 1;
window.addEventListener('keydown',(e) =>{
    switch (e.key){
        case 'r':
            if (textCompteur_pnj_2_1 == 1) {
                if (textCompteur_pnj_2 == 1) {
                    i=0
                    document.getElementById("pText").innerHTML = ""
                    pText= "Je suis Rémy, le grand maître des énigmes." ;
                    textCompteur_pnj_2 ++
                    typing()
                }else if (textCompteur_pnj_2 == 2) {
                    i=0
                    document.getElementById("pText").innerHTML = ""
                    pText= "De manière à obtenir du fromage, un des ingrédients absolus de la recette divine vous devrez résoudre un certain nombre d'énigmes." ;
                    textCompteur_pnj_2 ++
                    no_move = true
                    typing()
                }else if (textCompteur_pnj_2 == 3) {
                    i=0
                    document.getElementById("pText").innerHTML = ""
                    pText = "Si vous ne parvenez pas à avoir au moins 2 bonnes réponses, revenez lorsque vous serez plus aptes. A vos cerveaux!" ;
                    textCompteur_pnj_2 ++
                    typing()
                }else if (textCompteur_pnj_2 == 4) {
                    i=0
                    document.getElementById("pText").innerHTML = ""
                    pText= "Enigme 1 :" ;
                    textCompteur_pnj_2 ++
                    typing()
                }else if (textCompteur_pnj_2 == 5) {
                    i=0
                    document.getElementById("pText").innerHTML = ""
                    pText = "Enigme 2 :" ;
                    textCompteur_pnj_2 ++
                    typing()
                }else if (textCompteur_pnj_2 == 6 ) {
                    i=0
                    document.getElementById("pText").innerHTML = ""
                    pText = "Enigme 3 :" ;
                    textCompteur_pnj_2 ++
                    typing()
                } else {
                    i=0
                    document.getElementById("pText").innerHTML = ""
                    pText= "Félicitations, vous avez obtenu du fromage!!" ;
                    textCompteur_pnj_2 = 1
                    textCompteur_pnj_2_1 ++
                    no_move=false
                    typing()
                }
            }else if (textCompteur_pnj_2_1 < 5) {
                if (textCompteur_pnj_2 == 1) {
                    i=0
                    document.getElementById("pText").innerHTML = ""
                    pText= "Vous devez avoir au moins 2 bonnes réponses pour récupérer du fromage. Recommencer?" ;
                    textCompteur_pnj_2 = 1
                    no_move=true
                    typing()
                }
            }
    } 
})

// dialogue pnj 3
var textCompteur_pnj_3 = 1;
var textCompteur_pnj_3_1 = 1;
window.addEventListener('keydown',(e) =>{
    switch (e.key){
        case 'a':
            if (textCompteur_pnj_3_1 == 1) {
                if (textCompteur_pnj_3 == 1) {
                    i=0
                    document.getElementById("pText").innerHTML = ""
                    pText = "Je m'appelle Toriko, et je suis le sage de la grotte." ;
                    textCompteur_pnj_3 ++
                    no_move = true
                    typing()
                }else if (textCompteur_pnj_3 == 2) {
                    i=0
                    document.getElementById("pText").innerHTML = ""
                    pText = "Pour obtenir la sauce tomate, un des ingrédients majeurs de la recette divine" ;
                    textCompteur_pnj_3 ++
                    typing()
                }else if (textCompteur_pnj_3 == 3) {
                    i=0
                    document.getElementById("pText").innerHTML = ""
                    pText = "vous devrez abattre le monstre, le grand et l’invincible boss" ;
                    textCompteur_pnj_3 ++
                    typing()
                }else {
                    i=0
                    document.getElementById("pText").innerHTML = ""
                    pText = "la Tomate Pourrie qui réside au fin fond de cette grotte" ;
                    textCompteur_pnj_3 = 1
                    textCompteur_pnj_3_1 ++
                    no_move = false
                    typing()
                }
            }else if (textCompteur_pnj_3_1 < 5) {
                if (textCompteur_pnj_3 == 1) {
                    i=0
                    document.getElementById("pText").innerHTML = ""
                    pText = "Vous devez battre la Tomate Pourrie au fond de la grotte." ;
                    textCompteur_pnj_3 = 1
                    no_move = false
                    typing()
                }
            }else {
                if (textCompteur_pnj_3 == 1) {
                    i=0
                    document.getElementById("pText").innerHTML = ""
                    pText = "La Tomate Pourrie est au fond de la grotte." ;
                    textCompteur_pnj_3 = 1
                    no_move = false
                    typing()
                }
            }
        
    } 
})


// dialogue fin
var textCompteur_fin = 1;
window.addEventListener('keydown',(e) =>{
    switch (e.key){
        case ' ':
            if (textCompteur_fin == 1) {
                i=0
                document.getElementById("pText").innerHTML = ""
                pText = "Vous avez récupérer tous les ingrédients de la recette divine. Vous avez 2 choix :" ;
                textCompteur_fin ++
                no_move = true
                typing()
            }else {
                i=0
                document.getElementById("pText").innerHTML = ""
                pText= "Vendre vos pizzas gratuitement" ;
                y=0
                document.getElementById("pText2").innerHTML = ""
                pText2 = "Vendre vos pizzas hors de prix" ;
                textCompteur_fin ++
                x=0

                typing()
                typing_2()
            }
    } 
})

var pate=document.getElementById("pate");
window.addEventListener('keydown',(e) =>{
    switch (e.key){
        case 'c':
            pate.src ='image/icons8-pizza-100.png'
    } 
})

function choice(){
    if (textCompteur_fin == 3) {
        i=0
        document.getElementById("pText").innerHTML = ""
        pText = "Bonus : Rajouter des ananas sur vos pizzas ?" ;
        y=0
        document.getElementById("pText2").innerHTML = ""
        pText2 = "" ;
        textCompteur_fin = 1
        no_move = false
        typing()
        typing_2()
    }
}

function choice2(){
    if (textCompteur_fin == 3) {
        i=0
        document.getElementById("pText").innerHTML = ""
        pText = "Bonus : Rajouter des ananas sur vos pizzas ?" ;
        y=0
        document.getElementById("pText2").innerHTML = ""
        pText2 = "" ;
        no_move = false
        typing()
        typing_2()
    }
}

function choice3(){
    if (textCompteur_fin == 3) {
        y=0
        document.getElementById("pText3").innerHTML = ""
        typing_3()
    }
}
function choice4(){
    if (textCompteur_fin == 3) {
        x=0
        document.getElementById("pText4").innerHTML = ""
        typing_4()
    }
}