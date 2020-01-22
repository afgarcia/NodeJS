const fs = require('fs');
// El tercer parametro es el primer ejemplo de una funcion callback
// Lo que significa es que al terminar la funcion ejecuta esa función.
fs.writeFile('./texto.txt', 'Primera linea', function(err){
    if (err){
        console.log('Error: ' + err);
    }else{
        console.log('Archivo creado');
    }
})
//primero se visualiza está linea debido a que el código es asincrono.
//Ya que el delega la tarea al sistema operativo la accion de crear el archivo
//mientras tanto NodeJS sigue con la siguiente linea de codigo.
console.log('Ultima linea de codigo');
