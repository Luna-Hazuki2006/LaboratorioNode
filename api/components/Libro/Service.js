import { Libro } from "../modelo.js"
import { LibroCategoriaServicio } from "../LibroCategoria/Service.js";
import { LibrosAutorServicio } from "../LibrosAutor/Service.js";
import { LibrosTipoServicio } from "../LibrosTipo/Service.js";
import { LibrosRelacionServicio } from "../LibrosRelacion/Service.js";

class LibroServicio {
    async Crear(nombre, sinopsis) {
        try {
            const libro = await Libro.create({
                nombre,
                sinopsis
            });
        }
        catch(error) {
            throw error
        }
    }

    async Modificar(id, nombre, sinopsis) {
        try {
            return await Libro.update({
                nombre, 
                sinopsis
            }, {where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    async Eliminar(id) {
        try {
            return await Libro.destroy({where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    async Consultar(id) {
        try {
            return await Libro.findOne({where: {"id": id}, include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }

    async Listar() {
        try {
            return await Libro.findAll({include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }
}

export {LibroServicio}