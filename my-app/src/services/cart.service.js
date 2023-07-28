import productos from "../assets/json/productos.json";

const cartService = {
  new: function (id) {
    //Agrega el producto con cantidad 0
    let item = productos.find((producto) => producto.id == id);
    item.cantidad = 0;
    localStorage.setItem(id, JSON.stringify(item));
    return item;
  },
  productById: function (id) {
    //Checkea si existe el producto con identificador id en el localStorage y lo devuelve
    for (let i = 0; i < localStorage.length; i++) {
      let clave = localStorage.key(i);
      let item = JSON.parse(localStorage.getItem(clave));
      if (item.id == id) {
        return item;
      }
    }
  },
  add: function (id, cantidad) {
    //Suma una cantidad del mismo producto al carrito

    let item = this.productById(id);
    if (!item) {
      item = this.new(id);
    }

    item.cantidad = cantidad;
    localStorage.setItem(id, JSON.stringify(item));
  },
  substract(id, cantidad) {
    //Resta una cantidad del mismo producto al carrito
    let item = this.productById(id);
    item.cantidad -= cantidad;
    localStorage.setItem(id, JSON.stringify(item));
  },
  delete: function (id) {
    //Borra el producto del cart
    localStorage.removeItem(id);
  },
};
export default cartService;
