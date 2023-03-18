const CardClima = ({name, sys, main, wind, weather }) => {

    let imagen = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;

    return `<div style="padding: 10px;" class="section__information climactual">
        <p style="font-weight: bold; padding-inline-start: 23px;">
        <i class="fa-sharp fa-solid fa-circle-info"></i>
        En estos momentos : </p>
        <div class="climactual__iformacion-uno">
            <figure>
                <img src="${imagen}" alt="Icono de Clima" title="imagen clima" /> 
            </figure>
            <div> 
                <p style="font-size: 50px" >${main.temp} °C </p>
                <p>${weather[0].main}, ${weather[0].description}</p>
            </div>
        </div>
        <div class="climactual__iformacion-dos">
            <p style="font-size: 26px; text-align: center">
            <i class="fa-solid fa-location-dot"></i> ${name}, ${sys.country}</p>
            <br />
            <div>
                <div>
                    <p>Temp maxima: ${main.temp_max} ºC </p>
                    <p>Temp minima: ${main.temp_min} ºC </p>
                    <p>Humedad : ${main.humidity}% </p>
                </div>
                <div>
                    <p>Feels Like : ${main.feels_like} ºC </p>
                    <p>Presion : ${main.pressure}hPa </p>
                    <p>Velocidad de Viento : ${wind.speed}m/s </p>
                </div>
            </div>
        </div>
    </div>`
}
export default CardClima;