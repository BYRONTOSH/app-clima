const { funcionClima, fu } = require('./logica/lugares')


const { funcionGrados } = require('./logica/clima')



const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'DESCRIPCIÓN DEL CLIMA'
    }
}).argv



//MADAR ARGUMENTOS A LA URL 

//const encodeURL = encodeURI(argv.direccion);

let la = 0;
let lo = 0;
let prueba = funcionClima(argv.direccion).then((e) => {
    a = console.log(e);
    la = e.la;
    lo = e.lo;
}).then(funcionGrados(la, lo).then((t) => {
    console.log(`EL CLIMA DE ${argv.direccion} ES DE ${t.t} °C`);
})).catch((e) => {
    console.log(e);
})