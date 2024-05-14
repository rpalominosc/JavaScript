const eliminarCaja = () => {
    const padre = document.getElementById('contenedor1');
    const cajaaEliminar=padre.querySelector('.caja');

    padre.removeChild(cajaaEliminar);
};