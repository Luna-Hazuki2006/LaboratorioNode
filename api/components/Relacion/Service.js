import { Relaciones } from "../modelo.js"
import { TiposRelacionesServicio } from "../TiposRelaciones/Service.js";

class RelacionesServicio {
    async Crear(nombre, descripcion, idTiposRelaciones, idAutor) {
        try {
            const servicio = new TiposRelacionesServicio()
            const tipo = await servicio.Consultar(idTiposRelaciones)
            const relacion = await Relaciones.create({
                nombre,
                descripcion, 
                idTiposRelaciones, 
                idAutor
            });
            relacion.addTiposRelaciones(tipo)
        }
        catch(error) {
            throw error
        }
    }

    async Modificar(id, nombre, descripcion, idTiposRelaciones, idAutor) {
        try {
            return await Relaciones.update({
                nombre, 
                descripcion, 
                idTiposRelaciones, 
                idAutor
            }, {where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    async Eliminar(id) {
        try {
            return await Relaciones.destroy({where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    async Consultar(id) {
        try {
            return await Relaciones.findOne({where: {"id": id}, include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }

    async Listar() {
        try {
            return await Relaciones.findAll({include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }
}

export {RelacionesServicio}