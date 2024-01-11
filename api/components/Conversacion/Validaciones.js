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

const validarUsuarioCedula = (request, response, next) => {
    if (!request.params.usuarioCedula) {
        next(new Error('Debe ingresar la cédula del usuario'));
    }
    next()
} 

const validarPublicacionId = (request, response, next) => {
    if (!request.params.publicacionId) {
        next(new Error('Debe ingresar la id de la publicación'));
    }
    if (isNaN(request.params.publicacionId)) {
        next(new Error('La id de la publicación debe ser de tipo numérico'))
    }
    next()
} 

const validarCuerpo = (request, response, next) => {
    ValidarCuerpoEntero(request, response, next)
    // if (!request.body.fecha) {
    //     next(new Error('Debe ingresar la fecha'));
    // }
    // if (isNaN(Date.parse(request.body.fecha))) {
    //     next(new Error('La fecha debe ser de tipo fecha'))
    // }
    // if (!request.body.usuarioCedula) {
    //     next(new Error("Debe ingresar la cedula de usuario"))
    // }
    // if (!request.body.publicacionId) {
    //     next(new Error("Debe ingresar la id de la publicación"))
    // }
    // if (isNaN(request.body.publicacionId)) {
    //     next(new Error('La id de la publicación debe ser de tipo numérico'))
    // }
    next()
} 

export {validarCuerpo, validarId, validarPublicacionId, validarUsuarioCedula}