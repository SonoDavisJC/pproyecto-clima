/* Auntenticaion Clave API-KEY */
import { API_KEY } from './auth/auth.js';

/* Components */ 
import CardClima from './components/CardClimaActual.js';
import CardClimaFiveDays from './components/CardClimaFiveDays.js';
import CardCordenas from './components/CardCordenas.js';


const $form = document.getElementById('form-submit');
const $ciudad = document.getElementById('form-ciudad');
const $country = document.getElementById('form-pais');
const $section = document.querySelector('.section');
const $sectionCity = document.getElementById('result-city');
const $sectionCityDue = document.getElementById('result-city-DOS');
const $sectionCordenadas = document.getElementById('sectionCordenadas');
const $loader = document.getElementById('loader');
const $msgError = document.getElementById('msg-error');
const btnAnterior = document.getElementById('btnAnterior');
const btnPosterior = document.getElementById('btnPosterior');


$form.addEventListener('submit', e => {
    e.preventDefault();

    if($ciudad.value.length === 0 || $country.value.length === 0) {
        LimpiarSecciones()
        $msgError.innerHTML = 'Los campos deven estar completos';
        return;
    }
    $msgError.innerHTML = '';
    GetDatosMetereologicos($ciudad.value ,$country.value);
})


let indice = 0;

const GetDatosMetereologicos = async (ciudad, estado) => {
    try {
        LimpiarSecciones();
        $loader.style.display = 'block'

        let MetereologiaActual = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${estado}&APPID=${API_KEY}&units=metric&lang=es`;
        let MetereologicaFiveDays = `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad},${estado}&appid=${API_KEY}&units=metric&lang=es`;

        const Promise1 = await axios.get(MetereologiaActual);
        const Promise2 = await axios.get(MetereologicaFiveDays);
        
        
        Promise.all([Promise1, Promise2])
        .then(res => {
            let SectionCityHTML = CardClima(res[0].data);
            let SectionFiveHTML = CardClimaFiveDays(res[1].data, indice);
            let SectionCordHTML = CardCordenas(res[1].data.city);

            $loader.style.display = 'none';
            $section.style.gap = '8px';


            $sectionCity.innerHTML = SectionCityHTML;
            $sectionCityDue.innerHTML = SectionFiveHTML;
            $sectionCordenadas.innerHTML = SectionCordHTML;
           
            btnPosterior.style.display = 'block';
            btnAnterior.style.display = 'block';

            btnPosterior.addEventListener('click', e => {
                if(indice < res[1].data.list.length - 1) {
                    $sectionCityDue.innerHTML = CardClimaFiveDays(res[1].data, indice += 1);
                }
                /*
                else {
                    indice = 0;
                }
                */
               btnAnterior.removeAttribute('disabled', '');
                VerificaIndiceDeLista()

            });  

            btnAnterior.addEventListener('click', e => {
                if(indice <= res[1].data.list.length - 1) {
                    $sectionCityDue.innerHTML = CardClimaFiveDays(res[1].data, indice -= 1);
                }
                btnPosterior.removeAttribute('disabled', '');
                VerificaIndiceDeLista()
            });

           
        });

    }
    catch (error) {
        $loader.style.display = 'none'
        let resError = error.response.data;
        let mensajeError = resError.message || 'Ocurrio un error, lo sentimos';
        $msgError.innerHTML = `Error ${resError.cod} : ${mensajeError}`;

    }
}



function LimpiarSecciones() {
    $sectionCity.innerHTML = '';
    $sectionCityDue.innerHTML = '';
    $sectionCordenadas.innerHTML = '';
    btnAnterior.style.display = 'none';
    btnPosterior.style.display = 'none';
    $section.style.gap = '0px';
}

function VerificaIndiceDeLista() {
    if(indice === 0) {
        btnAnterior.setAttribute('disabled', '');
    }
    if(indice === 39) {
        btnPosterior.setAttribute('disabled', '');
    }
}