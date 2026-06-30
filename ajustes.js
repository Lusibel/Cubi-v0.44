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

    vision: 2,
    dialogScale: 0.5,
    joystickScale: 0.5,
    joystickOpacity: 0.5,
    hudScale: 0.5,
    musicVolume: 0.5,
    sfxVolume: 0.5,

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

    document.getElementById("dialogoValor").textContent =
        ajustes.dialogScale.toFixed(1);

    const dialogo = document.getElementById("dialogBox");

    dialogo.style.transformOrigin = "bottom center";

    dialogo.style.transform =
        `translateX(-50%) scale(${ajustes.dialogScale})`;

}
function aplicarEscalaJoystick() {

    document.getElementById("joystickValor").textContent =
        ajustes.joystickScale.toFixed(1);

    document.getElementById("joystick").style.transform =
        `scale(${ajustes.joystickScale})`;

}

function aplicarOpacidadJoystick() {

    document.getElementById("opacidadValor").textContent =
        ajustes.joystickOpacity.toFixed(1);

    document.getElementById("joystick").style.opacity =
        ajustes.joystickOpacity;

}

function aplicarEscalaHUD() {

    document.getElementById("hudValor").textContent =
        ajustes.hudScale.toFixed(1);

    document.getElementById("playerLives").style.transform =
        `scale(${ajustes.hudScale})`;

}


function aplicarVolumen() {

}

cargarAjustes();

aplicarVision();
aplicarEscalaDialogo();
aplicarEscalaJoystick();
aplicarOpacidadJoystick();
aplicarEscalaHUD();
aplicarVolumen();

document.getElementById("joystickMas").onclick = () => {

    if (ajustes.joystickScale < 2.0) {

        ajustes.joystickScale += 0.1;

    }

    guardarAjustes();
    aplicarEscalaJoystick();

};

document.getElementById("joystickMenos").onclick = () => {

    if (ajustes.joystickScale > 0.5) {

        ajustes.joystickScale -= 0.1;

    }

    guardarAjustes();
    aplicarEscalaJoystick();

};

document.getElementById("opacidadMas").onclick = () => {

    if (ajustes.joystickOpacity < 1.0) {

        ajustes.joystickOpacity =
    Number((ajustes.joystickOpacity + 0.1).toFixed(1));

    }

    guardarAjustes();
    aplicarOpacidadJoystick();

};

document.getElementById("opacidadMenos").onclick = () => {

    if (ajustes.joystickOpacity > 0.2) {

        ajustes.joystickOpacity =
    Number((ajustes.joystickOpacity - 0.1).toFixed(1));

    }

    guardarAjustes();
    aplicarOpacidadJoystick();

};

document.getElementById("dialogoMas").onclick = () => {

    if (ajustes.dialogScale < 2.0) {

        ajustes.dialogScale =
            Number((ajustes.dialogScale + 0.1).toFixed(1));

    }

    guardarAjustes();
    aplicarEscalaDialogo();

};

document.getElementById("dialogoMenos").onclick = () => {

    if (ajustes.dialogScale > 0.5) {

        ajustes.dialogScale =
            Number((ajustes.dialogScale - 0.1).toFixed(1));

    }

    guardarAjustes();
    aplicarEscalaDialogo();

};

document.getElementById("hudMas").onclick = () => {

    if (ajustes.hudScale < 2.0) {

        ajustes.hudScale =
            Number((ajustes.hudScale + 0.1).toFixed(1));

    }

    guardarAjustes();
    aplicarEscalaHUD();

};

document.getElementById("hudMenos").onclick = () => {

    if (ajustes.hudScale > 0.5) {

        ajustes.hudScale =
            Number((ajustes.hudScale - 0.1).toFixed(1));

    }

    guardarAjustes();
    aplicarEscalaHUD();

};

document.getElementById("closeSettings")
.addEventListener("click", cerrarAjustes);
