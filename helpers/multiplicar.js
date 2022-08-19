const fs = require('fs');
let colors = require('colors');

// Función con logica de promesa, se retorna la promesa  return new promise
// Utilizo el resolve y reject
// const crearArchivo = (base = 5 ) =>{    
//     return new Promise( (resolve, reject) =>{
//         console.log('==================');
//         console.log(`   Tabla Del ${ base }    `);
//         console.log('==================');    
    
//         let salida = '';
//         for (let index = 1; index <= 10; index++) {
//             salida +=` ${ base } x ${ index } = ${ base * index} \n`;
            
//         };
        
//         console.log(salida);
//         fs.writeFileSync(`tabla-${base}.txt`, salida);
        
//         resolve(`tabla-${base}.txt`);

//     })

// Función utilizando el Async
const crearArchivo = async(base = 5, listar = false, hasta = 10) =>{ 
    
    try {
        let salida = '';
        let consola = '';
        salida +=`==================\n`;
        salida +=`   Tabla Del ${ base }    \n`;
        salida +=`==================\n`;    

        consola +=`==================\n`.blue;
        consola +=`   Tabla Del ${ base }    \n`.yellow;
        consola +=`==================\n`.blue;    
        

        for (let index = 1; index <= hasta; index++) {
            salida +=` ${ base } x ${ index } = ${ base * index } \n`;
            consola +=` ${ colors.red(base) } ${'x'.cyan} ${ index } ${'='.magenta} ${ colors.green(base * index)} \n`;
            
        };
        
        if (listar){
            console.log(consola);
        }
        
        // Creo el Archivo
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt`;        
    } catch (error) {
        throw error;        
    } 

    
}
        
module.exports = {
    crearArchivo
}