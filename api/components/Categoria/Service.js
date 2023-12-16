import { Categorias } from "./Modelo"

class CategoriaServicio {
    async Crear(nombre, descripcion) {
        try {
            return await Categorias.create({
                nombre,
                descripcion
              });
        }
        catch(error) {
            throw error
        }
    }
}

export {CategoriaServicio}