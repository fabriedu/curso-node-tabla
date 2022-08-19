const yargs = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv= require('./config/yargs');
const colors = require('colors');

console.clear();

//console.log(process.argv);
// console.log(argv);

// console.log('Base: yargs', arg.base);
// Obtengo el Argumento que se envía parámetro (NO se debe de hacer)
// const [ , , arg3 ='base=5'] = process.argv;
// const [ , base = 5 ] = arg3.split('=');
// const base = arg3;

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));