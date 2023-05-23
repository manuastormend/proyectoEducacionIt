let productos = [];
let id = 0;
function producto(id, nombre, imagen, descripcion, alt, precio) {
  this.id = id;
  this.nombre = nombre;
  this.imagen = imagen;
  this.descripcion = descripcion;
  this.alt = alt;
  this.precio = precio;
}

const p1 = new producto(
  1,
  "Apple iPhone 11 (128GB) - Rojo",
  "img/productos/Iphone11.png",
  "",
  "Iphone 11",
  123
);

const p2 = new producto(
  2,
  "Notebook HP 15-DY2795WM i5-1135G7 256GB 8GB 15.6",
  "img/productos/NotebookHP1.png",
  "",
  "Notebook HP",
  735
);
const p3 = new producto(
  3,
  "The Last of Us: Remastered (PS4)",
  "img/productos/juego-1.png",
  "",
  "TLOF",
  42
);
const p4 = new producto(
  4,
  "Mundo 3D de Super Mario + Bowser's Fury (Nintendo Switch)",
  "img/productos/juego-2.png",
  "loren ipsum",
  "Mario",
  42
);
const p5 = new producto(
  5,
  "Xiaomi Poco X3 NFC",
  "img/productos/pocox3.png",
  "",
  "Pocox3",
  251
);
const p6 = new producto(
  6,
  "Samsung Galaxy F42 5G",
  "img/productos/samsungf42.png",
  "",
  "F42",
  280
);

const p7 = new producto(
  7,
  "Lenovo Flex Chromebook 2 en 1",
  "img/productos/lenovoFlex.png",
  "",
  "Flex",
  319
);

const p8 = new producto(
  8,
  "Notebook Lenovo Thinkpad L14 I5-1235u 256gb 16gb rj45 W11p",
  "img/productos/lenovoThinkpad.png",
  "",
  "Thinkpad",
  1741
);

const p9 = new producto(
  9,
  "Apple iPhone 6 128 GB desbloqueado (renovado)",
  "img/productos/iphone6.png",
  "",
  "Iphone 6",
  189
);

const p10 = new producto(
  10,
  "Google Pixel 6 — Teléfono Android 5G",
  "img/productos/googlepixel.png",
  "",
  "GP",
  500
);

const p11 = new producto(
  11,
  "SAMSUNG Galaxy A23 (SM-A235M/DS) Dual SIM, 128 GB y 4 GB de RAM",
  "img/productos/samsunggalaxy.png",
  "",
  "SGalaxy",
  440
);

const p12 = new producto(
  12,
  "Marvel's Spider-Man: Miles Morales - PS4",
  "img/productos/juego-3.png",
  "",
  "SpiderMan",
  39
);

productos.push(p1);
productos.push(p2);
productos.push(p3);
productos.push(p4);
productos.push(p5);
productos.push(p6);
productos.push(p7);
productos.push(p8);
productos.push(p9);
productos.push(p10);
productos.push(p11);
productos.push(p12);
export default productos;
