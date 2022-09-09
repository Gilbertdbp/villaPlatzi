// VARIABLES

var granja = document.getElementById("villaplatzi");
var papel = granja.getContext("2d");
let cantidadAnimales = {
  vacas: 5,
  cerdos: 4,
  pollos: 7,
};
let x = 430;
let y = 430;
const teclas = {
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  LEFT: 37,
};

var fondo = {
  URL: "images/tile.png",
  cargaOk: false,
};
fondo.objeto = new Image();
fondo.objeto.src = fondo.URL;
fondo.objeto.addEventListener("load", cargarFondo);

var vaca = {
  URL: "images/vaca.png",
  cargaOk: false,
};
vaca.objeto = new Image();
vaca.objeto.src = vaca.URL;
vaca.objeto.addEventListener("load", cargarVacas);

var cerdo = {
  URL: "images/cerdo.png",
  cargaOk: false,
};
cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.URL;
cerdo.objeto.addEventListener("load", cargarCerdos);

var pollo = {
  URL: "images/pollo.png",
  cargaOk: false,
};
pollo.objeto = new Image();
pollo.objeto.src = pollo.URL;
pollo.objeto.addEventListener("load", cargarPollos);

var perro = {
  URL: "images/perro.png",
  cargaOk: false,
};
perro.objeto = new Image();
perro.objeto.src = perro.URL;
perro.objeto.addEventListener("load", cargarPerro);

// FUNCIONES

function aleatorio(min, maxi) {
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

function cargarFondo() {
  fondo.cargaOk = true;
  dibujar();
}
function cargarVacas() {
  vaca.cargaOk = true;
  vaca.x = [];
  vaca.y = [];
  for (v = 0; v < cantidadAnimales.vacas; v++) {
    vaca.x[v] = aleatorio(0, 420);
    vaca.y[v] = aleatorio(0, 420);
  }
  dibujar();
}
function cargarCerdos() {
  cerdo.cargaOk = true;
  cerdo.x = [];
  cerdo.y = [];
  for (c = 0; c < cantidadAnimales.cerdos; c++) {
    cerdo.x[c] = aleatorio(0, 420);
    cerdo.y.push(aleatorio(0, 420));
  }
  dibujar();
}
function cargarPollos() {
  pollo.cargaOk = true;
  pollo.x = [];
  pollo.y = [];
  for (p = 0; p < cantidadAnimales.pollos; p++) {
    pollo.x.push(aleatorio(0, 420));
    pollo.y.push(aleatorio(0, 420));
  }
  dibujar();
}
function cargarPerro() {
  perro.cargaOk = true;
  dibujar();
}

function dibujar() {
  if (fondo.cargaOk) {
    papel.drawImage(fondo.objeto, 0, 0);
  }
  if (vaca.cargaOk) {
    for (var v = 0; v < cantidadAnimales.vacas; v++) {
      papel.drawImage(vaca.objeto, vaca.x[v], vaca.y[v]);
    }
  }
  if (cerdo.cargaOk) {
    for (var c = 0; c < cantidadAnimales.cerdos; c++) {
      papel.drawImage(cerdo.objeto, cerdo.x[c], cerdo.y[c]);
    }
  }
  if (pollo.cargaOk) {
    for (var p = 0; p < cantidadAnimales.pollos; p++) {
      papel.drawImage(pollo.objeto, pollo.x[p], pollo.y[p]);
    }
  }
  if (perro.cargaOk) {
    papel.drawImage(perro.objeto, x, y);
  }
}

document.addEventListener("keydown", moverPerro);

function moverPerro(evento) {
  if (evento.keyCode == teclas.UP && y > -5) {
    y = y - 5;
    dibujar();
  }

  if (evento.keyCode == teclas.RIGHT && x < 430) {
      x = x + 5;
      dibujar();
  }
  if (evento.keyCode == teclas.LEFT && x > -5) {
      x = x - 5;
      dibujar();
  }
  if (evento.keyCode == teclas.DOWN && y < 430) {
    y = y + 5;
    dibujar();
  }
}
