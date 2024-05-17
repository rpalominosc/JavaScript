const boton1 = document.getElementById('boton1');
const primeracaja= document.querySelector('.caja');
boton1.addEventListener('click' , (event)=>{
    primeracaja.classList.toggle('activa');
});

/* Agregando eventos a multiples elementos  */

const cajas = document.querySelectorAll('.caja');


cajas.forEach((caja) => {
    caja.addEventListener('click', (event) => {
        console.log(`Haz Hecho click en la: ${event.target.innerHTML}`);
    });

});