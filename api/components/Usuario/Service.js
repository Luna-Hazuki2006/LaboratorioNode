import { Usuario } from "./Modelo.js"

class UsuarioServicio {
    async Crear(nombre, apellido, fechaNacimiento, direccion, correo, contraseña, idTipoUsuario) {
        try {
            return await Usuario.create({
                nombre,
                apellido, 
                fechaNacimiento, 
                direccion, 
                correo, 
                contraseña, 
                idTipoUsuario
              });
        }
        catch(error) {
            throw error
        }
    }

    async Modificar(cedula, nombre, apellido, fechaNacimiento, direccion, correo, contraseña, idTipoUsuario) {
        try {
            return await Usuario.update({
                nombre, 
                apellido, 
                fechaNacimiento, 
                direccion, 
                correo, 
                contraseña, 
                idTipoUsuario
            }, {where: {"cedula": cedula}})
        } catch (error) {
            throw error
        }
    }

    async Consultar(cedula) {
        try {
            return await Usuario.findOne({where: {"cedula": cedula}})
        } catch (error) {
            throw error
        }
    }

    async Listar() {
        try {
            return await Usuario.findAll({})
        } catch (error) {
            throw error
        }
    }
}

export {UsuarioServicio}