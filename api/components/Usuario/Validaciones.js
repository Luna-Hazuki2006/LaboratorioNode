import { ValidarCuerpoEntero } from "../../funciones/validaciones.js";
import { Usuario } from "../modelo.js";

const validarCedula = (request, response, next) => {
    if (!request.params.cedula) {
        next(new Error('Debe ingresar la cédula'));
    }
    next()
} 

const validarCuerpo = (request, response, next) => {
    const validables = Usuario.getAttributes()
    const error = ValidarCuerpoEntero(request, validables)
    if (error) next(new Error(error))
    next()
} 

export {validarCuerpo, validarCedula}