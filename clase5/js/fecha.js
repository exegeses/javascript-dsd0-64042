/*
    mostrar fecha actual
    formato: 12/06/2023
*/

//ubicamos elemento/s dentro del DOM
const txt = document.getElementById('txt');

//creamos objeto de fecha
const fecha = new Date();

//obtenemos el número de dia de mes
let diaMes = fecha.getDate();
if( diaMes < 10 ){
    diaMes = '0'+ diaMes;
}

//obtenemos el número de mes actual
/*
    enero -> 0
    febrero -> 1
    marzo -> 2
 */
let mes = fecha.getMonth() + 1;
if ( mes < 10 ) {
    mes = '0'+ mes;
}


//obtenemos el número de año 
let anio = fecha.getFullYear();
 
//imprimimos en el span
txt.innerText = diaMes + '/' + mes + '/' + anio;