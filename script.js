var ctx;
var fondoMusical= document.getElementById("fondoMusical");
var sonidoMoneda= document.getElementById("sonidoMoneda");
var textoPuntos = document.getElementById("puntos");
var puntos = 0;

var fondo = {
	url: "fondo.jpg",
	imagen: null
};



var sprite1 = {
	url:"sprite1.png",
	x: 100,
	y: 100,
	image: null
};

var objetivo = {
	url:"moneda.png",
	x: 400,
	y: 300,
	image: null
}

var teclas = {
	UP:38,
	DOWN:40,
	LEFT:37,
	RIGTH:39
};

function dibujarObjetivo(){
  ctx.drawImage(objetivo.imagen,objetivo.x,objetivo.y);
}
function dibujarSprite1(){
	dibujarFondo();
  ctx.drawImage(sprite1.imagen,sprite1.x,sprite1.y);
}

function dibujarFondo(){
	ctx.drawImage(fondo.imagen, 0,0);
}


function dibujar(){
    textoPuntos.innerHTML = "Puntos:" + puntos;
	dibujarFondo();
	dibujarSprite1();
	dibujarObjetivo();
    
    
}

function inicio(){
 var canvas = document.getElementById("lienzo");
 ctx = canvas.getContext("2d");

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
/*fondo.imagen.onload = dibujarFondo;*/


sprite1.imagen = new Image();
sprite1.imagen.src = sprite1.url;
/*fondo.imagen.onload = dibujarSprite1;*/

objetivo.imagen = new Image();
objetivo.imagen.src = objetivo.url;
/*fondo.imagen.onload = dibujarSprite1;*/

sprite1.imagen.onload = dibujar;

document.addEventListener("keydown", teclado);

}


window.onload = function(){
  inicio();	
};


function teclado(dato){

	fondoMusical.play();

     if (dato.keyCode== teclas.UP) {
     	sprite1.imagen.src = "sprite2.png";
     	sprite1.y = sprite1.y -10;
     	 dibujar();
    }
    if (dato.keyCode == teclas.DOWN) {
    	sprite1.imagen.src = "sprite1.png";
     	    	sprite1.y = sprite1.y +10;
     	    	 dibujar();
    }
    if (dato.keyCode == teclas.LEFT) {
    	sprite1.imagen.src = "izquierda.png";
     	    	sprite1.x = sprite1.x -10;
     	    	dibujar();
    }
    if (dato.keyCode == teclas.RIGTH) {
    	sprite1.imagen.src = "derecha.png";
     	    	sprite1.x = sprite1.x +10;
     	    	 dibujar();
    }

    if (sprite1.x == 680) {
    	sprite1.x = -10;


    }
    if (sprite1.x == -60) {
    	sprite1.x = 640;
    }

    if (sprite1.y == 480) {
    	sprite1.y = -10;
     fondo.imagen.src = "fondo.jpg";
        objetivo.imagen.src = "moneda.png"
        sonidoMoneda = document.getElementById("sonidoMoneda");
    }
    if (sprite1.y == -60) {
    	sprite1.y = 440;
        fondo.imagen.src = "fondo2.jpg";
        objetivo.imagen.src = "hongo.png"
        sonidoMoneda = document.getElementById("sonidoHongo");
    }

    if (sprite1.x < objetivo.x +30 && sprite1.x > objetivo.x -30 ){
        if (sprite1.y < objetivo.y +30 && sprite1.y > objetivo.y -30 ){
            sonidoMoneda.play();
            objetivo.x = aleatorio(10,680);
            objetivo.y = aleatorio(10,480);
            puntos = puntos + 1;
        }
    }
}


function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
     
}