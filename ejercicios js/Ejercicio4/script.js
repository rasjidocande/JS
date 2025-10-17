    function concatenar() {

      let nom = document.getElementById("nombre").value;
      let ape = document.getElementById("apellido").value;
      let completo = nom + " " + ape;
      document.getElementById("nombreCompleto").value = completo;
    }