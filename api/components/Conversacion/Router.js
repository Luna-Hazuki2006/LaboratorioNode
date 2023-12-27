import { validarCuerpo, validarId } from "./Validaciones.js";

const router = (app) => {

    app.get('/Router');
    
    app.get('/Router/:id', validarId)
    
    app.post('/Router', validarCuerpo);
    
    app.delete('/Router/:id', validarId)
    
}

export default router;