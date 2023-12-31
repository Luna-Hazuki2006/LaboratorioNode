import { Conversacion } from "./Modelo.js"

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
            return await Conversacion.findOne({where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    async ListarPorUsuario(usuarioCedula) {
        try {
            return await Conversacion.findAll({where: {"usuarioCedula": usuarioCedula}})
        } catch (error) {
            throw error
        }
    }

    async ListarPorPublicacion(publicacionId) {
        try {
            return await Conversacion.findAll({where: {"publicacionId": publicacionId}})
        } catch (error) {
            throw error
        }
    }


}

export {ConversacionServicio}