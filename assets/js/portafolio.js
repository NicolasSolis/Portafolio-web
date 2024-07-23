const cards = document.querySelectorAll(".card, .card-body");
cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
        card.classList.add("resaltar");
    });
    card.addEventListener("mouseout", () => {
        card.classList.remove("resaltar");
    });
});

const btnform = document.getElementById("btnForm")
const inputNombreUsuario = document.getElementById("nombre");
const form = document.getElementById("formularioContacto");
const success = document.getElementById("success");
const fail = document.getElementById("fail");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || email === "" || telefono === "" || mensaje === "") {
        fail.style.display = "block";
    } else {
        //había una regla css que le daba margin-top a los h2, quedaba raro y me costó encontrarlo, así que quedó como h3
        success.style.display = "block";
        success.innerHTML = "<h3>Tu mensaje fue enviado correctamente, gracias</h3>" + nombre + "!";
    }
    //resetear el form queda un poco raro o innecesario, porque es requerido, pero leí que estaba bien
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("mensaje").value = "";

    setTimeout(() => {
        success.style.display = "none";
        fail.style.display = "none";
    }, 7000);
});