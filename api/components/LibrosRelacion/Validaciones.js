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
    if (!request.body.idLibro) {
        next(new Error('Debe ingresar la id del libro'));
    }
    if (isNaN(request.body.idLibro)) {
        next(new Error('La id del libro debe ser de tipo numérico'))
    }
    if (!request.body.idRelacion) {
        next(new Error("Debe ingresar la id de la relación"))
    }
    if (isNaN(request.body.idRelacion)) {
        next(new Error('La id de la relación debe ser de tipo numérico'))
    }
    next()
} 

export {validarCuerpo, validarIdLibro, validarIdRelacion}