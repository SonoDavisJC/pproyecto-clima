const CardCordenadas = ({coord, population}) => {

    return `<div class="section__information">
        <p style="font-weight: bold; padding-inline-start: 23px;"><i class="fa-sharp fa-solid fa-circle-info"></i> Información Adicional</p>
        <br />
        <div class="informacion" style="">
            <div>
                <div>
                    <p>Población Aproximada :</p>
                    <p>${population === 0 ? 'No detectado' : population}</p>
                </div>
                <div>
                    <p>Cordeenadas :</p>
                    <p>Latidud: ${coord.lat}</p>
                    <p>Longitud: ${coord.lon}</p>
                </div>
            </div>
        </div>
    </div>`
}
export default CardCordenadas;