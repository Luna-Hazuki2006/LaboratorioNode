import { ConversacionServicio } from "./Service.js";

class ConversacionControlador {

    async Crear(request, response) {
        try { 
            const servicio = new ConversacionServicio();
            const {fecha, usuarioCedula, publicacionId} = request.body;
            const conversacion = await servicio.Crear(fecha, usuarioCedula, publicacionId);
            
            if (conversacion) {
                response.status(200).json({data: conversacion});
            }
            else {
                response.status(400).send('no hay datos u otro mensaje');
            }
        }
        catch(error) {
            response.status(500).send(error)
        }
    }

    async Consultar(request, response) {
        try { 
            const servicio = new ConversacionServicio();
            const id = request.params.id
            const conversacion = await servicio.Consultar(id);
            
            if (conversacion) {
                response.status(200).json({data: conversacion});
            }
            else {
                response.status(400).send('No se encuentra la publicación');
            }
        }
        catch(error) {
            response.status(500).send(error)
        }
    }

    async ListarPorUsuario(request, response) {
        try {
            const servicio = new ConversacionServicio();
            const usuarioCedula = request.params.usuarioCedula
            const data = await servicio.Listar(usuarioCedula)
            if (data) {
                response.status(200).json({"data": data})
            } else {
                response.status(400).send("no hay datos y otro mensaje")
            }
        } catch (error) {
            response.status(500).send(error)
        }
    }

    async ListarPorPublicacion(request, response) {
        try {
            const servicio = new ConversacionServicio();
            const publicacionId = request.params.publicacionId
            const data = await servicio.Listar(publicacionId)
            if (data) {
                response.status(200).json({"data": data})
            } else {
                response.status(400).send("no hay datos y otro mensaje")
            }
        } catch (error) {
            response.status(500).send(error)
        }
    }
}

export {ConversacionControlador}