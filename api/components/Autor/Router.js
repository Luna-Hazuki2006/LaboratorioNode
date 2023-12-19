import { validarCuerpo, validarId } from "./Validaciones.js";
import { AutorControlador } from "./Controlador.js";

const AutorRouter = (app) => {

    const controlador = new AutorControlador()

    app.get('/Autor', controlador.Listar);
    
    app.get('/Autor/:id', validarId, controlador.Consultar)
    
    app.post('/Autor', validarCuerpo, controlador.Crear);
    
    app.put('/Autor/:id', validarId, validarCuerpo, controlador.Modificar)
    
    app.delete('/Autor/:id', validarId, controlador.Eliminar)
    
}

export default AutorRouter;