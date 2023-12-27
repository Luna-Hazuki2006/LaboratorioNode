import { validarCedula, validarCuerpo } from "./Validaciones.js";

const router = (app) => {

    app.get('/Sesion');
    
    app.get('/Sesion/:id')
    
    app.post('/Sesion');
    
    app.put('/Sesion/:id')
    
    app.delete('/Sesion/:id')
    
}

export default router;