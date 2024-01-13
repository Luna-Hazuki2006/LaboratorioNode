import { ValidarCuerpoEntero } from "../../funciones/validaciones.js";
import { LibrosRelacion } from "../modelo.js";

const validarIdLibro = (request, response, next) => {
    if (!request.params.idLibro) {
        next(new Error('Debe ingresar la id del libro'));
    }
    if (isNaN(request.params.idLibro)) {
        next(new Error('La id del libro debe ser de tipo numérico'))
    }
    next()
} 

const validarIdRelacion = (request, response, next) => {
    if (!request.params.idRelacion) {
        next(new Error('Debe ingresar la id de la relación'));
    }
    if (isNaN(request.params.idRelacion)) {
        next(new Error('La id de la relación debe ser de tipo numérico'))
    }
    next()
} 

const validarCuerpo = (request, response, next) => {
    const validables = LibrosRelacion.getAttributes()
    const error = ValidarCuerpoEntero(request, validables)
    if (error) next(new Error(error))
    next()
} 

export {validarCuerpo, validarIdLibro, validarIdRelacion}