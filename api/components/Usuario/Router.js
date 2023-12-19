import { validarCuerpo, validarId } from "./Validaciones.js";

const UsuarioRouter = (app) => {

    app.get('/Usuario');
    
    app.get('/Usuario/:id', validarId)
    
    app.post('/Usuario', validarCuerpo);
    
    app.put('/Usuario/:id', validarId, validarCuerpo)
    
    app.delete('/Usuario/:id', validarId)
    
}

export default UsuarioRouter;