import { LibrosAutorServicio } from "./Service.js";

class LibrosAutorControlador {

    async Crear(request, response) {
        try { 
            const servicio = new LibrosAutorServicio();
            const {idLibro, idAutor} = request.body;
            const autor = await servicio.Crear(idLibro, idAutor);
            
            if (autor) {
                response.status(200).json({data: autor});
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
            const servicio = new LibrosAutorServicio();
            const {idLibro, idAutor} = request.body;
            const autor = await servicio.Eliminar(idLibro, idAutor);
            
            if (autor) {
                response.status(200).json({data: "Se eliminó con éxito el autor del libro"});
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
            const servicio = new LibrosAutorServicio();
            const idLibro = request.params.idLibro
            const data = await servicio.ListarPorLibro(idLibro);
            
            if (data) {
                response.status(200).json({data: data});
            }
            else {
                response.status(400).send('No se encuentran autores en este libro');
            }
        }
        catch(error) {
            response.status(500).send(error)
        }
    }

    async ListarPorAutor(request, response) {
        try {
            const servicio = new LibrosAutorServicio();
            const idAutor = request.params.idAutor
            const data = await servicio.ListarPorAutor(idAutor)
            if (data) {
                response.status(200).json({"data": data})
            } else {
                response.status(400).send("No se encuentran libros con este autor")
            }
        } catch (error) {
            response.status(500).send(error)
        }
    }
}

export {LibrosAutorControlador}