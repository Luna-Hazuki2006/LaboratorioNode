import {CategoriaControlador} from './Controlador.js'

const router = (app) => {

    let controlador = new CategoriaControlador()

    app.get('/Categoria', controlador.Listar);
    
    app.get('/Categoria/:id', controlador.Consultar)
    
    app.post('/Categoria', controlador.Crear);
    
    app.put('/Categoria/:id', controlador.Modificar)
    
    app.delete('/Categoria/:id', controlador.Eliminar)
    
}
// 
export default router;