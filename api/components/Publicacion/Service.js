import { Publicacion } from "../modelo.js"

class PublicacionServicio {
    async Crear(descripcion, cedulaUsuario, idLibro) {
        try {
            return await Publicacion.create({
                descripcion, 
                cedulaUsuario, 
                idLibro
              });
        }
        catch(error) {
            throw error
        }
    }

    async Modificar(id, descripcion, cedulaUsuario, idLibro) {
        try {
            return await Publicacion.update({
                descripcion, 
                cedulaUsuario, 
                idLibro
            }, {where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    async Eliminar(id) {
        try {
            return await Publicacion.destroy({where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    async Consultar(id) {
        try {
            return await Publicacion.findOne({where: {"id": id}, include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }

    async Listar() {
        try {
            return await Publicacion.findAll({include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }
}

export {PublicacionServicio}