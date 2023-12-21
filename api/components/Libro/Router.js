import { validarCuerpo, validarId } from "./Validaciones.js";
import { LibroControlador } from "./Controlador.js";

const LibroRouter = (app) => {

    const controlador = new LibroControlador()

    app.get('/Libro', controlador.Listar);
    
    app.get('/Libro/:id', validarId, controlador.Consultar)
    
    app.post('/Libro', validarCuerpo, controlador.Crear);
    
    app.put('/Libro/:id', validarId, validarCuerpo, controlador.Modificar)
    
    app.delete('/Libro/:id', validarId, controlador.Eliminar)
    
}

export default LibroRouter;