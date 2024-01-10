import { TipoUsuarioServicio } from "./Service.js";

class TipoUsuarioControlador {

    async Crear(request, response) {
        try { 
            const servicio = new TipoUsuarioServicio();
            const {nombre, descripcion, estatus} = request.body;
            const tipousuario = await servicio.Crear(nombre, descripcion, estatus);
            
            if (tipousuario) {
                response.status(200).json({data: tipousuario});
            }
            else {
                response.status(400).send('no hay datos u otro mensaje');
            }
        }
        catch(error) {
            response.status(400).send(error)
        }
    }

    async Modificar(request, response) {
        try { 
            const servicio = new TipoUsuarioServicio();
            const {nombre, descripcion, estatus} = request.body;
            const id = request.params.id
            const tipousuario = await servicio.Modificar(id, nombre, descripcion, estatus);
            
            if (tipousuario) {
                response.status(200).json({data: "Se modificó con éxito :D"});
            }
            else {
                response.status(400).send('Hubo un problema al modificar');
            }
        }
        catch(error) {
            response.status(400).send(error)
        }
    }

    async Eliminar(request, response) {
        try { 
            const servicio = new TipoUsuarioServicio();
            const id = request.params.id
            const tipousuario = await servicio.Eliminar(id);
            
            if (tipousuario) {
                response.status(200).json({data: "Se eliminó con éxito el tipo de usuario"});
            }
            else {
                response.status(400).send('no hay datos u otro mensaje');
            }
        }
        catch(error) {
            response.status(400).send(error)
        }
    }

    async Consultar(request, response) {
        try { 
            const servicio = new TipoUsuarioServicio();
            const id = request.params.id
            const tipousuario = await servicio.Consultar(id);
            
            if (tipousuario) {
                response.status(200).json({data: tipousuario});
            }
            else {
                response.status(400).send('No se encuentra el tipo de usuario');
            }
        }
        catch(error) {
            response.status(400).send(error)
        }
    }

    async Listar(request, response) {
        try {
            const servicio = new TipoUsuarioServicio();
            const data = await servicio.Listar()
            if (data) {
                response.status(200).json({"data": data})
            } else {
                response.status(400).send("no hay datos y otro mensaje")
            }
        } catch (error) {
            response.status(400).send(error)
        }
    }
}

export {TipoUsuarioControlador}