import { CategoriaServicio } from "./Service.js";

class CategoriaControlador {
    async Crear(request, response){
// entonces :v
// ¿hicimos categorías falsas?
        try { // esto no es asincrónico :v
            const servicio = new CategoriaServicio();
            const {nombre, descripcion} = request.body;
            const categoria = await servicio.Crear(nombre, descripcion);
            
            if (categoria) {
                response.status(200).json({data: categoria});
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
        try { // esto no es asincrónico :v
            const servicio = new CategoriaServicio();
            const {nombre, descripcion} = request.body;
            const id = request.params.id
            const categoria = await servicio.Modificar(id, nombre, descripcion);
            
            if (categoria) {
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
        try { // esto no es asincrónico :v
            const servicio = new CategoriaServicio();
            const id = request.params.id
            const categoria = await servicio.Eliminar(id);
            
            if (categoria) {
                response.status(200).json({data: "Se eliminó con éxito la categoría"});
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
        try { // esto no es asincrónico :v
            const servicio = new CategoriaServicio();
            const id = request.params.id
            const categoria = await servicio.Consultar(id);
            
            if (categoria) {
                response.status(200).json({data: categoria});
            }
            else {
                response.status(400).send('No se encuentra la categoría');
            }
        }
        catch(error) {
            response.status(400).send(error)
        }
    }

    async Listar(request, response) {
        try {
            const servicio = new CategoriaServicio();
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

export {CategoriaControlador}