const validarIdLibro = (request, response, next) => {
    if (!request.params.idLibro) {
        next(new Error('Debe ingresar la id'));
    }
    if (isNaN(request.params.idLibro)) {
        next(new Error('La id debe ser de tipo numérico'))
    }
    next()
} 

const validarIdTipoLibro = (request, response, next) => {
    if (!request.params.idTipoLibro) {
        next(new Error('Debe ingresar la id'));
    }
    if (isNaN(request.params.idTipoLibro)) {
        next(new Error('La id debe ser de tipo numérico'))
    }
    next()
} 

const validarCuerpo = (request, response, next) => {
    if (!request.body.idLibro) {
        next(new Error('Debe ingresar el nombre'));
    }
    if (isNaN(request.body.idLibro)) {
        next(new Error('La id debe ser de tipo numérico'))
    }
    if (!request.body.idTipoLibro) {
        next(new Error("Debe ingresar la sinopsis"))
    }
    if (isNaN(request.body.idTipoLibro)) {
        next(new Error('La id debe ser de tipo numérico'))
    }
    next()
} 

export {validarCuerpo, validarIdLibro, validarIdTipoLibro}