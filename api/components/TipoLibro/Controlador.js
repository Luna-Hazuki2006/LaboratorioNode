import { TipoLibroServicio } from "./Service.js";

class TipoLibroControlador {

    async Crear(request, response) {
        try { 
            const servicio = new TipoLibroServicio();
            const {nombre, descripcion} = request.body;
            const tipolibro = await servicio.Crear(nombre, descripcion);
            
            if (tipolibro) {
                response.status(200).json({data: tipolibro});
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
            const servicio = new TipoLibroServicio();
            const {nombre, descripcion} = request.body;
            const id = request.params.id
            const tipolibro = await servicio.Modificar(id, nombre, descripcion);
            
            if (tipolibro) {
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
            const servicio = new TipoLibroServicio();
            const id = request.params.id
            const tipolibro = await servicio.Eliminar(id);
            
            if (tipolibro) {
                response.status(200).json({data: "Se eliminó con éxito el tipo de libro"});
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
            const servicio = new TipoLibroServicio();
            const id = request.params.id
            const tipolibro = await servicio.Consultar(id);
            
            if (tipolibro) {
                response.status(200).json({data: tipolibro});
            }
            else {
                response.status(400).send('No se encuentra el tipo de libro');
            }
        }
        catch(error) {
            response.status(500).send(error)
        }
    }

    async Listar(request, response) {
        try {
            const servicio = new TipoLibroServicio();
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

export {TipoLibroControlador}