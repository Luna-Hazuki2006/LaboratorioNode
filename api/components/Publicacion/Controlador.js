import { PublicacionServicio } from "./Service.js";

class PublicacionControlador {

    async Crear(request, response) {
        try { 
            const servicio = new PublicacionServicio();
            const {descripcion, cedulaUsuario, idLibro} = request.body;
            const publicaciones = await servicio.Crear(descripcion, cedulaUsuario, idLibro);
            
            if (publicaciones) {
                response.status(200).json({data: publicaciones});
            }
            else {
                response.status(400).send('no hay datos u otro mensaje');
            }
        }
        catch(error) {
            response.status(500).send(error)
        }
    }

    async Modificar(request, response) {
        try { 
            const servicio = new PublicacionServicio();
            const {descripcion, cedulaUsuario, idLibro} = request.body;
            const id = request.params.id
            const publicaciones = await servicio.Modificar(id, descripcion, cedulaUsuario, idLibro);
            
            if (publicaciones) {
                response.status(200).json({data: "Se modificó con éxito :D"});
            }
            else {
                response.status(400).send('Hubo un problema al modificar');
            }
        }
        catch(error) {
            response.status(500).send(error)
        }
    }

    async Eliminar(request, response) {
        try { 
            const servicio = new PublicacionServicio();
            const id = request.params.id
            const publicaciones = await servicio.Eliminar(id);
            
            if (publicaciones) {
                response.status(200).json({data: "Se eliminó con éxito las publicaciones"});
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
            const servicio = new PublicacionServicio();
            const id = request.params.id
            const publicaciones = await servicio.Consultar(id);
            
            if (publicaciones) {
                response.status(200).json({data: publicaciones});
            }
            else {
                response.status(400).send('No se encuentra la publicación');
            }
        }
        catch(error) {
            response.status(500).send(error)
        }
    }

    async Listar(request, response) {
        try {
            const servicio = new PublicacionServicio();
            const data = await servicio.Listar()
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

export {PublicacionControlador}