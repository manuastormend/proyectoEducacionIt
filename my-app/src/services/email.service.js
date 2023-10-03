const emailService = {
  new: async function (nombre, email, telefono, tipoconsulta, consulta) {
    return fetch(`http://localhost:5500/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre,
        email: email,
        telefono: telefono,
        tipoconsulta: tipoconsulta,
        consulta: consulta,
      }),
    });
  },
};
export default emailService;
