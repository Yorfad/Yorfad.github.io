

try {
    console.log(suma(1, s))

} catch (e) {
    // sentencias para manejar cualquier excepción
    logMyErrors(e); // pasa el objeto de la excepción al manejador de errores
}


function suma (a, b){
    resultado = a + b
    return resultado
}