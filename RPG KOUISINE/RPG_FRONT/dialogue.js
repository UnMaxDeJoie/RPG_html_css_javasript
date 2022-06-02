const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
var no_move=false
canvas.width = 1280
canvas.height = 720

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = 'map.png'

const playerImage = new Image()
playerImage.src = 'sanji_ALLcharacter.png'

class sprite{
    constructor({position,velocity}) {
        this.position = position 
        this.image = image
    }

    draw(){
        c.drawImage(this.image,this.position.x, this.position.y)
    }
}

const background = new sprite({
    position:{
    x: -630,
    y: -1400
    }, 
    image: image
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

function animate(){
    window.requestAnimationFrame(animate)
    background.draw()
    c.drawImage(
        playerImage,
        0, 
        0,
        playerImage.width /4,
        playerImage.height,
        canvas.width / 2 - playerImage.width / 2,
        canvas.height / 2 - playerImage.height / 2,
        playerImage.width / 2,
        playerImage.height * 2
    )


    if(keys.z.pressed && lastKey === 'z' && no_move==false ) background.position.y += 3
    else if(keys.q.pressed  && lastKey === 'q' && no_move==false) background.position.x += 3
    else if(keys.s.pressed  && lastKey === 's' && no_move==false) background.position.y -= 3
    else if(keys.d.pressed  && lastKey === 'd' && no_move==false) background.position.x -= 3
}
animate()
let lastKey = ''
window.addEventListener('keydown',(e)=> {
    console.log(e.key)
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
    console.log(keys)
})

window.addEventListener('keyup',(e)=> {
    console.log(e.key)
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
    console.log(keys)
})


// dialogue début
var textCompteur_debut = 1;
window.addEventListener('keydown',(e) =>{
    switch (e.key){
        case ' ':
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


// dialogue début
var textCompteur_debut = 1;
window.addEventListener('keydown',(e) =>{
    switch (e.key){
        case 't':
            if (textCompteur_debut == 1) {
                i=0
                pText = "Vous incarnerez le rôle d'un cuisinier dont son but est de trouver la recette divine :" ;
                document.getElementById("pText").innerHTML = ""
                no_move=true
                textCompteur_debut ++
            }else if (textCompteur_debut == 2) {
                i=0
                document.getElementById("pText").innerHTML = ""
                pText = "la pizza." ;
                textCompteur_debut ++
                no_move=true

            }else {
                i=0
                document.getElementById("pText").innerHTML = ""
                pText    = "Rejoignez-le dans son aventure pour mettre fin à la famine dans le monde." ;
                textCompteur_debut = 1
                no_move=true

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
                    document.getElementById('pText').innerHTML = "Je m'appelle Soma, et je suis le gardien du labyrinthe de l'Académie Tootsuki" ;
                    textCompteur_pnj_1 ++
                    no_move=true
                    }else if (textCompteur_pnj_1 == 2) {
                        document.getElementById('pText').innerHTML = "Pour obtenir une pâte à pizza, un des ingrédients essentiels de la recette divine," ;
                        textCompteur_pnj_1 ++
                    }else if (textCompteur_pnj_1 == 3) {
                        document.getElementById('pText').innerHTML = "vous devrez vous rendre dans l'Académie Tootsuki et y trouver la clé qui se cache quelque part dans ce labyrinthe..." ;
                        textCompteur_pnj_1 ++
                    }else {
                        document.getElementById('pText').innerHTML = "Bonne chance" ;
                        textCompteur_pnj_1= 1
                        textCompteur_pnj_1_1 ++
                        no_move=false
                    }
            }else if (textCompteur_pnj_1_1 < 5) {
                if (textCompteur_pnj_1 == 1) {
                    document.getElementById('pText').innerHTML = "Vous devez vous rendre dans le labyrinthe de l'Académie Tootsuki" ;
                    textCompteur_pnj_1 ++
                    no_move=true
                    }else {
                        document.getElementById('pText').innerHTML = " pour récupérer la pâte à pizza ainsi que la clé secrète." ;
                        textCompteur_pnj_1 = 1
                        textCompteur_pnj_1_1 ++
                        no_move=false
                    }
            }else {
                if (textCompteur_pnj_1 == 1) {
                    document.getElementById('pText').innerHTML = "C'est à l'Académie Tootsuki que vous trouverez ce que vous cherchez." ;
                    textCompteur_pnj_1 = 1
                    no_move=false
                }
            }
        }
})

// dialogue pnj 2
var textCompteur_pnj_2= 1;
var textCompteur_pnj_2_1 = 1;
window.addEventListener('keydown',(e) =>{
    switch (e.key){
        case ' ':
            if (textCompteur_pnj_2_1 == 1) {
                if (textCompteur_pnj_2 == 1) {
                    document.getElementById('pText').innerHTML = "Je suis Rémy, le grand maître des énigmes." ;
                    textCompteur_pnj_2 ++
                    no_move = true
                }else if (textCompteur_pnj_2 == 2) {
                    document.getElementById('pText').innerHTML = "De manière à obtenir du fromage, un des ingrédients absolus de la recette divine vous devrez résoudre un certain nombre d'énigmes." ;
                    textCompteur_pnj_2 ++
                }else if (textCompteur_pnj_2 == 3) {
                    document.getElementById('pText').innerHTML = "Si vous ne parvenez pas à avoir au moins 2 bonnes réponses, revenez lorsque vous serez plus aptes. A vos cerveaux!" ;
                    textCompteur_pnj_2 ++
                }else if (textCompteur_pnj_2 == 4) {
                    document.getElementById('pText').innerHTML = "Enigme 1 :" ;
                    textCompteur_pnj_2 ++
                }else if (textCompteur_pnj_2 == 5) {
                    document.getElementById('pText').innerHTML = "Enigme 2 :" ;
                    textCompteur_pnj_2 ++
                }else if (textCompteur_pnj_2 == 6 ) {
                    document.getElementById('pText').innerHTML = "Enigme 3 :" ;
                    textCompteur_pnj_2 ++
                } else {
                    document.getElementById('pText').innerHTML = "Félicitations, vous avez obtenu du fromage!!" ;
                    textCompteur_pnj_2 = 1
                    textCompteur_pnj_2_1 ++
                    no_move=false
                }
            }else if (textCompteur_pnj_2_1 < 5) {
                if (textCompteur_pnj_2 == 1) {
                    document.getElementById('pText').innerHTML = "Vous devez avoir au moins 2 bonnes réponses pour récupérer du fromage. Recommencer?" ;
                    textCompteur_pnj_2 = 1
                    no_move=true
                }
            }
    } 
})

// dialogue pnj 3
var textCompteur_pnj_3 = 1;
var textCompteur_pnj_3_1 = 1;
window.addEventListener('keydown',(e) =>{
    switch (e.key){
        case ' ':
            if (textCompteur_pnj_3_1 == 1) {
                if (textCompteur_pnj_3 == 1) {
                    document.getElementById('pText').innerHTML = "Je m'appelle Toriko, et je suis le sage de la grotte." ;
                    textCompteur_pnj_3 ++
                    no_move = true
                }else if (textCompteur_pnj_3 == 2) {
                    document.getElementById('pText').innerHTML = "Pour obtenir la sauce tomate, un des ingrédients majeurs de la recette divine" ;
                    textCompteur_pnj_3 ++
                }else if (textCompteur_pnj_3 == 3) {
                    document.getElementById('pText').innerHTML = "vous devrez abattre le monstre, le grand et l’invincible boss" ;
                    textCompteur_pnj_3 ++
                }else {
                    document.getElementById('pText').innerHTML = "la Tomate Pourrie qui réside au fin fond de cette grotte" ;
                    textCompteur_pnj_3 = 1
                    textCompteur_pnj_3_1 ++
                    no_move = false
                }
            }else if (textCompteur_pnj_3_1 < 5) {
                if (textCompteur_pnj_3 == 1) {
                    document.getElementById('pText').innerHTML = "Vous devez battre la Tomate Pourrie au fond de la grotte." ;
                    textCompteur_pnj_3 = 1
                    no_move = false
                }
            }else {
                if (textCompteur_pnj_3 == 1) {
                    document.getElementById('pText').innerHTML = "La Tomate Pourrie est au fond de la grotte." ;
                    textCompteur_pnj_3 = 1
                    no_move = false
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
            document.getElementById('pText').innerHTML = "Vous avez récupérer tous les ingrédients de la recette divine. Vous avez 2 choix :" ;
            textCompteur_fin ++
            no_move = true
            }else if (textCompteur_fin == 2) {
                document.getElementById('pText').innerHTML = "Vendre vos pizzas gratuitement" ;
                document.getElementById('pText2').innerHTML = "Vendre vos pizzas hors de prix" ;
                textCompteur_fin ++
            }else {
                document.getElementById('pText').innerHTML = "Bonus : Rajouter des ananas sur vos pizzas ?" ;
                document.getElementById('pText2').innerHTML = "" ;
                textCompteur_fin = 1
                no_move = false
            }
    } 
})
