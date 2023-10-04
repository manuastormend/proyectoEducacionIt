const cardService = {
  all: async function () {
    const res = await fetch("http://localhost:5500/cards", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  },

  // new: async function (id, nombre, precio, descripcion, imagen, stock) {
  //   return fetch(`http://localhost:5500/cards`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       id: id,
  //       nombre: nombre,
  //       imagen: imagen,
  //       descripcion: descripcion,
  //       alt: nombre + "producto",
  //       precio: precio,
  //       stock: stock,
  //     }),
  //   });
  // },

  new: async function (id, nombre, precio, descripcion, imagen, stock) {
    return fetch(`http://localhost:5500/cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        nombre: nombre,
        imagen: imagen,
        descripcion: descripcion,
        alt: nombre + "producto",
        precio: precio,
        stock: stock,
      }),
    });
  },

  productId: function (id) {
    //Checkea si existe el producto con identificador id, si existe devuelve lo devuelve y si no devuelve null
    const data = this.all();
    const producto = data.then((res) => {
      return res.filter((elemento) => elemento.id === id);
    });
    console.log(producto);
    return producto;
  },
};
export default cardService;
