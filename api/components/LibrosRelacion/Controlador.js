import { LibrosRelacionServicio } from "./Service.js";

class LibrosRelacionControlador {

    async Crear(request, response) {
        try { 
            const servicio = new LibrosRelacionServicio();
            const {idLibro, idRelacion} = request.body;
            const relacion = await servicio.Crear(idLibro, idRelacion);
            
            if (relacion) {
                response.status(200).json({data: relacion});
            }
            else {
                response.status(400).send('no hay datos u otro mensaje');
            }
        }
        catch(error) {
            response.status(500).send(error)
        }
    }

    async Eliminar(request, response) {
        try { 
            const servicio = new LibrosRelacionServicio();
            const {idLibro, idRelacion} = request.body;
            const relacion = await servicio.Eliminar(idLibro, idRelacion);
            
            if (relacion) {
                response.status(200).json({data: "Se eliminó con éxito el relacion del libro"});
            }
            else {
                response.status(400).send('no hay datos u otro mensaje');
            }
        }
        catch(error) {
            response.status(500).send(error)
        }
    }

    async ListarPorLibro(request, response) {
        try { 
            const servicio = new LibrosRelacionServicio();
            const idLibro = request.params.idLibro
            const data = await servicio.ListarPorLibro(idLibro);
            
            if (data) {
                response.status(200).json({data: data});
            }
            else {
                response.status(400).send('No se encuentran relaciones en este libro');
            }
        }
        catch(error) {
            response.status(500).send(error)
        }
    }

    async ListarPorRelacion(request, response) {
        try {
            const servicio = new LibrosRelacionServicio();
            const idRelacion = request.params.idRelacion
            const data = await servicio.ListarPorRelacion(idRelacion)
            if (data) {
                response.status(200).json({"data": data})
            } else {
                response.status(400).send("No se encuentran libros con esta relación")
            }
        } catch (error) {
            response.status(500).send(error)
        }
    }
}

export {LibrosRelacionControlador}