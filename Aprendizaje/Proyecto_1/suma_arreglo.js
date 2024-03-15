function range (inicio,fin,paso){
    if (paso == undefined){
        avance = 1;
    }
    else{
        avance = paso
    }
    j=inicio;
    let arreglo = [];
    for ( i=inicio; i<=fin; avance){
        arreglo.push(j);
        i=i+avance;
        j=i;
    }
    return arreglo;
}
sum=0;
range(1,10).forEach((el) => sum += el);
console.log(sum);