//ubicamos elementos dentro del DOM
const redbull = document.querySelector('#redbull');
const ferrari = document.querySelector('#ferrari');
const amartin = document.querySelector('#amartin');
const mercedes = document.querySelector('#mercedes');

/* estado inicial */
ferrari.style.display = 'none';
amartin.style.display = 'none';
mercedes.style.display = 'none';

//declaramos función/es de control

function mostrarTeam( team )
{
    if( team == 'redbull' ){
        redbull.style.display = 'flex';
        ferrari.style.display = 'none';
        amartin.style.display = 'none';
        mercedes.style.display = 'none';
    }
    else if( team == 'ferrari' ){
        redbull.style.display = 'none';
        ferrari.style.display = 'flex';
        amartin.style.display = 'none';
        mercedes.style.display = 'none';
    }
    else if( team == 'amartin' ){
        redbull.style.display = 'none';
        ferrari.style.display = 'none';
        amartin.style.display = 'flex';
        mercedes.style.display = 'none';
    }
    else if( team == 'mercedes' ){
        redbull.style.display = 'none';
        ferrari.style.display = 'none';
        amartin.style.display = 'none';
        mercedes.style.display = 'flex';
    }
}