//CONSUMIR LA API DEL CLIMA CON AXIOS

const axios = require('axios');




const funcionClima = async(direccion) => {


    //CREAR LOS HEADERS PARA CONSUMIR LA API

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${direccion}`,
        headers: { 'X-RapidAPI-Key': '0395aab373mshc3b7183760b3480p183466jsn12dcfc0268f1' }
    });

    //CONSUMIR LA API DEL CLIMA CON UN GET 
    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        reject(`no hay datos para mostrar`);


    } else {


        return ({

            d: resp.data.Results[0].name,
            la: resp.data.Results[0].lat,
            lo: resp.data.Results[0].lon

        })
    }

}


module.exports = {

    funcionClima: funcionClima
}