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
    // if (!request.body.token) {
    //     next(new Error('Debe ingresar el token'));
    // }
    // if (!request.body.fechaSesion) {
    //     next(new Error("Debe ingresar la fecha de la sesión"))
    // }
    // if (isNaN(Date.parse(request.body.fechaSesion))) {
    //     next(new Error("La fecha de la sesión debe ser de tipo fecha"))
    // }
    // if (!request.body.cedulaUsuario) {
    //     next(new Error("Debe ingresar la cédula de usuario"))
    // }
    next()
} 

export {validarCuerpo, validarId, validarUsuario}