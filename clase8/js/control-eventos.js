//ubicamos elemento/s dentro del DOM
const txt = document.querySelector('#txt');
const enlace2 = document.querySelector('#enlace2');


/* para poder "escuchar" el click u otro evento de mouse
   tenemos el método addEventListener('evento', acción)
 */
enlace2.addEventListener(
                'click', 
                function()
                { 
                    txt.innerText = 'hiciste click en 2do botón';
                });

enlace2.addEventListener(
                'mouseover',
                function()
                {
                    txt.innerText = 'mouse sobre en 2do botón';
                }
);
enlace2.addEventListener(
                'mouseout',
                function()
                {
                    txt.innerText = 'mouse fuera en 2do botón';
                }
);