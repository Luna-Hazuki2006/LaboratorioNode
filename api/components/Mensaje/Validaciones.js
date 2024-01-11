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

const validarConversacionId = (request, response, next) => {
    if (!request.params.conversacionId) {
        next(new Error('Debe ingresar la id de la conversación'));
    }
    if (isNaN(request.params.conversacionId)) {
        next(new Error('La id de la conversación debe ser de tipo numérico'))
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
    // if (!request.body.texto) {
    //     next(new Error("Debe ingresar el texto del mensaje"))
    // }
    // if (!request.body.usuarioCedula) {
    //     next(new Error("Debe ingresar la cédula del usuario"))
    // }
    // if (!request.body.conversacionId) {
    //     next(new Error("Debe ingresar la id de la conversación"))
    // }
    // if (isNaN(request.body.conversacionId)) {
    //     next(new Error('La id de la conversación debe ser de tipo numérico'))
    // }
    next()
} 

export {validarCuerpo, validarId, validarConversacionId, validarUsuarioCedula}