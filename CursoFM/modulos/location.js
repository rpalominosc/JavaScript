//  href -retorna la URL de la página actual
console.log(window.location.href);

// hostname - retorna el host de la página actual
console.log(window.location.host);

// pathname - retorna ruta y archivo de la página actual
console.log(location.pathname);

// protocol - retorna protocolo de la página actual
console.log(location.protocol);

const cargarDocumento= () => {
    location.assign('http://www.emol.com');

};

const regresar= () => {
    history.back();

};
