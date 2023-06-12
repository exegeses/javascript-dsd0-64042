//ubicamos elemento dentro del DOM
const txt = document.getElementById('txt');

/*
    mostrar reloj
    formato:  11:36:41
*/

//declaramos función 
function reloj()
{
    //creamos objeto de fecha
    let fecha = new Date();

    //obtenemos el número de las horas
    let horas = fecha.getHours();
    if( horas < 10 ){
        horas = '0'+ horas;
    }

    //obtenemos el número de los minutos
    let minutos = fecha.getMinutes();
    if( minutos < 10 ){
        minutos = '0'+ minutos;
    }

    //obtenemos el número de los segundos
    let segundos = fecha.getSeconds();
    if( segundos < 10 ){
        segundos = '0'+ segundos;
    }

    //imprimimos el reloj en el span
    txt.innerText = horas +':'+ minutos +':'+ segundos;
}

//invocamos la funciónmm reloj()
reloj();

//la función setInterval sirve para actualizar el llamado a una función
setInterval( reloj );