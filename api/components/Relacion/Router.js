import { validarCuerpo, validarId } from "./Validaciones.js";
import { RelacionesControlador } from "./Controlador.js";

const RelacionesRouter = (app) => {

    const controlador = new RelacionesControlador()

    app.get('/TiposRelaciones', controlador.Listar);
    
    app.get('/TiposRelaciones/:id', validarId, controlador.Consultar)
    
    app.post('/TiposRelaciones', validarCuerpo, controlador.Crear);
    
    app.put('/TiposRelaciones/:id', validarId, validarCuerpo, controlador.Modificar)
    
    app.delete('/TiposRelaciones/:id', validarId, controlador.Eliminar)
    
}

export default RelacionesRouter;