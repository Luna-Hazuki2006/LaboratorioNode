import { Sesion } from "../modelo.js"
import { UsuarioServicio } from "../Usuario/Service.js";

class SesionServicio {
    async Crear(contraseña, cedulaUsuario) {
        try {
            let tokenReal = {
                "fecha": (new Date()).getMilliseconds(), 
                "cédula": cedulaUsuario, 
                "duración en minutos": 5, 
                "Información importante": Math.random().toString()
            }
            let token = tokenReal["Información importante"]
            const servicio = new UsuarioServicio()
            const usuario = await servicio.Consultar(cedulaUsuario)
            if (usuario.dataValues.contraseña == contraseña) {
                await Sesion.create({
                    token, 
                    fechaSesion: new Date(), 
                    cedulaUsuario
                });
                // await usuario.addSesion(sesion)
            }
            return this.Nuevo(JSON.stringify(tokenReal))
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

    async ListarPorUsuario(cedulaUsuario) {
        try {
            return await Sesion.findAll({where: {"cedulaUsuario": cedulaUsuario}, include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }

}

export {SesionServicio}