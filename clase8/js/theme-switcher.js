//ubicamos elementos dentro del DOM
const btnSwitcher = document.querySelector('#switcher figure');
const imgSwitch = document.querySelector('img[alt="switch"]');
const imgModo = document.querySelector('img[alt="modo oscuro"]');
const theme = document.querySelector('link[href="css/dark.css"]');

//variable auxiliar
let modo = 'dark';


//escuchamos el evento click para cambiar el tema
btnSwitcher.addEventListener(
            'click',
            function()
            {
                if( modo == 'dark' ){
                    theme.href = 'css/light.css';
                    imgSwitch.src = 'imgs/light.png';
                    imgModo.src = 'imgs/day-mode.png';
                    modo = 'light';
                }
                else{
                    theme.href = 'css/dark.css';
                    imgSwitch.src = 'imgs/dark.png';
                    imgModo.src = 'imgs/night-mode.png';
                    modo = 'dark';
                }                
            }
);