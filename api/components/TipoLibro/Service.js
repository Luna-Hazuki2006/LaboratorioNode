import { TipoLibro } from "../modelo.js"

class TipoLibroServicio {
    async Crear(nombre, descripcion) {
        try {
            return await TipoLibro.create({
                nombre,
                descripcion
              });
        }
        catch(error) {
            throw error
        }
    }

    async Modificar(id, nombre, descripcion) {
        try {
            return await TipoLibro.update({
                nombre, 
                descripcion
            }, {where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    async Eliminar(id) {
        try {
            return await TipoLibro.destroy({where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    async Consultar(id) {
        try {
            return await TipoLibro.findOne({where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    async Listar() {
        try {
            return await TipoLibro.findAll({})
        } catch (error) {
            throw error
        }
    }
}

export {TipoLibroServicio}