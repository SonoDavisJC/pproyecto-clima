const CardClimaFiveDays = ({list}, indice) => {

    let { main , weather, wind , dt_txt } = list[indice]
    let imagen = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    
    function ModFecha(fechadia) {
        let arr = fechadia.split(' ');
        return `<i class="fa-regular fa-calendar"></i> ${arr[0]}  /  <i class="fa-sharp fa-regular fa-clock"></i> ${arr[1].slice(0,5)} hrs`;
    }

    return `<div style="padding: 10px;" class="section__information climaFiveDias">
        <p style="font-weight: bold;"><i class="fa-sharp fa-solid fa-circle-info"></i> Clima en los proximos 5 dias : </p>
        <br />
        <div>
            <div>
                <figure>
                    <img src="${imagen}" alt="icon clima" width="80px" title="imagen clima"/>
                    <p style="font-size: 20px">${main.temp} °C</p>
                </figure>
                <p>${weather[0].main}, ${weather[0].description}</p>
                <p>${ModFecha(dt_txt)}</p>
            </div>
            <div>
                <p>Temperatura Minima : ${main.temp_min} ºC </p>
                <p>Temperatura Maxima : ${main.temp_max} ºC </p>
                <p>Humedad : ${main.humidity}%</p>
                <p>Presion: ${main.pressure}hPa</>
                <p>Rafaga de Viento : ${wind.gust}m/s</p>
                <p>Velocidad de Viento : ${wind.speed}m/s</p>
            </div>
        </div>
    </div>`
}
export default CardClimaFiveDays;