import { LibrosTipoServicio } from "./Service.js";

class LibrosTiposControlador {

    async Crear(request, response) {
        try { 
            const servicio = new LibrosTipoServicio();
            const {idLibro, idTipoLibro} = request.body;
            const Tiposlibros = await servicio.Crear(idLibro, idTipoLibro);
            
            if (Tiposlibros) {
                response.status(200).json({data: Tiposlibros});
            }
            else {
                response.status(400).send('no hay datos u otro mensaje');
            }
        }
        catch(error) {
            response.status(400).send(error)
        }
    }

    async Eliminar(request, response) {
        try { 
            const servicio = new LibrosTipoServicio();
            const {idLibro, idTipoLibro} = request.body;
            const libro = await servicio.Eliminar(idLibro, idTipoLibro);
            
            if (libro) {
                response.status(200).json({data: "Se eliminó con éxito el tipo del libro"});
            }
            else {
                response.status(400).send('no hay datos u otro mensaje');
            }
        }
        catch(error) {
            response.status(400).send(error)
        }
    }

    async ListarPorLibro(request, response) {
        try { 
            const servicio = new LibrosTipoServicio();
            const idLibro = request.params.idLibro
            const data = await servicio.ListarPorLibro(idLibro);
            
            if (data) {
                response.status(200).json({data: data});
            }
            else {
                response.status(400).send('No se encuentran libros con este tipo');
            }
        }
        catch(error) {
            response.status(400).send(error)
        }
    }

    async ListarPorTipoLibros(request, response) {
        try {
            const servicio = new LibrosTipoServicio();
            const idTipoLibro = request.params.idTipoLibro
            const data = await servicio.ListarPorTipoLibro(idTipoLibro)
            if (data) {
                response.status(200).json({"data": data})
            } else {
                response.status(400).send("No se encuentran libros con este tipo")
            }
        } catch (error) {
            response.status(400).send(error)
        }
    }
}

export {LibrosTiposControlador}