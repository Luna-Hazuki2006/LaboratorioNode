import { validarCuerpo, validarId } from "./Validaciones.js";
import { UsuarioControlador } from "./Controlador.js";

const UsuarioRouter = (app) => {

    const controlador = new UsuarioControlador()

    app.get('/Usuario', controlador.Listar);
    
    app.get('/Usuario/:id', validarId, controlador.Consultar)
    
    app.post('/Usuario', validarCuerpo, controlador.Crear);
    
    app.put('/Usuario/:id', validarId, validarCuerpo, controlador.Modificar)
    
    // app.delete('/Usuario/:id', validarId, controlador.Eliminar)
    
}

export default UsuarioRouter;