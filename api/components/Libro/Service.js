import { Libro } from "../modelo.js"
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
            let tiposListas = []
            for (const tipo of tipos) {
                tiposListas.push(await servicioTipo.Consultar(tipo))
            }
            const servicioRelacion = new RelacionesServicio()
            let relacionesListas = []
            for (const relacion of relaciones) {
                relacionesListas.push(await servicioRelacion.Consultar(relacion))
            }
            const libro = await Libro.create({
                nombre,
                sinopsis, 

            });
            for (const categoria of categoriasListas) {
                libro.addCategorias(categoria)
            }
            for (const autor of autoresListas) {
                libro.addAutores(autor)
            }
            for (const tipo of tiposListas) {
                libro.addTipoLibro(tipo)
            }
            for (const relacion of relacionesListas) {
                libro.addRelaciones(relacion)
            }
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