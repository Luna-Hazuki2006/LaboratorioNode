import { ValidarCuerpoEntero } from "../../funciones/validaciones.js";
import { LibrosAutor } from "../modelo.js";

const validarIdLibro = (request, response, next) => {
    if (!request.params.idLibro) {
        next(new Error('Debe ingresar la id del libro'));
    }
    if (isNaN(request.params.idLibro)) {
        next(new Error('La id del libro debe ser de tipo numérico'))
    }
    next()
} 

const validarIdAutor = (request, response, next) => {
    if (!request.params.idAutor) {
        next(new Error('Debe ingresar la id del autor'));
    }
    if (isNaN(request.params.idAutor)) {
        next(new Error('La id del autor debe ser de tipo numérico'))
    }
    next()
} 

const validarCuerpo = (request, response, next) => {
    const validables = LibrosAutor.getAttributes()
    const error = ValidarCuerpoEntero(request, validables)
    if (error) next(new Error(error))
    next()
} 

export {validarCuerpo, validarIdLibro, validarIdAutor}