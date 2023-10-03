import cardService from "./card.service";

const validacionService = {
  pertenece: function (nombreCampo) {
    //checkea si pertenece al grupo de campos

    return (
      nombreCampo == "nombre" ||
      nombreCampo == "email" ||
      nombreCampo == "telefono" ||
      nombreCampo == "tipoconsulta" ||
      nombreCampo == "consulta" ||
      nombreCampo == "identificador" ||
      nombreCampo == "precio" ||
      nombreCampo == "descripcion" ||
      nombreCampo == "stock" ||
      nombreCampo == "imagen"
    );
  },
  obligatorio: function (campo, nombreCampo) {
    //Recibe campo(valor actual del campo) y campoNombre(label del campo)
    //Si el campo es vacio, devuelve un mensaje de que el campo es obligatorio
    if (nombreCampo == "tipoconsulta") nombreCampo = "tipo de consulta";
    if (nombreCampo == "descripcion") nombreCampo = "descripción";
    if (!campo) {
      return `El campo ${nombreCampo} es obligatorio`;
    }
  },

  regexp: function (campo, nombreCampo, ctxType) {
    //Recibe campo(valor actual del campo) y campoNombre(label del campo)
    //Hace una validación dada una expresión regular

    let mensaje = "";
    let regexp = "";

    if (nombreCampo == "nombre" && ctxType == "alta") {
      return null;
    }

    switch (nombreCampo) {
      case "nombre":
        regexp = new RegExp("^[A-Za-z ,.'\\-]+$");
        mensaje = "El nombre no puede tener números ni caracteres especiales";
        break;

      case "email":
        regexp = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
        mensaje = "Ingrese un email válido";
        break;

      case "telefono":
        regexp = new RegExp("^[0-9]+$");
        mensaje = "Ingrese un número telefónico";
        break;

      case "precio":
        regexp = new RegExp("^[0-9]+$");
        mensaje = "Ingrese un número válido";
        break;

      case "identificador":
        regexp = new RegExp("^[0-9]+$");
        mensaje = "Ingrese un número válido";
        break;

      default:
        break;
    }

    if (campo && regexp && !regexp.exec(campo)) return mensaje;
  },
};

export default validacionService;
