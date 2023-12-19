import { validarCuerpo, validarId } from "./Validaciones.js";
import { TipoUsuarioControlador } from "./Controlador.js";

const TipoUsuarioRouter = (app) => {

    const controlador = new TipoUsuarioControlador()

    app.get('/TipoUsuario', controlador.Listar);
    
    app.get('/TipoUsuario/:id', validarId, controlador.Consultar)
    
    app.post('/TipoUsuario', validarCuerpo, controlador.Crear);
    
    app.put('/TipoUsuario/:id', validarId, validarCuerpo, controlador.Modificar)
    
    app.delete('/TipoUsuario/:id', validarId, controlador.Eliminar)
    
}

export default TipoUsuarioRouter;