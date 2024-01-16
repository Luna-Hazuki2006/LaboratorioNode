import { Sesion } from "../modelo.js"

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

    Nuevo(token) {
        try {
            return btoa(token)
        } catch (error) {
            throw error
        }
    }

    async Consultar(id) {
        try {
            return await Sesion.findOne({where: {"id": id}, include: [{ all: true }]})
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
            return await Sesion.findAll({where: {"usuarioCedula": usuarioCedula}, include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }

}

export {SesionServicio}