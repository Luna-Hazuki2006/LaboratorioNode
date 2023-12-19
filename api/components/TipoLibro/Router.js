import { validarCuerpo, validarId } from "./Validaciones.js";
import { TipoLibroControlador } from "./Controlador.js";

const TipoLibroRouter = (app) => {

    const controlador = new TipoLibroControlador()

    app.get('/TipoLibro', controlador.Listar);
    
    app.get('/TipoLibro/:id', validarId, controlador.Consultar)
    
    app.post('/TipoLibro', validarCuerpo, controlador.Crear);
    
    app.put('/TipoLibro/:id', validarId, validarCuerpo, controlador.Modificar)
    
    app.delete('/TipoLibro/:id', validarId, controlador.Eliminar)
    
}

export default TipoLibroRouter;