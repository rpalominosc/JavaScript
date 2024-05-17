// // Trayendo 1 pelicula
// 
// const cargarpeliculas = async ()=>{
//     try {
//         const respuesta= await fetch('https://api.themoviedb.org/3/movie/550?api_key=d7e40f987b914f82bdd0cf74628aa755&language=es-CL');
//         console.log(respuesta);
//        
//         const datos = await respuesta.json();
//         console.log(datos);
// 
//     } catch(error){
//         console.log(error);
//     }


// Trayendo las peliculas mas Populares
let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () =>{
    pagina +=1;
    cargarpeliculas();
 } )

 btnAnterior.addEventListener('click', () =>{
    if (pagina > 1){
        pagina -=1;
        cargarpeliculas();
    }
 } )

const cargarpeliculas = async ()=>{
    try {
        const respuesta= await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d7e40f987b914f82bdd0cf74628aa755&language=es-CL&page=${pagina}`);
        console.log(respuesta);
       
        const datos = await respuesta.json();
        // console.log(datos.results);
        let peliculas = '';
        datos.results.forEach(pelicula => {
        //    console.log(pelicula.title);
            peliculas=peliculas +
            `<div class="pelicula">
                <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"></img>
           
             <h3 class="titulo">${pelicula.title}</h3>
             </div> `
            
        });

        document.getElementById('contenedor').innerHTML = peliculas;

    } catch(error){
        console.log(error);
    }
};


cargarpeliculas();

