import { LibrosTipos } from "./Modelo.js"

class LibrosTiposServicio {
    async Crear(idLibro, idTipoLibro) {
        try {
            return await LibrosTipos.create({
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
            return await LibrosTipos.destroy({where: 
                {"idLibro": idLibro, "idTipoLibro": idTipoLibro}})
        } catch (error) {
            throw error
        }
    }

    async ListarPorLibro(idLibro) {
        try {
            return await LibrosTipos.findAll({where: {"idLibro": idLibro}})
        } catch (error) {
            throw error
        }
    }

    async ListarPorTipoLibro(idTipoLibro) {
        try {
            return await LibrosTipos.findAll({where: {"idTipoLibro": idTipoLibro}})
        } catch (error) {
            throw error
        }
    }
}

export {LibrosTiposServicio}