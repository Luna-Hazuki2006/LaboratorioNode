import { validarCuerpo, validarId, validarPublicacionId, validarUsuarioCedula } from "./Validaciones.js";
import { ConversacionControlador } from "./Controlador.js";

const ConversacionRouter = (app) => {

    const controlador = new ConversacionControlador()

    app.get('/Conversacion/Usuario/:usuarioCedula', validarUsuarioCedula, controlador.ListarPorUsuario);

    app.get('/Conversacion/Publicacion/:publicacionId', validarPublicacionId, controlador.ListarPorPublicacion)
    
    app.get('/Conversacion/:id', validarId, controlador.Consultar)
    
    app.post('/Conversacion', validarCuerpo, controlador.Crear);
    
}

export default ConversacionRouter;