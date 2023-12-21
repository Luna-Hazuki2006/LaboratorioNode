import { validarCuerpo, validarId } from "./Validaciones.js";
import { RelacionesControlador } from "./Controlador.js";

const RelacionesRouter = (app) => {

    const controlador = new RelacionesControlador()

    app.get('/Relaciones', controlador.Listar);
    
    app.get('/Relaciones/:id', validarId, controlador.Consultar)
    
    app.post('/Relaciones', validarCuerpo, controlador.Crear);
    
    app.put('/Relaciones/:id', validarId, validarCuerpo, controlador.Modificar)
    
    app.delete('/Relaciones/:id', validarId, controlador.Eliminar)
    
}

export default RelacionesRouter;