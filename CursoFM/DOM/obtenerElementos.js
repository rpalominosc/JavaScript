// /*  get elento by id */
// 
// const contenedor1= document.getElementById('contenedor1');
// console.log(contenedor1);
// 
// /*   children  */
// console.log(contenedor1.children);

/*   queryselector querySelectorAll
    Devuelve el primer elemento que coincida con un 
    selector estilo css. (Devuelve un nodelist)

*/

// const  cajas = document.querySelectorAll('#contenedor1 .caja');
// console.log(cajas);
// 
// cajas.forEach((caja) => {
//     console.log(caja);
//     
// });

/*  closest
    Permite buscar de adentro hacia afuera en buscaun elemento
*/

// const ultimacaja = document.querySelector('#contenedor2 .caja:last-child');
// console.log(ultimacaja);
// 
// console.log(ultimacaja.closest('.contenedor-principal'));

/* 
    Se puede encadenar todos los metodos para obtener elementos
 */

const contenedor2 =  document.getElementById('contenedor2');
console.log(contenedor2.querySelector('.caja'));