import { ValidarCuerpoEntero } from "../../funciones/validaciones.js";
import { Libro } from "../modelo.js";

const validarId = (request, response, next) => {
    if (!request.params.id) {
        next(new Error('Debe ingresar la id'));
    }
    if (isNaN(request.params.id)) {
        next(new Error('La id debe ser de tipo numérico'))
    }
    next()
} 

const validarCuerpo = (request, response, next) => {
    const validables = Libro.getAttributes()
    const error = ValidarCuerpoEntero(request, validables)
    if (error) next(new Error(error))
    // if (!request.body.nombre) {
    //     next(new Error('Debe ingresar el nombre'));
    // }
    // if (!request.body.sinopsis) {
    //     next(new Error("Debe ingresar la sinopsis"))
    // }
    next()
} 

export {validarCuerpo, validarId}