import { validarCuerpo, validarId } from "./Validaciones.js";

const router = (app) => {

    app.get('/TiposRelaciones');
    
    app.get('/TiposRelaciones/:id', validarId)
    
    app.post('/TiposRelaciones', validarCuerpo);
    
    app.put('/TiposRelaciones/:id', validarId, validarCuerpo)
    
    app.delete('/TiposRelaciones/:id', validarId)
    
}

export default router;