//ubicamos elemento dentro del documento
const contenedor = document.getElementById('contenedor');

//hacer una pregunta al usuario y 
//almacenar la respuesta en una variable
let respuesta = prompt('¿Qué selección ganó el mundial de Qatar?');

//contenedor.innerText = respuesta;
if( respuesta == 'Argentina' || respuesta == 'argentina'  ){
    //código a ejecutar, si la condición es true
    //contenedor.innerText = 'Correcto';
    contenedor.innerHTML = '<img src="imgs/ok.png">';
}
else{
    //código a ejecutar, si la condición es false
    //contenedor.innerText = 'Incorrecto';
    contenedor.innerHTML = '<img src="imgs/error.png">';
}
