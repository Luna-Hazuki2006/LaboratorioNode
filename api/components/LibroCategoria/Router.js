import { validarCuerpo, validarIdLibro, validarIdCategoria } from "./Validaciones.js";
import { LibroCategoriaControlador } from "./Controlador.js";

const LibroCategoriaRouter = (app) => {

    const controlador = new LibroCategoriaControlador()

    app.get('/LibroCategoria/Libro/:idLibro', validarIdLibro, controlador.ListarPorLibro);
    
    app.get('/LibroCategoria/Categoria/:idCategoria', validarIdCategoria, controlador.ListarPorCategoria)
    
    app.post('/LibroCategoria', validarCuerpo, controlador.Crear);
    
    app.delete('/LibroCategoria', validarCuerpo, controlador.Eliminar)
    
}

export default LibroCategoriaRouter;