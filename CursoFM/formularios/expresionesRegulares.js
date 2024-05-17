/* 
    Guia de Expresiones regulares
    https://www.youtube.com/watch?v=wfogZfIS03U
*/

const formulario=document.getElementById('formulario-donacion');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

    const datos = {
        correo: formulario.correo.value,
        
    };


    if (!expresionRegular.test(datos.correo)){
     console.log('correo invalido');
     return;
    }
    console.log(datos);
    console.log('Enviando datos');



});