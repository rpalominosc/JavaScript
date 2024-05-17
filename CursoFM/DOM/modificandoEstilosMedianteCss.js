/* 
    Modificar estilos mediante css
*/

const primeracaja = document.querySelector('#contenedor1 .caja');
// console.log(primeracaja.classlist);

const agregarClase = () => {
    primeracaja.classList.add('activa');

};

const eliminarClase = () => {
    primeracaja.classList.remove('activa');
};    

const toggleClase = () => {
    primeracaja.classList.toggle('activa');
    
};


const comprobarClase = () => {
    if (primeracaja.classList.contains('activa')){
        console.log('La caja tiene la  clase "activa"');
    } else{
        console.log('La caja NO tiene la  clase "activa"');
    }
    console.log('y contiene las siguientes clases:');
    primeracaja.classList.forEach(clase => {
        console.log(clase);
    })
}