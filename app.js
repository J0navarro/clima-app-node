const argv = require('./config/yargs').argv;
const axios = require('./lugar/lugar');
const axiosClima = require('./lugar/clima');

// axios.getLugarLonLat(argv.d).then(console.log);

// axiosClima.getClima('9.070000', '-63.509998')
//     .then(console.log)
//     .catch(e => {
//         console.log('Error: ', e);
//     });

console.log(argv.d);

const getInfo = async(direccion) => {

    try {
        const coordenadas = await axios.getLugarLonLat(direccion);
        const temperatura = await axiosClima.getClima(coordenadas.lat, coordenadas.lng);

        return `El clima de ${direccion} es de ${temperatura}`;

    } catch (error) {
        return `Error: ${error}`;
    }

}

getInfo(argv.d).then(console.log).catch(console.log);