    function validarPassword() {
      let contraseña1 = document.getElementById("clave1").value;
      let contraseña2 = document.getElementById("clave2").value;

      if (contraseña1 === "" || contraseña2 === "") {
        alert("Por favor completa ambos campos.");
      } else if (contraseña1 === contraseña2) { 
        alert("Las contraseñas coinciden ");
      } else {
        alert("Las contraseñas NO coinciden ");
      }
    }