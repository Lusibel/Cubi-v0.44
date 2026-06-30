document.getElementById("settingsButton")
.addEventListener("click", abrirAjustes);
document.getElementById("visionMas").onclick = () => {

    if (ajustes.vision < 2.0) {

        ajustes.vision += 0.1;

    }

    guardarAjustes();
    aplicarVision();

};

document.getElementById("visionMenos").onclick = () => {

if (ajustes.vision > 0.2) {

    ajustes.vision -= 0.1;

}

    guardarAjustes();
    aplicarVision();

};

const ajustes = {

    vision: 0.5,
    dialogScale: 1,
    joystickScale: 1,
    musicVolume: 0.5,
    sfxVolume: 1,

};

function cargarAjustes() {

    const datos = localStorage.getItem("ajustes");

    if (datos) {

        Object.assign(
            ajustes,
            JSON.parse(datos)
        );

    }

    if (ajustes.vision === undefined) {

        ajustes.vision = 0.5;
        guardarAjustes();

    }

}

function guardarAjustes() {

    localStorage.setItem(
        "ajustes",
        JSON.stringify(ajustes)
    );

}

function abrirAjustes() {

    document.getElementById("settingsMenu").style.display = "block";

}

function cerrarAjustes() {

    document.getElementById("settingsMenu").style.display = "none";

}


function aplicarVision() {

    document.getElementById("visionValor").textContent =
        ajustes.vision.toFixed(1);

}

function aplicarEscalaDialogo() {

}

function aplicarEscalaJoystick() {

}

function aplicarVolumen() {

}

cargarAjustes();
aplicarVision();
aplicarEscalaDialogo();
aplicarEscalaJoystick();
aplicarVolumen();

document.getElementById("closeSettings")
.addEventListener("click", cerrarAjustes);