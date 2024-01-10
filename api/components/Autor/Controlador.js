import { AutorServicio } from "./Service.js";

class AutorControlador {
    async Crear(request, response) {
        try { 
            const servicio = new AutorServicio();
            const {nombre, biografía, foto} = request.body;
            const autor = await servicio.Crear(nombre, biografía, foto);
            
            if (autor) {
                response.status(200).json({data: autor});
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
            const servicio = new AutorServicio();
            const {nombre, biografía, foto} = request.body;
            const id = request.params.id
            const autor = await servicio.Modificar(id, nombre, biografía, foto);
            
            if (autor) {
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
            const servicio = new AutorServicio();
            const id = request.params.id
            const autor = await servicio.Eliminar(id);
            
            if (autor) {
                response.status(200).json({data: "Se eliminó con éxito el autor"});
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
            const servicio = new AutorServicio();
            const id = request.params.id
            const autor = await servicio.Consultar(id);
            
            if (autor) {
                response.status(200).json({data: autor});
            }
            else {
                response.status(400).send('No se encuentra el autor');
            }
        }
        catch(error) {
            response.status(400).send(error)
        }
    }

    async Listar(request, response) {
        try {
            const servicio = new AutorServicio();
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

export {AutorControlador}