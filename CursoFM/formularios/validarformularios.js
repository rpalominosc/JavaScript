const formulario=document.getElementById('formulario-donacion');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const datos = {
        correo: formulario.correo.value,
        pais: formulario.pais.value,
        donacion: formulario.donacion.value,
        fecha: formulario.fecha.value,
        terminos:formulario['terminos-y-condiciones'].checked
    };

    if(datos.correo.length <= 2){
        console.log('correo invalido');
        return;
    }

    if(datos.pais === ''){
        console.log('País invalido');
        return;
    }

    if(datos.donacion === ''){
        console.log('Selecciona una cantidad');
        return;
    }
    if(datos.fecha === ''){
        console.log('Ingresa Fecha');
        return;
    }
    if (!datos.terminos){
        console.log ('Acepte terminos y condiciones');
        return;
    }


    console.log(datos);
});