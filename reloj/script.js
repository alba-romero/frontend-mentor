const reloj = document.querySelector(".reloj");
const agujaHoras = document.querySelector(".horas");
const agujaMinutos = document.querySelector(".minutos");
const agujaSegundos = document.querySelector(".segundos");

function crearNumeros(){
    for (let n = 1; n <= 12; n++){
        const numero = document.createElement("div");
        numero.classList.add("numero");
        numero.textContent = n;
        const angulo = (n * 30) * Math.PI / 180;
        const radio = 120; 

        numero.style.left = (150 + radio * Math.sin(angulo)) + "px";
        numero.style.top = (150 - radio * Math.cos(angulo)) + "px";

        reloj.appendChild(numero);
    }
}

function actualizarReloj(){
    const ahora = new Date();
    const horas = ahora.getHours() % 12;
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();

    const anguloHoras = 30 * (horas + minutos / 60);
    const anguloMinutos = 6 * (minutos + segundos / 60);
    const anguloSegundos = 6 * segundos;

    agujaHoras.style.transform = `translateX(-50%) rotate(${anguloHoras}deg)`;
    agujaMinutos.style.transform = `translateX(-50%) rotate(${anguloMinutos}deg)`;
    agujaSegundos.style.transform = `translateX(-50%) rotate(${anguloSegundos}deg)`;
}

crearNumeros();
actualizarReloj();
setInterval(actualizarReloj, 1000);