import { validarCuerpo, validarIdLibro, validarIdTipoLibro } from "./Validaciones.js";
import { LibrosTiposControlador } from "./Controlador.js";

const LibrosTiposRouter = (app) => {

    const controlador = new LibrosTiposControlador()

    app.get('/LibrosTipos/Libro/:idLibro', validarIdLibro, controlador.ListarPorLibro);
    
    app.get('/LibrosTipos/Tipo/:idTipoLibro', validarIdTipoLibro, controlador.ListarPorTipoLibros)
    
    app.post('/LibrosTipos', validarCuerpo, controlador.Crear);
    
    app.delete('/LibrosTipos', validarCuerpo, controlador.Eliminar)
    
}

export default LibrosTiposRouter;