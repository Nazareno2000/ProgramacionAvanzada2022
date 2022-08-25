const personas=[
    { nombre: 'Nazareno', edad : 20, puesto :'Frontend'},
    { nombre: 'Mateo', edad : 21, puesto :'Backend'},
    { nombre: 'Lucas', edad : 22, puesto :'Pm'},
    { nombre: 'Mariano', edad : 23, puesto :'Cm'},
    { nombre: 'Felipe', edad : 24, puesto :'Po'},
];

console.log(personas)

const mayores =  personas.filter(persona  => {
    return persona.nombre[0] === 'N';
})

console.log(mayores)

const eli = personas.find(persona =>{
    return persona.nombre === 'Felipe';
});

console.log(`la persona es ${eli.nombre}`)