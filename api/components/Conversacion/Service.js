import { Conversacion } from "../modelo.js"
import { PublicacionServicio } from "../Publicacion/Service.js";
import { UsuarioServicio } from "../Usuario/Service.js";

class ConversacionServicio {
    async Crear(fecha, usuarioCedula, publicacionId) {
        try {
            const servicioPublicacion = new PublicacionServicio()
            const servicioUsuario = new UsuarioServicio()
            const usuario = await servicioUsuario.Consultar(usuarioCedula)
            const publicacion = await servicioPublicacion.Consultar(publicacionId)
            const conversacion = await Conversacion.create({
                fecha, 
            });
            conversacion.addUsuario(usuario)
            conversacion.addPublicacion(publicacion)
            return conversacion
        }
        catch(error) {
            throw error
        }
    }

    async Consultar(id) {
        try {
            return await Conversacion.findOne({where: {"id": id}, include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }

    async ListarPorUsuario(usuarioCedula) {
        try {
            return await Conversacion.findAll({where: {"usuarioCedula": usuarioCedula}, 
                                                include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }

    async ListarPorPublicacion(publicacionId) {
        try {
            return await Conversacion.findAll({where: {"publicacionId": publicacionId}, 
                                                include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }


}

export {ConversacionServicio}