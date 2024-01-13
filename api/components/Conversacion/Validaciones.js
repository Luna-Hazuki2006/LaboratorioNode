import { ValidarCuerpoEntero } from "../../funciones/validaciones.js";
import { Conversacion } from "../modelo.js";

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
    const validables = Conversacion.getAttributes()
    const error = ValidarCuerpoEntero(request, validables)
    if (error) next(new Error(error))
    next()
} 

export {validarCuerpo, validarId, validarPublicacionId, validarUsuarioCedula}