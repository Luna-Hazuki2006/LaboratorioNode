import { Usuario } from "../modelo.js"
import { TipoUsuarioServicio } from "../TipoUsuario/Service.js";

class UsuarioServicio {
    async Crear(cedula, nombre, apellido, fechaNacimiento, direccion, correo, contraseña, idTipoUsuario) {
        try {
            const servicio = new TipoUsuarioServicio()
            const tipo = await servicio.Consultar(idTipoUsuario)
            const usuario = await Usuario.create({
                cedula, 
                nombre,
                apellido, 
                fechaNacimiento, 
                direccion, 
                correo, 
                contraseña, 
                idTipoUsuario
            });
            // usuario.addTipoUsuario(tipo)
            return usuario
        }
        catch(error) {
            throw error
        }
    }

    async Modificar(cedula, nombre, apellido, fechaNacimiento, direccion, correo, contraseña) {
        try {
            await Usuario.update({
                nombre, 
                apellido, 
                fechaNacimiento, 
                direccion, 
                correo, 
                contraseña, 
            }, {where: {"cedula": cedula}})
        } catch (error) {
            throw error
        }
    }

    async Consultar(cedula) {
        try {
            return await Usuario.findOne({where: {"cedula": cedula}, include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }

    async Listar() {
        try {
            return await Usuario.findAll({include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }
}

export {UsuarioServicio}