import { Conversacion } from "../modelo.js"

class ConversacionServicio {
    async Crear(fecha, usuarioCedula, publicacionId) {
        try {
            return await Conversacion.create({
                fecha, 
                usuarioCedula, 
                publicacionId
              });
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