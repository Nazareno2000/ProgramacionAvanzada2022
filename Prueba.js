const API_KEY = 'd0642ac7cc0da9857032aec40f63e10e'
const ciudad = "Concepcion del uruguay"
const api = (`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${API_KEY}`)

const getCiudades = async() => {
    try {
        const clima = await fetch(api);
        const data = await clima.json()
        console.log(`Nombre: ${data.name} / Temperatura: ${data.main.temp} / Humedad: ${data.main.humidity} / Estado: ${data.weather[0].description}`)
    } catch (error) {
        console.log('No se encuentra la ciudad ', error)
    };

}
getCiudades();