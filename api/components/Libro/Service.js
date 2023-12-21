import { Libro } from "./Modelo.js"

class LibroServicio {
    async Crear(nombre, sinopsis) {
        try {
            return await Libro.create({
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
            return await Libro.findOne({where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    async Listar() {
        try {
            return await Libro.findAll({})
        } catch (error) {
            throw error
        }
    }
}

export {LibroServicio}