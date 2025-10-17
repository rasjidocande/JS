function validarClave() {
    let clave = document.getElementById("clave").value;
    let nombre = document.getElementById("nombre").value;

    if (nombre === "" || clave === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    if (clave.length < 7) {
        alert("La clave no puede tener menos de 7 caracteres.");
    } else if (clave.length > 20) {
        alert("La clave no puede tener más de 20 caracteres.");
    } else {
        alert("Registro exitoso. ¡Bienvenido/a " + nombre + "!");
    }
}