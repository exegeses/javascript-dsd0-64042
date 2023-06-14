//ubicamos elementos dentro del DOM
const txtDias = document.querySelector('#txtDias');
const txtHoras = document.querySelector('#txtHoras');
const txtMinutos = document.querySelector('#txtMinutos');
const txtSegundos = document.querySelector('#txtSegundos');

//declaramos funcion/es de control
function cuenta()
{
    //creramos objetos de fecha
    const ahora = new Date();
        console.log(ahora.getTime());
    const final = new Date(2023, 5, 21); //invierno
        console.log(final.getTime());

    //diferencia entre los dos momentos de fecha
    let diferencia = final - ahora;
        console.log(diferencia);
    /*  la diferencia (resta) es un número 
    expresado en formato UNIX TIMESTAMP
    que es el tiempo en MILISEGUNDOS desde el 01/01/1970
     */

    //obtenemos el tiempo expresado en segundos
        //y quetamos los decimales
    let segundos = Math.trunc( diferencia/1000 );
        console.log( 'segundos: ' + segundos );

    //obtenemos el tiempo expresado en minutos
    let minutos = Math.trunc( segundos/60 );
        console.log( 'minutos: ' + minutos);

    //obtenemos el tiempo expresado en horas
    let horas = Math.trunc( minutos/60 );
        console.log( 'horas: ' + horas);

    //obtenemos el tiempo expresado en días
    let dias = Math.trunc( horas/24 )
        console.log( 'dias: ' + dias);


    /* calculamos el restante de horas, minutos, segundos */
    //segundos = segundos - (minutos*60);
    segundos = segundos%60;
        console.log (segundos);
    //minutos = minutos - (horas*60);
    minutos = minutos%60;
        console.log (minutos);
    //horas = horas - (dias*24);
    horas = horas%24;
        console.log (horas);
        console.log (dias);

    if( segundos < 10 ){
        segundos = '0'+ segundos;
    }
    if( minutos < 10 ){
        minutos = '0'+ minutos;
    }
    if( horas < 10 ){
        horas = '0'+ horas;
    }
    if( dias < 10 ){
        dias = '0'+ dias;
    }


    //imprimimos en los span
    txtSegundos.innerText = segundos;
    txtMinutos.innerText = minutos;
    txtHoras.innerText = horas;
    txtDias.innerText = dias;

}

//invocamos a nuestra función
cuenta();
setInterval( cuenta )