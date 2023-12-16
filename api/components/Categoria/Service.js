import { Categorias } from "./Modelo.js"

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
// ok
    async Modificar(id, nombre, descripcion) {

    }
}

export {CategoriaServicio}