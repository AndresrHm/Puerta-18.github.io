function cambiarPestaña(numPestaña) {
    // Ocultar todos los contenidos de las pestañas
    var contenidos = document.querySelectorAll('.contenido > div');
    for (var i = 0; i < contenidos.length; i++) {
      contenidos[i].style.display = 'none';
    }
  
    // Mostrar el contenido de la pestaña seleccionada
    var contenidoPestaña = document.getElementById('contenido-' + numPestaña);
    contenidoPestaña.style.display = 'block';
  }