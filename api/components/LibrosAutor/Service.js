import { LibrosAutor } from "./Modelo.js"

class LibrosAutorServicio {
    async Crear(idLibro, idAutor) {
        try {
            return await LibrosAutor.create({
                idLibro,
                idAutor
              });
        }
        catch(error) {
            throw error
        }
    }

    async Eliminar(idLibro, idAutor) {
        try {
            return await LibrosAutor.destroy({where: 
                {"idLibro": idLibro, "idAutor": idAutor}})
        } catch (error) {
            throw error
        }
    }

    async ListarPorLibro(idLibro) {
        try {
            return await LibrosAutor.findAll({where: {"idLibro": idLibro}})
        } catch (error) {
            throw error
        }
    }

    async ListarPorAutor(idAutor) {
        try {
            return await LibrosAutor.findAll({where: {"idAutor": idAutor}})
        } catch (error) {
            throw error
        }
    }
}

export {LibrosAutorServicio}