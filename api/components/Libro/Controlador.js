import { LibroServicio } from "./Service.js";

class LibroControlador {

    async Crear(request, response) {
        try { 
            const servicio = new LibroServicio();
            const {nombre, sinopsis, categorias, autores, tipos, relaciones} = request.body;
            const libro = await servicio.Crear(nombre, sinopsis, categorias, autores, tipos, relaciones);
            
            if (libro) {
                response.status(200).json({data: libro});
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
            const servicioLibroCategoria = new LibroCategoriaServicio()
            const servicioLibroAutor = new LibrosAutorServicio()
            const servicioLibroTipo = new LibrosTipoServicio()
            const servicioLibroRelacion = new LibrosRelacionServicio()
            const servicio = new LibroServicio();
            const {nombre, sinopsis, categorias, autores, tipos, relaciones} = request.body;
            const id = request.params.id
            const libro = await servicio.Modificar(id, nombre, sinopsis);
            
            if (libro) {
                for (const categoria of categorias) {
                    const librosCategorias = await servicioLibroCategoria.Crear(libro.id, categoria)
                    if (!librosCategorias) {
                        response.status(400).send("Hubo un problema con las categorías")
                    }
                }
                for (const autor of autores) {
                    const librosAutores = await servicioLibroAutor.Crear(libro.id, autor)
                    if (!librosAutores) {
                        response.status(400).send("Hubo un problema con los autores")
                    }
                }
                for (const tipo of tipos) {
                    const librosTipos = await servicioLibroTipo.Crear(libro.id, tipo)
                    if (!librosTipos) {
                        response.status(400).send("Hubo un problema con los tipos")
                    }
                }
                for (const relacion of relaciones) {
                    const librosRelaciones = await servicioLibroRelacion.Crear(libro.id, relacion)
                    if (!librosRelaciones) {
                        response.status(400).send("Hubo un problema con las relaciones")
                    }
                }
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
            const servicio = new LibroServicio();
            const id = request.params.id
            const libro = await servicio.Eliminar(id);
            
            if (libro) {
                response.status(200).json({data: "Se eliminó con éxito el libro"});
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
            const servicio = new LibroServicio();
            const id = request.params.id
            const libro = await servicio.Consultar(id);
            
            if (libro) {
                response.status(200).json({data: libro});
            }
            else {
                response.status(400).send('No se encuentra el libro');
            }
        }
        catch(error) {
            response.status(400).send(error)
        }
    }

    async Listar(request, response) {
        try {
            const servicio = new LibroServicio();
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

export {LibroControlador}