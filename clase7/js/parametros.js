//ubicamos elemento dentro del DOM
const caja = document.querySelector('#caja');

//declaramos función/es de control

function pintar( colores, nombreColor )
{
    caja.style.backgroundColor = colores;
    caja.innerText = nombreColor;
}


