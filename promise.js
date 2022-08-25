// las promise 

const aplicarDescuento = new Promise((resolve,reject) => {
    setTimeout(() =>{
        let descuento = false;

        if (descuento){
            resolve('Se aplico el descuento');
        
        } else{
            reject('No se puedo aplicar el descuento')
        }
    }, 3000)
});

aplicarDescuento.then(resultado => {
    console.log(resultado)
}). catch(error => {
    console.log(error);
})

// console.log(aplicarDescuento);
//resolve ejecuta el llamado al promise cuando sea correcto 
// reject cuando sucede un error 