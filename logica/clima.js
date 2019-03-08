//CONSUMIR LA API DEL CLIMA CON AXIOS

const axios = require('axios');


const funcionGrados = async(lat, lon) => {



    const r = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c75d7928a7cbab6a06f0d723dc8c6f30`);

    return ({
        t: r.data.main.temp
    })

}


module.exports = {
    funcionGrados
}