import { Sesion } from "./Modelo.js"

class SesionServicio {
    async Crear(token, fechaSesion, usuarioCedula) {
        try {
            return await Sesion.create({
                token, 
                fechaSesion, 
                usuarioCedula
              });
        }
        catch(error) {
            throw error
        }
    }

    async Consultar(id) {
        try {
            return await Sesion.findOne({where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    async Cerrar(id, fechaFin) {
        try {
            return await Sesion.update({
                fechaFin
            }, {where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    async ListarPorUsuario(usuarioCedula) {
        try {
            return await Sesion.findAll({where: {"usuarioCedula": usuarioCedula}})
        } catch (error) {
            throw error
        }
    }

}

export {SesionServicio}