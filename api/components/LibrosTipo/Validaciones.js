import { ValidarCuerpoEntero } from "../../funciones/validaciones.js";

const validarIdLibro = (request, response, next) => {
    if (!request.params.idLibro) {
        next(new Error('Debe ingresar la id de libro'));
    }
    if (isNaN(request.params.idLibro)) {
        next(new Error('La id de libro debe ser de tipo numérico'))
    }
    next()
} 

const validarIdTipoLibro = (request, response, next) => {
    if (!request.params.idTipoLibro) {
        next(new Error('Debe ingresar la id del tipo de libro'));
    }
    if (isNaN(request.params.idTipoLibro)) {
        next(new Error('La id del tipo de libro debe ser de tipo numérico'))
    }
    next()
} 

const validarCuerpo = (request, response, next) => {
    ValidarCuerpoEntero(request, response, next)
    // if (!request.body.idLibro) {
    //     next(new Error('Debe ingresar la id del libro'));
    // }
    // if (isNaN(request.body.idLibro)) {
    //     next(new Error('La id de libro debe ser de tipo numérico'))
    // }
    // if (!request.body.idTipoLibro) {
    //     next(new Error("Debe ingresar la id del tipo de libro"))
    // }
    // if (isNaN(request.body.idTipoLibro)) {
    //     next(new Error('La id del tipo de libro debe ser de tipo numérico'))
    // }
    next()
} 

export {validarCuerpo, validarIdLibro, validarIdTipoLibro}