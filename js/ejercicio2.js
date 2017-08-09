 
var importe=prompt("Ingrese una cantidad de dinero: $");
 
document.write("<article><h3>La cantidad de dinero es : $"+importe+"</h3></article>");
 
// indicamos todas las monedas posibles
var mon=Array(1000, 500, 100, 50, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01);
 
// creamos un array con la misma cantidad de monedas
// Este array contendra las monedas a devolver
var cambio=Array(0,0,0,0,0,0,0,0,0,0);
 
// Recorremos todas las monedas
for(var i=0; i<mon.length; i++)
{
 
    // Si el importe actual, es superior a la moneda
    if(importe>=mon[i])
    {
 
        // obtenemos cantidad de monedas
        cambio[i]=parseInt(importe/mon[i]);
 
        // actualizamos el valor del importe que nos queda por didivir
        importe=(importe-(cambio[i]*mon[i])).toFixed(2);
    }
}
 
// Bucle para mostrar el resultado
for(i=0; i<mon.length; i++)
{
    if(cambio[i]>0){

        if(mon[i]>=5){
        
        for(var j=0; j<cambio[i]; j++)
    {
        document.write("<article class='moneda'><img src='../img/"+mon[i]+".jpg'></article><br>");
    }
    }
        else{
         for(var j=0; j<cambio[i]; j++){
        document.write("<article class='monedac'><img src='../img/"+mon[i]+".png'></article><br>");
    }
    }
    
    }
}
 