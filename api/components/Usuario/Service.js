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

    async Modificar(id, nombre, apellido, fechaNacimiento, direccion, correo, contraseña, idTipoUsuario) {
        try {
            return await Usuario.update({
                nombre, 
                apellido, 
                fechaNacimiento, 
                direccion, 
                correo, 
                contraseña, 
                idTipoUsuario
            }, {where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    // async Eliminar(id) {
    //     try {
    //         return await Usuario.destroy({where: {"id": id}})
    //     } catch (error) {
    //         throw error
    //     }
    // }

    async Consultar(id) {
        try {
            return await Usuario.findOne({where: {"id": id}})
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