import { ValidarCuerpoEntero } from "../../funciones/validaciones.js";
import { TipoLibro } from "../modelo.js";

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
    // if (!request?.body) {
    //     next(new Error('Debe ingresar el body de la request'));
    // }
    // if (!request?.body?.nombre?.trim()) {
    //     next(new Error('Debe ingresar el nombre'));
    // }
    // if (request.body.nombre.trim() == '') {
    //     next(new Error('El nombre tiene que tener texto'));
    // }
    // if (!request?.body?.descripcion?.trim()) {
    //     next(new Error("Debe ingresar el descripción"))
    // }
    // if (request.body.descripcion.trim() == '') {
    //     next(new Error('La descripción tiene que tener texto'));
    // }
    const validables = TipoLibro.getAttributes()
    const error = ValidarCuerpoEntero(request, validables)
    if (error) next(new Error(error))
    next()
} 

export {validarId, validarCuerpo}

// investigar una forma de ingresar a las propiedades de un objeto 
// y verificar que los datos no sean null
// un mensaje mas customizable
// sin tener que llamarlos directamente en las validaciones
// va a ser una función encapsulada