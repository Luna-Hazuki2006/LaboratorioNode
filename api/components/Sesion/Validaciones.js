import { ValidarCuerpoEntero } from "../../funciones/validaciones.js";
import { Sesion } from "../modelo.js";

const validarId = (request, response, next) => {
    if (!request.params.id) {
        next(new Error('Debe ingresar la id'));
    }
    if (isNaN(request.params.id)) {
        next(new Error('La id debe ser tipo numérico'))
    }
    next()
} 

const validarUsuario = (request, response, next) => {
    if (!request.params.cedulaUsuario) {
        next(new Error('Debe ingresar la id'));
    }
    next()
} 

const validarCuerpo = (request, response, next) => {
    const validables = Sesion.getAttributes()
    const error = ValidarCuerpoEntero(request, validables)
    if (error) next(new Error(error))
    next()
} 

export {validarCuerpo, validarId, validarUsuario}