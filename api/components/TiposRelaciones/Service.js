import { TiposRelaciones } from "../modelo.js"

class TiposRelacionesServicio {
    async Crear(nombre, descripcion) {
        try {
            return await TiposRelaciones.create({
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
            return await TiposRelaciones.update({
                nombre, 
                descripcion
            }, {where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    async Eliminar(id) {
        try {
            return await TiposRelaciones.destroy({where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    async Consultar(id) {
        try {
            return await TiposRelaciones.findOne({where: {"id": id}, include: [{ all: true, nested: true }]})
        } catch (error) {
            throw error
        }
    }

    async Listar() {
        try {
            return await TiposRelaciones.findAll({include: [{ all: true, nested: true }]})
        } catch (error) {
            throw error
        }
    }
}

export {TiposRelacionesServicio}