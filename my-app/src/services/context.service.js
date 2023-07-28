import ContactoContext from "../context/ContactoContext";
import AltaContext from "../context/AltaContext";
import utils from "../utils/utils";

const contextService = {
  //Selecciona un contexto a partir de una clave
  select: function (clave) {
    if (clave == "alta") {
      return AltaContext;
    }
    if (clave == "contacto") {
      return ContactoContext;
    }
  },

  metodo: function (propiedad) {
    //Devuelve el nombre del metodo
    return "set" + utils.mayus(propiedad);
  },
  error: function (propiedad) {
    //Devuelve el nombre del metodo
    return "error" + utils.mayus(propiedad);
  },
  setError: function (propiedad) {
    //Devuelve el nombre del setter de Error
    return "setError" + utils.mayus(propiedad);
  },
};

export default contextService;
