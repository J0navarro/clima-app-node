const argv = require('yargs').options({
    direccion: {
        demand: true,
        alias: "d",
        desc: "Direccion de la ciudad"
    }
}).help().argv;

module.exports = {
    argv
}