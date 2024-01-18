import { Relaciones } from "../modelo.js"
import { TiposRelacionesServicio } from "../TiposRelaciones/Service.js";
import { AutorServicio } from "../Autor/Service.js";

class RelacionesServicio {
    async Crear(nombre, descripcion, idTiposRelaciones, idAutor) {
        try {
            const servicioTipo = new TiposRelacionesServicio()
            const servicioAutor = new AutorServicio()
            const autor = await servicioAutor.Consultar(idAutor)
            const tipo = await servicioTipo.Consultar(idTiposRelaciones)
            const relacion = await Relaciones.create({
                nombre,
                descripcion, 
            });
            relacion.addTiposRelaciones(tipo)
            relacion.addAutores(autor)
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

    async ConsultarMultiples(ids) {
        try {
            return await Relaciones.findAll({where: {"id": {in: ids}}, include: [{ all: true }]})
        } catch (error) {
            
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