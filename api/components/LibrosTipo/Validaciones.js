import { ValidarCuerpoEntero } from "../../funciones/validaciones.js";
import { LibrosTipo } from "../modelo.js";

const validarIdLibro = (request, response, next) => {
    if (!request.params.idLibro) {
        next(new Error('Debe ingresar la id de libro'));
    }
    if (isNaN(request.params.idLibro)) {
        next(new Error('La id de libro debe ser de tipo numérico'))
    }
    next()
} 

const validarIdTipoLibro = (request, response, next) => {
    if (!request.params.idTipoLibro) {
        next(new Error('Debe ingresar la id del tipo de libro'));
    }
    if (isNaN(request.params.idTipoLibro)) {
        next(new Error('La id del tipo de libro debe ser de tipo numérico'))
    }
    next()
} 

const validarCuerpo = (request, response, next) => {
    const validables = LibrosTipo.getAttributes()
    const error = ValidarCuerpoEntero(request, validables)
    if (error) next(new Error(error))
    next()
} 

export {validarCuerpo, validarIdLibro, validarIdTipoLibro}