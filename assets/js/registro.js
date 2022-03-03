const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
};

const campos = {
  usuario: false,
  password: false,
  correo: false,
  telefono: false,
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const terminos = document.getElementById("terminos");
  if (
    campos.usuario &&
    campos.nombre &&
    campos.password &&
    campos.correo &&
    campos.telefono &&
    terminos.checked
  ) {
    formulario.reset();
    fetch("http://localhost:8080/usuarios", {
      method: "POST",
      body: JSON.stringify({
        usuario: "Omar",
        contrasenia: "1234",
        email: "123@123.com",
        telefono: "44332222",
      }),
      headers: {
        "Content-type": "application/json",
      },
    }).then((resp) => {
      const token = resp.headers.get("Authorization");

      if (token && token.includes("Bearer") && resp.ok) {
        localStorage.setItem("token", token);
        console.log(token);
        let url = window.location;
        //const path = url.pathname.substring(0, url.pathname.lastIndexOf("/") + 1);
        //location.href = path + "administrador.html";
      } else {
        localStorage.removeItem("token");
        console.log("token incorrecto");
        //emailError.textContent = 'Usuario o contraseña incorrecta';
      }
    });
  } else {
    document
      .getElementById("formulario__mensaje")
      .classList.add("formulario__mensaje-activo");
  }
});
