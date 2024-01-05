function saludar (nombre){
    return `Hola ${nombre}`
}

function saludarHolaMundo (){
    return '¡Hola Mundo!'
}

//module.exports.saludar = saludar; //Ambos saludar son indepedientes, podrian tener otro nombre pero se aconseja poner el mismo.

//module.exports.saludarMundo = saludarHolaMundo

module.exports = {
    saludar : saludar,
    saludarMundo : saludarHolaMundo
}
