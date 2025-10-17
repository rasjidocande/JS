function elevarCubo() {
    let valor = document.getElementById("numero").value;
    let numero = parseInt(valor);
    let resultado = numero ** 3;
    
    alert("El número " + numero + " elevado al cubo es: " + resultado);
}