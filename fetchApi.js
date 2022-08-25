// cuando trabajamos con url 
//parametros estaticos se generan constante

const apiKey= "MV3GYULtH77dGX4dMc8yBqWVDWJqq5IH"

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`)

peticion
    .then(resp => resp.json())
    .then(({data}) => {
        // console.log(data.images.original.url)


    const {url} = data.images.original
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
    })
    .catch (console.warn)
