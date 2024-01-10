import { TiposRelacionesServicio } from "./Service.js";

class TiposRelacionesControlador {

    async Crear(request, response) {
        try { 
            const servicio = new TiposRelacionesServicio();
            const {nombre, descripcion} = request.body;
            const tiposrelaciones = await servicio.Crear(nombre, descripcion);
            
            if (tiposrelaciones) {
                response.status(200).json({data: tiposrelaciones});
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
            const servicio = new TiposRelacionesServicio();
            const {nombre, descripcion} = request.body;
            const id = request.params.id
            const tiposrelaciones = await servicio.Modificar(id, nombre, descripcion);
            
            if (tiposrelaciones) {
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
            const servicio = new TiposRelacionesServicio();
            const id = request.params.id
            const tiposrelaciones = await servicio.Eliminar(id);
            
            if (tiposrelaciones) {
                response.status(200).json({data: "Se eliminó con éxito el tipo de relación"});
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
            const servicio = new TiposRelacionesServicio();
            const id = request.params.id
            const tiposrelaciones = await servicio.Consultar(id);
            
            if (tiposrelaciones) {
                response.status(200).json({data: tiposrelaciones});
            }
            else {
                response.status(400).send('No se encuentra el tipo de relación');
            }
        }
        catch(error) {
            response.status(400).send(error)
        }
    }

    async Listar(request, response) {
        try {
            const servicio = new TiposRelacionesServicio();
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

export {TiposRelacionesControlador}