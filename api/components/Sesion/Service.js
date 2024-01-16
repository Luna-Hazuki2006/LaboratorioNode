import { Sesion } from "../modelo.js"
import { UsuarioServicio } from "../Usuario/Service.js";

class SesionServicio {
    async Crear(contraseña, usuarioCedula) {
        try {
            let token = {
                "fecha": (new Date()).getMilliseconds(), 
                "cédula": usuarioCedula, 
                "duración en minutos": 5, 
                "Información importante": Math.random().toString()
            }
            const servicio = new UsuarioServicio()
            const usuario = await servicio.Consultar(usuarioCedula)
            const sesion = await Sesion.create({
                token, 
                fechaSesion, 
                usuarioCedula
            });
            await usuario.addSesion(sesion)
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

    async Cerrar(id) {
        try {
            return await Sesion.destroy({where: {"id": id}})
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