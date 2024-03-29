import { ValidarCuerpoEntero } from "../../funciones/validaciones.js";
import { LibroCategoria } from "../modelo.js";

const validarIdLibro = (request, response, next) => {
    if (!request.params.idLibro) {
        next(new Error('Debe ingresar la id del libro'));
    }
    if (isNaN(request.params.idLibro)) {
        next(new Error('La id del libro debe ser de tipo numérico'))
    }
    next()
} 

const validarIdCategoria = (request, response, next) => {
    if (!request.params.idCategoria) {
        next(new Error('Debe ingresar la id de la categoría'));
    }
    if (isNaN(request.params.idCategoria)) {
        next(new Error('La id de la categoría debe ser de tipo numérico'))
    }
    next()
} 

const validarCuerpo = (request, response, next) => {
    const validables = LibroCategoria.getAttributes()
    const error = ValidarCuerpoEntero(request, validables)
    if (error) next(new Error(error))
    next()
} 

export {validarCuerpo, validarIdLibro, validarIdCategoria}