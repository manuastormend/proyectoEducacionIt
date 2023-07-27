const validacionNombre = (nombre) => {
  //Controla que no tenga numeros, pued etener espacios
  const validNombre = new RegExp("^[A-Za-z ,.'\\-]+$");

  if (!nombre) {
    return "El nombre es un campo obligatorio";
  }
  if (!validNombre.exec(nombre)) {
    return "El nombre no puede tener números ni caracteres especiales";
  }
};

const validacionEmail = (email) => {
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );

  if (!email) {
    return "El email es un campo obligatorio";
  }
  if (!validEmail.exec(email)) {
    return "Ingrese un email válido";
  }
};

const validacionTelefono = (tel) => {
  const validTelefono = new RegExp("^[0-9]+$");

  if (!tel) {
    return "El teléfono es un campo obligatorio";
  }
  if (!validTelefono.exec(tel)) {
    return "Ingrese un número telefónico";
  }
};

const validacionTipoConsulta = (tipoConsulta) => {
  if (!tipoConsulta) {
    return "El tipo de consulta es un campo obligatorio";
  }
};

const validacionConsulta = (cons) => {
  if (!cons) {
    return "La consulta es un campo obligatorio";
  }
};

export {
  validacionEmail,
  validacionNombre,
  validacionTelefono,
  validacionConsulta,
  validacionTipoConsulta,
};
