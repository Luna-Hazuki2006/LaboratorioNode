import {CategoriaControlador} from './Controlador.js'
import { validarCuerpo, validarId } from "./Validaciones.js";

const router = (app) => {

    let controlador = new CategoriaControlador()

    app.get('/Categoria', controlador.Listar);
    
    app.get('/Categoria/:id', validarId, controlador.Consultar)
    
    app.post('/Categoria', validarCuerpo, controlador.Crear);
    
    app.put('/Categoria/:id', validarId, validarCuerpo, controlador.Modificar)
    
    app.delete('/Categoria/:id', validarId, controlador.Eliminar)
    
}
// 
export default router;