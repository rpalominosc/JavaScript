/* 
    Bubbling (false,por defecto)
    -   el evento del elemento hijo reacciona antes del
        evento del elemento padre

    Capturing(true)
    -   El elemento padre reacciona primero y despues el hijo
*/
const contenedor= document.getElementById('contenedor1');
contenedor.addEventListener('click',()=>{   
    console.log('Hiciste click en la caja');
},true)

const primeracaja = document.querySelector('.caja');
primeracaja.addEventListener('click', (e)=>{
    console.log('Hiciste click en la caja1');
});