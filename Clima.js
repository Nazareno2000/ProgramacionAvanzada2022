const API_KEY= 'd0642ac7cc0da9857032aec40f63e10e'
const ciudad= 'Concepcion del uruguay'
const api= `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${API_KEY}` 

const getImage = async() => {
    try {
         const respuesta = await fetch(api);
         const {data} = await  respuesta.json()
         const {Nombre} = data.name; //{} descompone
         const {humedad}= data.main.humidity;
         const {temperatura}= data.main.temp
         const {estado} =data.weather[0].description
 
         const imgNombre = document.createElement('imgNombre')
         const imgHumedad = document.createElement('imgHumedad')
         const imgTemperatura = document.createElement('imgTemperatura')
         const imgEstado = document.createElement('imgEstado')
         
         imgNombre.src= Nombre
         imgHumedad.src= humedad
         imgTemperatura.src= temperatura
         imgEstado.src= estado

         document.body.append(imgNombre)
         document.body.append(imgHumedad)
         document.body.append(imgTemperatura)
         document.body.append(imgEstado)

    } catch (error) {
      console.log('hubo un error en la peticion', error)
    }
 
 
 }
 getImage();