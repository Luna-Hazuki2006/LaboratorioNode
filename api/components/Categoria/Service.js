import { Categorias } from "../modelo.js"

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
        try {
            return await Categorias.update({
                nombre, 
                descripcion
            }, {where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    async Eliminar(id) {
        try {
            return await Categorias.destroy({where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    async Consultar(id) {
        try {
            return await Categorias.findOne({where: {"id": id}, include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }

    async ConsultarMultiples(ids) {
        try {
            return await Categorias.findAll({where: {"id": {in: ids}}, include: [{ all: true }]})
        } catch (error) {
            
        }
    }

// someAttribute: {
// in: [1,2,3]}

    async Listar() {
        try {
            return await Categorias.findAll({include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }
}

export {CategoriaServicio}