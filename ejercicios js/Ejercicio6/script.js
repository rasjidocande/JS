function mostrarPrecio() {
    let seleccion = document.getElementById("pizzas");
    let precio = seleccion.value;
    document.getElementById("precio").value = precio !== "" ? "$ " + precio : "";
}