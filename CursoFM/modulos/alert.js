// window.alert('Revise su entrada');

//const ingresar = () => {
//   const accesoPermitido=window.confirm('Eres mayor de Edad');
//    if(accesoPermitido){
//       alert('Bienvenido');
//    }
//    else{       
//        alert('Disculpa... se necesita autorizacion de tus padres');
//    };   
    
// };

/* 
    Ventana con Input (retorna cadena texto con la respuesta
    del usuario)
*/

const saludo = () => {
   const nombre= prompt('Escribe tu nombre');
   alert(`Bienvenido ${nombre}`);
};