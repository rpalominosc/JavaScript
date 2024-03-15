let size=16;
tablero = "";
columna = size;
for (let contadorfila =1; contadorfila<=size ; contadorfila++){
    
    if (contadorfila % 2 == 0) {
        columna=1;
        do {
            if (columna % 2 == 0){
                tablero += "#";
            }
            else{
                tablero += " ";
            }
            columna++;
        } while (columna <= size);
    }
    else {
        columna=1;
        do {
            if (columna % 2 == 0){
                tablero += " ";
            }
            else{
                tablero += "#";
            }
            columna++;
        } while (columna <= size);
    }
    tablero += "\n";
    
    
}
console.log(tablero)