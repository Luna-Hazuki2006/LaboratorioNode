import { validarUsuario, validarCuerpo, validarId } from "./Validaciones.js";
import { SesionControlador } from "./Controlador.js";

const SesionRouter = (app) => {

    const controlador = new SesionControlador()

    app.get('/Sesion/cedula/:cedulaUsuario', validarUsuario, controlador.ListarPorUsuario);
    
    app.get('/Sesion/:id', validarId, controlador.Consultar)
    
    app.post('/Sesion', validarCuerpo, controlador.Crear);
    
}

export default SesionRouter;