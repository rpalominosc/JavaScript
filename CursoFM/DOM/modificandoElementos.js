/*  elemento.innerHTML
    Permite cambiar el conteido HTML de un elemento

*/

const primeracaja = document.querySelector('.caja');
primeracaja.innerHTML ='<b>Hola</b>';

/*  elemento .attribute
    Permite acceder y cambiar atributos del elemento

*/

primeracaja.id = 'nuevo-id';

/*  elemento.setAttribute()
    Permite agregar o establecer el valor de un atributo del elemento
    
*/

primeracaja.setAttribute('class','caja activa');
primeracaja.setAttribute('data-id', '98765436');

/*  elemento.style.property

*/ 

const contenedor2Caja1 = document.querySelector('#contenedor2 .caja');
contenedor2Caja1.style.background = '#000';
contenedor2Caja1.style.color = '#fff';
contenedor2Caja1.style.textTransform = 'uppercase';
