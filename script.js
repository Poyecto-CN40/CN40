function activar() {
    window.location.href = "menu.html";
}

function cargarPruebasPublicas() {

    if (typeof pruebasPublicas === "undefined" || pruebasPublicas.length === 0) {
        return;
    }

    const archivo = document.querySelector(".expediente");

    pruebasPublicas.forEach(prueba => {

        const boton = document.createElement("button");

        boton.textContent = prueba.titulo;

        boton.onclick = function () {
            window.location.href = prueba.url;
        };

        archivo.appendChild(boton);
    });
}

document.addEventListener("DOMContentLoaded", cargarPruebasPublicas);
