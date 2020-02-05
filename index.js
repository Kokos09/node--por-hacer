//const argv= require('yargs').argv;
const argv = require("./config/yargs").argv;
let comando= argv._[0];
const porHacer= require('./por-hacer/por-hacer');
const colors =require('colors');

//console.log(argv);
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado= porHacer.getListado();
        for(let tarea of listado){
            console.log('========Por Hacer========='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('=========================='.green);
        }
        break;
    case 'actualizar':
        let actualizar = porHacer.actualizar(argv.descripcion,argv.completado);
        console.log(actualizar);
        break;
    
    case 'borrar':
        let borrar=porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break;

    default:
        console.log('Comando no reconocido');
        break;
}