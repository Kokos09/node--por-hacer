
const descripcion={
    demand:true,
    alias:'d'
};
const completado={
    default: true,
    alias:'c'
}
const argv=require('yargs')
.command('crear','Crear un elemento por hacer',{
    descripcion
})
.command('actualizar','Actualizar el estado completado de una tarea',{
    descripcion,
    completado
})
.command('borrar','Borrar el estado completo de una tarea',{
    descripcion
})
.help()
.argv;

module.exports={
    argv
}