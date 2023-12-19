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
    if (!request.body.nombre) {
        next(new Error('Debe ingresar el nombre'));
    }
    if (!request.body.apellido) {
        next(new Error("Debe ingresar el apellido"))
    }
    if (!request.body.fechaNacimiento) {
        next(new Error("Debe ingresar la fecha de nacimiento"))
    }
    if (isNaN(Date.parse(request.body.fechaNacimiento))) {
        next(new Error("La fecha de nacimiento debe ser de tipo fecha"))
    }
    if (!request.body.direccion) {
        next(new Error("Debe ingresar la dirección"))
    }
    if (!request.body.correo) {
        next(new Error("Debe ingresar el correo"))
    }
    if (!request.body.contraseña) {
        next(new Error("Debe ingresar la contraseña"))
    }
    next()
} 

export {validarCuerpo, validarId}