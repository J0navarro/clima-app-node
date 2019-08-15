const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4133bef12ca90c0ebd72fec08df20c65`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}