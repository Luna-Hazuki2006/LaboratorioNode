import { LibroCategoria } from "./Modelo.js"

class LibroCategoriaServicio {
    async Crear(idLibro, idCategoria) {
        try {
            return await LibroCategoria.create({
                idLibro,
                idCategoria
              });
        }
        catch(error) {
            throw error
        }
    }

    async Eliminar(idLibro, idCategoria) {
        try {
            return await LibroCategoria.destroy({where: 
                {"idLibro": idLibro, "idCategoria": idCategoria}})
        } catch (error) {
            throw error
        }
    }

    async ListarPorLibro(idLibro) {
        try {
            return await LibroCategoria.findAll({where: {"idLibro": idLibro}})
        } catch (error) {
            throw error
        }
    }

    async ListarPorCategoria(idCategoria) {
        try {
            return await LibroCategoria.findAll({where: {"idCategoria": idCategoria}})
        } catch (error) {
            throw error
        }
    }
}

export {LibroCategoriaServicio}