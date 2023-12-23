import { validarCuerpo, validarIdLibro, validarIdAutor } from "./Validaciones.js";
import { LibrosAutorControlador } from "./Controlador.js";

const LibrosAutorRouter = (app) => {

    const controlador = new LibrosAutorControlador()

    app.get('/LibrosAutor/Libro/:idLibro', validarIdLibro, controlador.ListarPorLibro);
    
    app.get('/LibrosAutor/Autor/:idAutor', validarIdAutor, controlador.ListarPorAutor)
    
    app.post('/LibrosAutor', validarCuerpo, controlador.Crear);
    
    app.delete('/LibrosAutor', validarCuerpo, controlador.Eliminar)
    
}

export default LibrosAutorRouter;