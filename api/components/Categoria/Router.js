import {CategoriaControlador} from './Controlador.js'

const router = (app) => {

    let controlador = new CategoriaControlador()

    app.get('/Categoria');
    
    app.get('/Categoria/:id')
    
    app.post('/Categoria', controlador.Crear);
    
    app.put('/Categoria/:id')
    
    app.delete('/Categoria/:id')
    
}

export default router;