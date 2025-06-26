// Mostrar carrito en carrito.html
document.addEventListener("DOMContentLoaded", () => {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const contenedor = document.getElementById("carrito-lista");
  const totalSpan = document.getElementById("carrito-total");

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p>Tu carrito está vacío.</p>";
    totalSpan.textContent = "$0";
    return;
  }

  let total = 0;
  let html = "<ul>";
  carrito.forEach((item, index) => {
    html += `<li>${item.nombre} - $${item.precio.toLocaleString()} <button onclick="eliminarProducto(${index})">Eliminar</button></li>`;
    total += item.precio;
  });
  html += "</ul>";

  contenedor.innerHTML = html;
  totalSpan.textContent = `$${total.toLocaleString()}`;
});

// Vaciar carrito
function vaciarCarrito() {
  localStorage.removeItem("carrito");
  window.location.reload();
}

// Eliminar producto específico
function eliminarProducto(index) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  window.location.reload();
}

// Validación de formulario de contacto
document.addEventListener("DOMContentLoaded", () => {
  const formContacto = document.getElementById("form-contacto");
  if (formContacto) {
    formContacto.addEventListener("submit", function (e) {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();
      const resultado = document.getElementById("mensaje-envio");

      if (!nombre || !email || !mensaje) {
        resultado.textContent = "Por favor completa todos los campos.";
        resultado.style.color = "red";
      } else {
        resultado.textContent = "¡Mensaje enviado correctamente!";
        resultado.style.color = "green";
        formContacto.reset();
      }
    });
  }
});
