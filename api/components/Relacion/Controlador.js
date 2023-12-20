import { RelacionesServicio } from "./Service.js";

class RelacionesControlador {

    async Crear(request, response) {
        try { 
            const servicio = new RelacionesServicio();
            const {nombre, descripcion, idTiposRelaciones, idAutor} = request.body;
            const relaciones = await servicio.Crear(nombre, descripcion, idTiposRelaciones, idAutor);
            
            if (relaciones) {
                response.status(200).json({data: relaciones});
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
            const servicio = new RelacionesServicio();
            const {nombre, descripcion, idTiposRelaciones, idAutor} = request.body;
            const id = request.params.id
            const relaciones = await servicio.Modificar(id, nombre, descripcion, idTiposRelaciones, idAutor);
            
            if (relaciones) {
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
            const servicio = new RelacionesServicio();
            const id = request.params.id
            const relaciones = await servicio.Eliminar(id);
            
            if (relaciones) {
                response.status(200).json({data: "Se eliminó con éxito las relaciones"});
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
            const servicio = new RelacionesServicio();
            const id = request.params.id
            const relaciones = await servicio.Consultar(id);
            
            if (relaciones) {
                response.status(200).json({data: relaciones});
            }
            else {
                response.status(400).send('No se encuentra el tipo de relación');
            }
        }
        catch(error) {
            response.status(500).send(error)
        }
    }

    async Listar(request, response) {
        try {
            const servicio = new RelacionesServicio();
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

export {RelacionesControlador}