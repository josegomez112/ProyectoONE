function mostrar(){

    var dato = document.getElementById("entrada1");

    var resultado = document.getElementById("resultado");

   // resultado.innerText = dato.value;

   var r2 = dato.value;

   


    var contador = 1;
    while (contador < 13) {

        r2 = dato.value * contador;
         
        //resultado.innerText = resultado.innerText  + contador + "\n";
        resultado.innerText +=   dato.value +' x ' + contador + ' = ' + r2 +  "\n";
       // contador = contador + 1;
        contador++

        
    }
    
    
    


}

document.getElementById("boton1").onclick = mostrar;
