const validarId = (request, response, next) => {
    if (!request.params.id) {
        next(new Error('Debe ingresar la id'));
    }
    if (isNaN(request.params.id)) {
        next(new Error('La id debe ser tipo numérico'))
    }
    next()
} 

const validarCuerpo = (request, response, next) => {
    if (!request.body.fecha) {
        next(new Error('Debe ingresar la fecha'));
    }
    if (isNaN(Date.parse(request.body.fecha))) {
        next(new Error('La fecha debe ser de tipo fecha'))
    }
    if (!request.body.cedulaUsuario) {
        next(new Error("Debe ingresar la cedula de usuario"))
    }
    if (!request.body.idPublicacion) {
        next(new Error("Debe ingresar la id de la publicación"))
    }
    if (isNaN(request.body.idPublicacion)) {
        next(new Error('La id de la publicación debe ser de tipo numérico'))
    }
    next()
} 

export {validarCuerpo, validarId}