const contenedor= document.getElementById('contenedor1');
contenedor.addEventListener('click',()=>{   
    console.log('Hiciste click en la caja');
})

const primeracaja = document.querySelector('.caja');
primeracaja.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log('Hiciste click en la caja1');
});