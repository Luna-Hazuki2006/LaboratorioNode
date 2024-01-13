import { Mensaje } from "../modelo.js"

class MensajeServicio {
    async Crear(fecha, texto, usuarioCedula, conversacionId) {
        try {
            return await Mensaje.create({
                fecha, 
                texto, 
                usuarioCedula, 
                conversacionId
              });
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
                }, include: [{ all: true, nested: true }]})
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
                }, include: [{ all: true, nested: true }]})
        } catch (error) {
            throw error
        }
    }

    async ListarPorConversacion(conversacionId) {
        try {
            return await Mensaje.findAll({where: {"conversacionId": conversacionId}, 
                                            include: [{ all: true, nested: true }]})
        } catch (error) {
            throw error
        }
    }


}

export {MensajeServicio}