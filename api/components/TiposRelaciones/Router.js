import { validarCuerpo, validarId } from "./Validaciones.js";
import { TiposRelacionesControlador } from "./Controlador.js";

const TiposRelacionesRouter = (app) => {

    const controlador = new TiposRelacionesControlador()

    app.get('/TiposRelaciones', controlador.Listar);
    
    app.get('/TiposRelaciones/:id', validarId, controlador.Consultar)
    
    app.post('/TiposRelaciones', validarCuerpo, controlador.Crear);
    
    app.put('/TiposRelaciones/:id', validarId, validarCuerpo, controlador.Modificar)
    
    app.delete('/TiposRelaciones/:id', validarId, controlador.Eliminar)
    
}

export default TiposRelacionesRouter;