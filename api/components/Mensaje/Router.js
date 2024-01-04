import { validarConversacionId, validarCuerpo, validarId, validarUsuarioCedula } from "./Validaciones.js";
import { MensajeControlador } from "./Controlador.js";

const MensajeRouter = (app) => {

    const controlador = new MensajeControlador()

    app.get('/Mensaje/Conversacion/:idConversacion');

    app.get('/Mensaje/Usuario/:idConversacion/:')
    
    app.get('/Mensaje/:idConversacion/:id')
    
    app.post('/Mensaje', validarCuerpo, controlador.Crear);
    
}

export default MensajeRouter;