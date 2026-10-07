const botones = document.querySelectorAll(".boton");
botones.forEach(boton =>{
    boton.addEventListener("click", ()=>{
        const pregunta = boton.closest(".pregunta");
        const imagen = boton.querySelector("img");
        pregunta.classList.toggle("abierta");
        if(pregunta.classList.contains("abierta")){
            imagen.src = "./assets/images/icon-minus.svg";
            imagen.alt = "Ocultar respuesta";
        }else{
            imagen.src="./assets/images/icon-plus.svg";
            imagen.alt = "Mostrar respuesta";
        }
    })
})