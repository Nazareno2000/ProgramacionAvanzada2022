const APIKEY= "MV3GYULtH77dGX4dMc8yBqWVDWJqq5IH"

const api = (`https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&tag=&rating=g`)

const getImage = async() => {
   try {
        const respuesta = await fetch(api);
        const {data} = await  respuesta.json()
        const {url} = data.images.original; //{} descompone

        const img = document.createElement('img')
        img.src= url
        document.body.append(img)
   } catch (error) {
     console.log('hubo un error en la peticion', error)
   }


}
getImage();