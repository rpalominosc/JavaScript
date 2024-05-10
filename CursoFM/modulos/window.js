console.log(`La ventana mide ${window.innerWidth} px de ancho`);
console.log(`La ventana mide ${window.innerHeight} px de alto`);

let ventana;
const abrirVentana = () => {
    ventana=window.open('','MI Ventana','width=500,height=500');
    ventana.document.write('<h1>Hola, escribiendo en ventana nueva</h1>');

};

const cerrarVentana = () => {
    ventana.close();

};

// Screen Object
console.log('Ancho de pantalla: ', window.screen.width);
console.log('Alto de pantalla: ', window.screen.height);
console.log('Ancho de pantalla sin barra window: ', window.screen.availWidth);
console.log('Alto de pantalla sin barra window: ', window.screen.availHeight);


