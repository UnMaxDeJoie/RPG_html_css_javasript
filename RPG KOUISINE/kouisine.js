const canvas = document.querySelector('#fightscreen')
const c = canvas.getContext('2d')
canvas.width = 850
canvas.height = 530

const image = new Image()
image.src = 'fightscreen.jpg'

class sprite{
    constructor({position, velocity, image, frames = { max: 1 }}) {
        this.position = position
        this.image = image
        this.frames = frames
        this.image.onload = () => {
            this.width = this.image.width / this.frames.max
            this.height = this.image.height
        }
    }

    draw(){
        c.drawImage(
            this.image,
            0, 
            0,
            this.image.width / this.frames.max,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max,
            this.image.height
        )
    }
}

const background = new sprite({
    position:{
    x: 0,
    y: 0
    }, 
    image: image,
})

const Tomate = new Image()
Tomate.src = 'image/tomate_pourrie.png'

const Sanji = new Image()
Sanji.src = 'image/SanjiDos.png'

const ennemy = new sprite({
    position:{
        x: 570,
        y: 190
    },
    image: Tomate
})

const combattant = new sprite({
    position:{
        x: 0,
        y: 190
    },
    image: Sanji
})

function animate(){
    window.requestAnimationFrame(animate)
    background.draw()
    ennemy.draw()
    combattant.draw()
}

animate()

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
    if(x<pText3.length){
      document.getElementById("pText3").innerHTML += pText3.charAt(x);
      x++;
      setTimeout(typing_3, 50);
    }
    
}
var z=0,pText4;

function typing_4() {
    if(z<pText4.length){
      document.getElementById("pText4").innerHTML += pText4.charAt(z);
      z++;
      setTimeout(typing_4, 50);
    }
    
}
var w=0,pText5;

function typing_5() {
    if(w<pText5.length){
      document.getElementById("pText5").innerHTML += pText5.charAt(w);
      w++;
      setTimeout(typing_5, 50);
    }
    
}

function changemusique(){
    var musique = document.getElementById("son")
    musique.src = 'testmusique.mp3'
}

function attaque1(){
    Sanji.src = 'image/sanjibadass.png'
    w=0
    document.getElementById("pText5").innerHTML = "Ce n'est pas très efficace. Dommage que ce soit la beauté du joueur qui soit prise en compte"
}
function attaque2(){
    Sanji.src = 'image/sanjicuisine.png'
    w=0
    document.getElementById("pText5").innerHTML = "Oh regarde ! Un couscous volant. La diversion est efficace, Vous en profitez pour taper l'adversaire"

}
function attaque3(){
    Sanji.src = 'image/sanjipetitpas.png'
    w=0
    document.getElementById("pText5").innerHTML = "Un petit pas de danse c'est toujours efficace"

}
function attaque4(){
    Sanji.src = 'image/SanjiDos.png'
    w=0
    document.getElementById("pText5").innerHTML = "Fumer tue, vous prenez la moitié des dégâts fait à l'adversaire"
}

document.getElementById("pText").innerHTML = ""
pText = "Faire le beau" ;
typing()
document.getElementById("pText2").innerHTML = ""
pText2= "Cuisiner" ;
typing_2()
document.getElementById("pText3").innerHTML = ""
pText3 = "Petit pas" ;
typing_3()
document.getElementById("pText4").innerHTML = ""
pText4 = "Fumer" ;
typing_4()
document.getElementById("pText5").innerHTML = ""
pText5 = "Choisissez ce que vous voulez faire" ;
typing_5()