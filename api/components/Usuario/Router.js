import { validarCuerpo, validarCedula } from "./Validaciones.js";
import { UsuarioControlador } from "./Controlador.js";

const UsuarioRouter = (app) => {

    const controlador = new UsuarioControlador()

    app.get('/Usuario', controlador.Listar);
    
    app.get('/Usuario/:cedula', validarCedula, controlador.Consultar)
    
    app.post('/Usuario', validarCuerpo, controlador.Crear);
    
    app.put('/Usuario/:cedula', validarCedula, validarCuerpo, controlador.Modificar)
    
}

export default UsuarioRouter;