const crearCookie = () => {
//    document.cookie = 'nombre= Rodrigo';
    document.cookie = 'nombre= Rodrigo, expires=1 Jan 2025 01:00.00';

    console.log('Creando cookie');
};

const iniciarSesion = () => {
    const usuario = prompt('Ingrese su Usuario');
    document.cookie = `nombre= ${usuario}, expires=1 Jan 2025 01:00.00`;
    alert('Sesión iniciada');
   
};