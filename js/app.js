function mostrarJuego(num) {

    let titulo = document.getElementById("titulo");
    let imagen = document.getElementById("imagen");
    let descripcion = document.getElementById("descripcion");

    if(num == 1){
        titulo.innerHTML = "Minecraft";
        imagen.src = "img/juego1.jpg";
        descripcion.innerHTML = "Juego de construcción y aventura.";
    }

    if(num == 2){
        titulo.innerHTML = "Free Fire";
        imagen.src = "img/juego2.jpg";
        descripcion.innerHTML = "Juego de batalla tipo survival.";
    }

    if(num == 3){
        titulo.innerHTML = "FIFA";
        imagen.src = "img/juego3.jpg";
        descripcion.innerHTML = "Juego de fútbol muy popular.";
    }
}
