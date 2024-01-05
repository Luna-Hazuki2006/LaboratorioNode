import { validarConversacionId, validarCuerpo, validarId, validarUsuarioCedula } from "./Validaciones.js";
import { MensajeControlador } from "./Controlador.js";

const MensajeRouter = (app) => {

    const controlador = new MensajeControlador()

    app.get('/Mensaje/Conversacion/:conversacionId', validarConversacionId, controlador.ListarPorConversacion);

    app.get('/Mensaje/Usuario/:conversacionId/:usuarioCedula', validarConversacionId, validarUsuarioCedula, controlador.ListarPorUsuario)
    
    app.get('/Mensaje/:conversacionId/:id', validarConversacionId, validarId, controlador.Consultar)
    
    app.post('/Mensaje', validarCuerpo, controlador.Crear);
    
}

export default MensajeRouter;