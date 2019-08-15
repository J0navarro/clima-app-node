const axios = require("axios");

const getLugarLonLat = async(direccion) => {

    const encodeUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,

        headers: { 'X-RapidAPI-Key': '63b93b5ca5mshf3c2f6ae8308691p136eadjsnea4b12a60228' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];

    const direccionNombre = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccionNombre,
        lat,
        lng
    }
}
module.exports = {
    getLugarLonLat
}