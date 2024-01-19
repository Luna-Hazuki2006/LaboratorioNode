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
    // modificar esta validación sin el middleware original
    if (!request?.body) {
        next(new Error("Se necesita tener el cuerpo de la request"))
    } 
    if (!request.body.contraseña) {
        next(new Error("Se necesita tener la contraseña"))
    }
    if (!request.body.usuarioCedula) {
        next(new Error("Se necesita la cédula del usuario"))
    }
    if (typeof request.body.usuarioCedula != "string") {
        next(new Error("La cédula de usuario debe ser de tipo string"))
    }
    if (request.body.usuarioCedula.trim() == "") {
        next(new Error("La cédula de usuario no puede ser vacía"))
    }
    next()
} 

export {validarCuerpo, validarId, validarUsuario}