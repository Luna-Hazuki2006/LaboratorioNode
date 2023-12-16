import { CategoriaServicio } from "./Service.js";

class CategoriaControlador {
    Crear(request, response){

        try{
            const servicio = new CategoriaServicio();
            const {nombre, descripcion} = request.body;
            const categoria = servicio.Crear(nombre, descripcion);
            if (autor) {
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