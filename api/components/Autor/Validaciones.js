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
    const lista = []
    ValidarCuerpoEntero(request, lista)
    // if (!request.body.nombre) {
    //     next(new Error('Debe ingresar el nombre'));
    // }
    // if (!request.body.biografía) {
    //     next(new Error("Debe ingresar la biografía"))
    // }
    // if (!request.body.foto) {
    //     next(new Error("Debe ingresar un blob de la foto"))
    // }
    next()
} 

export {validarCuerpo, validarId}