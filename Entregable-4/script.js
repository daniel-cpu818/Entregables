document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const mensaje = document.getElementById("formMensaje");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que recargue la página

    const nombre = document.getElementById("nombre").value.trim();
    const motivo = document.getElementById("motivo").value.trim();
    const correo = document.getElementById("correo").value.trim();

    if (!nombre || !motivo || !correo) {
      mensaje.textContent = "Por favor, completa todos los campos.";
      mensaje.style.color = "red";
    } else {
      mensaje.textContent = "¡Formulario enviado con éxito!";
      mensaje.style.color = "green";
      form.reset();
    }
  });
});
