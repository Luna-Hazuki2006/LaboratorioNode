import { validarCuerpo, validarId } from "./Validaciones.js";
import { PublicacionControlador } from "./Controlador.js";

const PublicacionRouter = (app) => {

    const controlador = new PublicacionControlador()

    app.get('/Publicacion', controlador.Listar);
    
    app.get('/Publicacion/:id', validarId, controlador.Consultar)
    
    app.post('/Publicacion', validarCuerpo, controlador.Crear);
    
    app.put('/Publicacion/:id', validarId, validarCuerpo, controlador.Modificar)
    
    app.delete('/Publicacion/:id', validarId, controlador.Eliminar)
    
}

export default PublicacionRouter;