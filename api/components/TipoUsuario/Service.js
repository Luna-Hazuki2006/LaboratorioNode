import { TipoUsuario } from "../modelo.js"

class TipoUsuarioServicio {
    async Crear(nombre, descripcion, estatus) {
        try {
            return await TipoUsuario.create({
                nombre,
                descripcion, 
                estatus
              });
        }
        catch(error) {
            throw error
        }
    }

    async Modificar(id, nombre, descripcion, estatus) {
        try {
            return await TipoUsuario.update({
                nombre, 
                descripcion, 
                estatus
            }, {where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    async Eliminar(id) {
        try {
            return await TipoUsuario.destroy({where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    async Consultar(id) {
        try {
            return await TipoUsuario.findOne({where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    async Listar() {
        try {
            return await TipoUsuario.findAll({})
        } catch (error) {
            throw error
        }
    }
}

export {TipoUsuarioServicio}