import { CategoriaServicio } from "./Service.js";

class CategoriaControlador {
    async Crear(request, response){
// entonces :v
// ¿hicimos categorías falsas?
        try{ // esto no es asincrónico :v
            const servicio = new CategoriaServicio();
            const {nombre, descripcion} = request.body;
            const categoria = await servicio.Crear(nombre, descripcion);
            
            if (categoria) {
                response.status(200).json({data: categoria});
            }
            else{
                response.status(400).send('no hay datos u otro mensaje');
            }
        }
        catch(error){
            response.status(500).send(error)
        }
    }
}

export {CategoriaControlador}