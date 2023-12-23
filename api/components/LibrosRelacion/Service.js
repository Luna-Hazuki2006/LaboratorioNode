import { LibrosRelacion } from "./Modelo.js"

class LibrosRelacionServicio {
    async Crear(idLibro, idRelacion) {
        try {
            return await LibrosRelacion.create({
                idLibro,
                idRelacion
              });
        }
        catch(error) {
            throw error
        }
    }

    async Eliminar(idLibro, idRelacion) {
        try {
            return await LibrosRelacion.destroy({where: 
                {"idLibro": idLibro, "idRelacion": idRelacion}})
        } catch (error) {
            throw error
        }
    }

    async ListarPorLibro(idLibro) {
        try {
            return await LibrosRelacion.findAll({where: {"idLibro": idLibro}})
        } catch (error) {
            throw error
        }
    }

    async ListarPorRelacion(idRelacion) {
        try {
            return await LibrosRelacion.findAll({where: {"idRelacion": idRelacion}})
        } catch (error) {
            throw error
        }
    }
}

export {LibrosRelacionServicio}