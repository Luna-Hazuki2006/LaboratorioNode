import { validarCuerpo, validarId } from "./Validaciones.js";

const LibrosTipoRouter = (app) => {

    app.get('/LibrosTipo');
    
    app.get('/LibrosTipo/:id')
    
    app.post('/LibrosTipo');
    
    app.delete('/LibrosTipo/:id')
    
}

export default LibrosTipoRouter;