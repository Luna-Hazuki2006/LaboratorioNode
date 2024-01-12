import { ValidarCuerpoEntero } from "../../funciones/validaciones.js";

const validarId = (request, response, next) => {
    if (!request.params.id) {
        next(new Error('Debe ingresar la id'));
    }
    if (isNaN(request.params.id)) {
        next(new Error('La id debe ser tipo numérico'))
    }
    next()
} 

const validarCuerpo = (request, response, next) => {
    const lista = []
    ValidarCuerpoEntero(request, lista)
    // if (!request.body.descripcion) {
    //     next(new Error('Debe ingresar la descripción'));
    // }
    // if (!request.body.cedulaUsuario) {
    //     next(new Error("Debe ingresar la cedula de usuario"))
    // }
    // if (!request.body.idLibro) {
    //     next(new Error("Debe ingresar la id del libro"))
    // }
    // if (isNaN(request.body.idLibro)) {
    //     next(new Error('La id del libro debe ser de tipo numérico'))
    // }
    next()
} 

export {validarCuerpo, validarId}