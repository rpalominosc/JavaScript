function range (inicio,fin,paso){
    if (paso == undefined){
        avance = 1;
    }
    else{
        avance = paso
    }
    let arreglo = [];
    for ( i=inicio; i<=fin; avance){
        arreglo[i-1]=i;
        i=i+avance
    }
    return arreglo;
}
console.log(range(1,10,3));