/* ===========================
   CN40 - Centro de Operaciones
=========================== */

function activar() {

    const mensaje = document.getElementById("mensaje");

    mensaje.style.display = "block";

    mensaje.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}
