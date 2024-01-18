import { Publicacion } from "../modelo.js"
import { UsuarioServicio } from "../Usuario/Service.js";
import { LibroServicio } from "../Libro/Service.js";

class PublicacionServicio {
    async Crear(descripcion, cedulaUsuario, idLibro) {
        try {
            const servicioUsuario = new UsuarioServicio()
            const servicioLibro = new LibroServicio()
            const usuario = await servicioUsuario.Consultar(cedulaUsuario)
            const libro = await servicioLibro.Consultar(idLibro)
            const publicacion = await Publicacion.create({
                descripcion, 
            });
            publicacion.addUsuario(usuario)
            publicacion.addLibro(libro)
            return publicacion
        }
        catch(error) {
            throw error
        }
    }

    async Modificar(id, descripcion) {
        try {
            return await Publicacion.update({
                descripcion, 
                cedulaUsuario, 
                idLibro
            }, {where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    async Eliminar(id) {
        try {
            return await Publicacion.destroy({where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    async Consultar(id) {
        try {
            return await Publicacion.findOne({where: {"id": id}, include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }

    async Listar() {
        try {
            return await Publicacion.findAll({include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }
}

export {PublicacionServicio}