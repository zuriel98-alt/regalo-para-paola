
function mostrarMensaje() {
    document.getElementById("mensaje").innerHTML =
        "Te quiero muchísimo ❤️🌷 Eres una persona muy especial para mí. ¡Este regalo es solo para ti!";
}

// Crear corazones
function crearCorazon() {
    const corazon = document.createElement("span");

    corazon.classList.add("corazon");
    corazon.innerHTML = "❤️";

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = (15 + Math.random() * 25) + "px";

    document.getElementById("corazones").appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 5000);
}

// Crear corazones cada medio segundo
setInterval(crearCorazon, 500);



function abrirCarta() {
    const carta = document.getElementById("carta");
    const sobre = document.getElementById("sobre");

    carta.classList.toggle("carta-visible");
    sobre.classList.toggle("abierto");
}

