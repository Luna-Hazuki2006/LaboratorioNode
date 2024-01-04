import { MensajeServicio } from "./Service.js";

class MensajeControlador {

    async Crear(request, response) {
        try { 
            const servicio = new MensajeServicio();
            const {fecha, texto, usuarioCedula, conversacionId} = request.body;
            const mensaje = await servicio.Crear(fecha, texto, usuarioCedula, conversacionId);
            
            if (mensaje) {
                response.status(200).json({data: mensaje});
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
            const servicio = new MensajeServicio();
            const id = request.params.id
            const mensaje = await servicio.Consultar(id);
            
            if (mensaje) {
                response.status(200).json({data: mensaje});
            }
            else {
                response.status(400).send('No se encuentra el mensaje');
            }
        }
        catch(error) {
            response.status(500).send(error)
        }
    }

    async ListarPorUsuario(request, response) {
        try {
            const servicio = new MensajeServicio();
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

    async ListarPorConversacion(request, response) {
        try {
            const servicio = new MensajeServicio();
            const conversacionId = request.params.conversacionId
            const data = await servicio.Listar(conversacionId)
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

export {MensajeControlador}