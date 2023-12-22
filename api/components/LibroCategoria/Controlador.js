import { LibroCategoriaServicio } from "./Service.js";

class LibroCategoriaControlador {

    async Crear(request, response) {
        try { 
            const servicio = new LibroCategoriaServicio();
            const {idLibro, idCategoria} = request.body;
            const categoria = await servicio.Crear(idLibro, idCategoria);
            
            if (categoria) {
                response.status(200).json({data: categoria});
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
            const servicio = new LibroCategoriaServicio();
            const {idLibro, idCategoria} = request.body;
            const categoria = await servicio.Eliminar(idLibro, idCategoria);
            
            if (categoria) {
                response.status(200).json({data: "Se eliminó con éxito la categoría del libro"});
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
            const servicio = new LibroCategoriaServicio();
            const idLibro = request.params.idLibro
            const data = await servicio.ListarPorLibro(idLibro);
            
            if (data) {
                response.status(200).json({data: data});
            }
            else {
                response.status(400).send('No se encuentran categorías en este libro');
            }
        }
        catch(error) {
            response.status(500).send(error)
        }
    }

    async ListarPorCategoria(request, response) {
        try {
            const servicio = new LibroCategoriaServicio();
            const idCategoria = request.params.idCategoria
            const data = await servicio.ListarPorCategoria(idCategoria)
            if (data) {
                response.status(200).json({"data": data})
            } else {
                response.status(400).send("No se encuentran libros con esta categoría")
            }
        } catch (error) {
            response.status(500).send(error)
        }
    }
}

export {LibroCategoriaControlador}