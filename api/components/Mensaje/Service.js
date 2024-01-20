import { Mensaje } from "../modelo.js"
import { UsuarioServicio } from "../Usuario/Service.js";
import { ConversacionServicio } from "../Conversacion/Service.js";

class MensajeServicio {
    async Crear(fecha, texto, usuarioCedula, conversacionId) {
        try {
            const servicioUsuario = new UsuarioServicio()
            const servicioConversacion = new ConversacionServicio()
            const usuario = await servicioUsuario.Consultar(usuarioCedula)
            const conversacion = await servicioConversacion.Consultar(conversacionId)
            if (usuario && conversacion) {
                const mensaje = await Mensaje.create({
                    fecha, 
                    texto, 
                    usuarioCedula, 
                    conversacionId
                });
                return mensaje
            }
        }
        catch(error) {
            throw error
        }
    }

    async Consultar(conversacionId, id) {
        try {
            return await Mensaje.findOne({
                where: {
                    "conversacionId": conversacionId, 
                    "id": id
                }, include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }

    async ListarPorUsuario(conversacionId, usuarioCedula) {
        try {
            return await Mensaje.findAll({
                where: 
                {
                    "conversacionId": conversacionId, 
                    "usuarioCedula": usuarioCedula
                }, include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }

    async ListarPorConversacion(conversacionId) {
        try {
            return await Mensaje.findAll({where: {"conversacionId": conversacionId}})
        } catch (error) {
            throw error
        }
    }


}

export {MensajeServicio}