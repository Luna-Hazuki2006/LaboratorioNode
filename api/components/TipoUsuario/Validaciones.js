import { ValidarCuerpoEntero } from "../../funciones/validaciones.js";

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
    ValidarCuerpoEntero(request, response, next)
    // if (!request.body.nombre) {
    //     next(new Error('Debe ingresar el nombre'));
    // }
    // if (!request.body.descripcion) {
    //     next(new Error("Debe ingresar el descripción"))
    // }
    // if (!request.body.estatus) {
    //     next(new Error("Debe ingresar el estatus"))
    // }
    next()
} 

export {validarCuerpo, validarId}