import { LibrosTipo } from "../modelo.js"

class LibrosTipoServicio {
    async Crear(idLibro, idTipoLibro) {
        try {
            return await LibrosTipo.create({
                idLibro,
                idTipoLibro
              });
        }
        catch(error) {
            throw error
        }
    }

    async Eliminar(idLibro, idTipoLibro) {
        try {
            return await LibrosTipo.destroy({where: 
                {"idLibro": idLibro, "idTipoLibro": idTipoLibro}})
        } catch (error) {
            throw error
        }
    }

    async ListarPorLibro(idLibro) {
        try {
            return await LibrosTipo.findAll({where: {"idLibro": idLibro}})
        } catch (error) {
            throw error
        }
    }

    async ListarPorTipoLibro(idTipoLibro) {
        try {
            return await LibrosTipo.findAll({where: {"idTipoLibro": idTipoLibro}})
        } catch (error) {
            throw error
        }
    }
}

export {LibrosTipoServicio}