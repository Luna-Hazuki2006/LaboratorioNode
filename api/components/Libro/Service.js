import { Libro, Categorias, Autores, TipoLibro, Relaciones } from "../modelo.js"
import { CategoriaServicio } from "../Categoria/Service.js";
import { AutorServicio } from "../Autor/Service.js";
import { TipoLibroServicio } from "../TipoLibro/Service.js";
import { RelacionesServicio } from "../Relacion/Service.js";

class LibroServicio {
    async Crear(nombre, sinopsis, categorias, autores, tipos, relaciones) {
        try {
            const servicioCategoria = new CategoriaServicio()
            let categoriasListas = servicioCategoria.ConsultarMultiples(categorias)
            const servicioAutor = new AutorServicio()
            let autoresListas = servicioAutor.ConsultarMultiples(autores)
            const servicioTipo = new TipoLibroServicio()
            let tiposListas = servicioTipo.ConsultarMultiples(tipos)
            const servicioRelacion = new RelacionesServicio()
            let relacionesListas = servicioRelacion.ConsultarMultiples(relaciones)
            const libro = await Libro.create({
                nombre,
                sinopsis, 
                categoria: [categoriasListas], 
                autor: [autoresListas], 
                tipo: [tiposListas], 
                relacion: [relacionesListas]
            }, {
                include: [
                    {
                        association: Categorias, 
                        as: "categoria"
                    }, 
                    {
                        association: Autores, 
                        as: "autor"
                    }, 
                    {
                        association: TipoLibro, 
                        as: "tipo"
                    }, 
                    {
                        association: Relaciones, 
                        as: "relacion"
                    }
                ]
            });
            return libro
        }
        catch(error) {
            throw error
        }
    }

    async Modificar(id, nombre, sinopsis) {
        try {
            return await Libro.update({
                nombre, 
                sinopsis
            }, {where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    async Eliminar(id) {
        try {
            return await Libro.destroy({where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    async Consultar(id) {
        try {
            return await Libro.findOne({where: {"id": id}, include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }

    async Listar() {
        try {
            return await Libro.findAll({include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }
}

export {LibroServicio}

// https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators
// https://sequelize.org/docs/v6/advanced-association-concepts/creating-with-associations/
// https://sequelize.org/docs/v6/advanced-association-concepts/creating-with-associations/#hasmany--belongstomany-association