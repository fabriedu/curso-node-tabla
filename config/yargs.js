const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la Base de la tabla de Multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',    
        dafaul: 10,
        describe: 'Define hasta que número se muestra la Tabla'
    })    
    .option('l', {
        alias: 'listar',
        type: 'boolean',        
        default: false,
        describe: 'Muestra la Tabla en Consola'
    })
    
    .check( (arg, options) =>{
        if( isNaN(arg.base) ){
            throw 'La base tiene que ser un número'            
        }
        return true
    })
    .argv;
    
    // Exporto el Module para utilizarlo en App.js
    module.exports = argv;