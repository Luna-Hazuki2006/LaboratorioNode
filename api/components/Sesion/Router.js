import { validarCedula, validarCuerpo } from "./Validaciones.js";

const SesionRouter = (app) => {

    app.get('/Sesion/cedula/');
    
    app.get('/Sesion/:id')
    
    app.post('/Sesion');
    
}

export default SesionRouter;