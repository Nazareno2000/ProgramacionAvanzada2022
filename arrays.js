//los atributos no cambian 

const carrito =['product1','produxto2','producto3']

console.log(carrito)

carrito.map(producto=> {
    return 'el producto es ' + producto;
});


//query selector

const appContenedor = document.querySelector('#app')

//inner html renderiza todo lo encuentre  
//en cierre de comillas simple

// let html = ''

// carrito.forEach(producto => {
//     html += `
//     <li>${producto}</li>`;

// });

// appContenedor.innerHTML = html