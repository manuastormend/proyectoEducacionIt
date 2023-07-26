"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var productos = [];
var id = 0;

function producto(id, nombre, imagen, descripcion, alt, precio) {
  this.id = id;
  this.nombre = nombre;
  this.imagen = imagen;
  this.descripcion = descripcion;
  this.alt = alt;
  this.precio = precio;
}

var p1 = new producto(1, "Apple iPhone 11 (128GB) - Rojo", "Iphone11.png", "Potente y elegante, el iPhone 11 (128GB) en rojo ofrece un rendimiento fluido con su chip A13 Bionic, una cámara dual de 12MP para fotos impresionantes y una interfaz intuitiva con iOS. Una experiencia móvil excepcional", "Iphone 11", 123);
var p2 = new producto(2, "Notebook HP 15-DY2795WM i5-1135G7 256GB 8GB 15.6", "NotebookHP1.png", "Potente y portátil, este notebook HP ofrece un rendimiento ágil con su procesador Intel i5-1135G7, almacenamiento de 256GB y 8GB de RAM. Con una pantalla de 15.6`, es perfecto para trabajar y entretenimiento. Una opción confiable y versátil", "Notebook HP", 735);
var p3 = new producto(3, "The Last of Us: Remastered (PS4)", "juego-1.png", "Sumérgete en una apasionante historia postapocalíptica con gráficos mejorados en esta versión remasterizada para PS4. Con una jugabilidad envolvente, combate desafiante y una narrativa cautivadora, esta obra maestra de acción y supervivencia te mantendrá enganchado de principio a fin. ¡Una experiencia inolvidable para los amantes de los videojuegos!", "TLOF", 42);
var p4 = new producto(4, "Mundo 3D de Super Mario + Bowser's Fury (Nintendo Switch)", "juego-2.png", "Disfruta de dos emocionantes aventuras en un solo juego para Nintendo Switch. Explora mundos coloridos y desafiantes mientras controlas a Super Mario en su misión de rescatar a la princesa Peach. Además, sumérgete en la nueva expansión de Bowser's Fury, enfrentándote a un gigantesco Bowser en un mundo abierto. ¡Diversión y entretenimiento asegurados para los fanáticos de Mario!", "Mario", 42);
var p5 = new producto(5, "Xiaomi Poco X3 NFC", "pocox3.png", "Es un smartphone con una pantalla de 6.67`, potenciado por un procesador Snapdragon 732G, 6GB de RAM y 128GB de almacenamiento. Ofrece un rendimiento sólido y versatilidad para disfrutar de aplicaciones y tareas diarias", "Pocox3", 251);
var p6 = new producto(6, "Samsung Galaxy F42 5G", "samsungf42.png", "Es un smartphone versátil y potente. Con pantalla AMOLED de 6.6', cámara cuádruple de 64MP, procesador rápido y conectividad 5G, te ofrece una experiencia visual impresionante y un rendimiento fluido. Disfruta de usabilidad intuitiva y captura fotos y videos de alta calidad. ¡Una opción ideal para aquellos que buscan un dispositivo fiable y de vanguardia!", "F42", 280);
var p7 = new producto(7, "Lenovo Flex Chromebook 2 en 1", "lenovoFlex.png", " El Lenovo Flex Chromebook 2 en 1 es un portátil versátil y convertible. Con pantalla táctil de 11.6', puede usarse como una laptop o como una tablet con facilidad. Equipado con el sistema operativo Chrome OS, ofrece una experiencia rápida y segura. Además, cuenta con un procesador eficiente y una duración de batería prolongada para acompañarte durante todo el día. Perfecto para trabajar, estudiar o entretenerse con comodidad.", "Flex", 319);
var p8 = new producto(8, "Notebook Lenovo Thinkpad L14 I5-1235u 256gb 16gb rj45 W11p", "lenovoThinkpad.png", "El Lenovo Thinkpad L14 es un notebook confiable y potente. Con un procesador Intel Core i5-1235u, 16GB de RAM y un disco duro de 256GB, ofrece un rendimiento ágil y capacidad de almacenamiento suficiente. Su pantalla de 14' brinda una visualización clara, y su puerto RJ45 te permite una conexión rápida y estable a la red. Además, viene con Windows 11 Pro preinstalado, proporcionando una experiencia de usuario avanzada y segura. Ideal para profesionales que buscan un rendimiento sólido y duradero en un dispositivo portátil.", "Thinkpad", 1741);
var p9 = new producto(9, "Apple iPhone 6 128 GB desbloqueado (renovado)", "iphone6.png", "Con una capacidad de almacenamiento de 128 GB, tienes espacio suficiente para guardar tus aplicaciones, fotos y archivos. El iPhone 6 cuenta con una pantalla Retina de 4.7 pulgadas, un procesador rápido y una cámara de alta resolución para capturar momentos especiales. Desbloqueado para su uso con cualquier operador, este iPhone ofrece la libertad de elegir el plan que mejor se adapte a tus necesidades. Una excelente opción para aquellos que buscan un iPhone más antiguo pero aún capaz de satisfacer sus necesidades diarias.", "Iphone 6", 189);
var p10 = new producto(10, "Google Pixel 6 — Teléfono Android 5G", "googlepixel.png", "El Google Pixel 6 es un teléfono Android 5G de última generación que ofrece un rendimiento excepcional. Equipado con un potente procesador y conectividad 5G, disfrutarás de una experiencia rápida y fluida en la navegación, descargas y transmisión de contenido. Su pantalla de alta resolución ofrece colores vibrantes y detalles nítidos. Además, cuenta con una cámara de alta calidad que captura fotos y videos impresionantes en diversas condiciones de iluminación. ", "GP", 500);
var p11 = new producto(11, "SAMSUNG Galaxy A23 (SM-A235M/DS) Dual SIM, 128 GB y 4 GB de RAM", "samsunggalaxy.png", "El Samsung Galaxy A23 ofrece un rendimiento confiable con sus 128 GB de almacenamiento y 4 GB de RAM. Con una pantalla amplia y vibrante, cámara versátil, batería de larga duración y dual SIM, este smartphone es ideal para el uso diario y multitarea. Disfruta de una experiencia fluida y captura momentos especiales con calidad. ¡Una opción confiable y asequible para aquellos que buscan un teléfono Samsung de calidad!", "SGalaxy", 440);
var p12 = new producto(12, "Marvel's Spider-Man: Miles Morales - PS4", "juego-3.png", "Embárcate en una emocionante aventura como el héroe arácnido Miles Morales. Con gráficos impresionantes y una jugabilidad fluida en PS4, sumérgete en una historia épica llena de acción y descubre las habilidades únicas de Miles. ¡Usa tus poderes arácnidos para luchar contra villanos y proteger la ciudad! Una experiencia imprescindible para los fanáticos de Spider-Man y los amantes de los videojuegos.", "SpiderMan", 39);
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
var _default = productos;
exports["default"] = _default;