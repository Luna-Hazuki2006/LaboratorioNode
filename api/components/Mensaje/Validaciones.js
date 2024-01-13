import { ValidarCuerpoEntero } from "../../funciones/validaciones.js";
import { Mensaje } from "../modelo.js";

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
    const validables = Mensaje.getAttributes()
    const error = ValidarCuerpoEntero(request, validables)
    if (error) next(new Error(error))
    next()
} 

export {validarCuerpo, validarId, validarConversacionId, validarUsuarioCedula}