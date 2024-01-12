import { ValidarCuerpoEntero } from "../../funciones/validaciones.js";

const validarCedula = (request, response, next) => {
    if (!request.params.cedula) {
        next(new Error('Debe ingresar la cédula'));
    }
    next()
} 

const validarCuerpo = (request, response, next) => {
    const lista = []
    ValidarCuerpoEntero(request, lista)
    // if (!request.body.nombre) {
    //     next(new Error('Debe ingresar el nombre'));
    // }
    // if (!request.body.apellido) {
    //     next(new Error("Debe ingresar el apellido"))
    // }
    // if (!request.body.fechaNacimiento) {
    //     next(new Error("Debe ingresar la fecha de nacimiento"))
    // }
    // if (isNaN(Date.parse(request.body.fechaNacimiento))) {
    //     next(new Error("La fecha de nacimiento debe ser de tipo fecha"))
    // }
    // if (!request.body.direccion) {
    //     next(new Error("Debe ingresar la dirección"))
    // }
    // if (!request.body.correo) {
    //     next(new Error("Debe ingresar el correo"))
    // }
    // if (!request.body.contraseña) {
    //     next(new Error("Debe ingresar la contraseña"))
    // }
    // if (!request.body.idTipoUsuario) {
    //     next(new Error("Debe ingresar la id del tipo de usuario"))
    // }
    // if (isNaN(request.body.idTipoUsuario)) {
    //     next(new Error("La id del tipo de usuario debe ser de tipo numérico"))
    // }
    next()
} 

export {validarCuerpo, validarCedula}