function verificarEdad() {
    let edad = parseInt(document.getElementById("edad").value);
  
    if (isNaN(edad)) {
      alert("Por favor, ingresa un número válido");
    } else if (edad < 1 || edad > 100) {
      alert("Por favor, ingresa un número entre 1 y 100");
    } else if (edad >= 18) {
      document.getElementById("mensaje").innerHTML = "¡Ya puedes conducir!";
    } else {
      document.getElementById("mensaje").innerHTML = "No puedes conducir.";
    }
  }  