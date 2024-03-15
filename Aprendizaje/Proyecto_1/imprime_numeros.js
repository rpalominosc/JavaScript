let contador, numero;
for (contador=0 ; contador <= 100; contador++){ 
    numero=contador;
    console.log("Numero = ", numero);
    if (numero % 3 == 0){
        console.log("Fizz");
        if (numero % 5 == 0){
            console.log("FizzBuzz");
        }
    }
    else{ 
        if (numero % 5 == 0){
            console.log("FizzBuzz");
        }
        else{
            console.log(numero); 
        }
        }
    
}
