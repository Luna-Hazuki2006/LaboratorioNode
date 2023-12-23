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
    if (!request.body.idLibro) {
        next(new Error('Debe ingresar la id del libro'));
    }
    if (isNaN(request.body.idLibro)) {
        next(new Error('La id del libro debe ser de tipo numérico'))
    }
    if (!request.body.idCategoria) {
        next(new Error("Debe ingresar la id de la categoría"))
    }
    if (isNaN(request.body.idCategoria)) {
        next(new Error('La id de la categoría debe ser de tipo numérico'))
    }
    next()
} 

export {validarCuerpo, validarIdLibro, validarIdCategoria}