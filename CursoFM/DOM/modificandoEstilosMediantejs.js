/* 
    MOdificar estilos CSS mediante inline styles
 */

const ultimacaja = document.querySelector('#contenedor2 .caja:last-child');
ultimacaja.style.background = "#000";
ultimacaja.style.color = "#fff";

const cajas = document.querySelectorAll('.caja');
let tamaño = 24;

const incrementarFuente = () => {

    cajas.forEach((caja)=>{
        caja.style.fontSize = `${tamaño +1}px`;
        tamaño++;
    })
}

const disminuirFuente = () => {

    cajas.forEach((caja)=>{
        caja.style.fontSize = `${tamaño +1}px`;
        tamaño--;
    })
}
