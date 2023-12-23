import { validarCuerpo, validarIdLibro, validarIdRelacion } from "./Validaciones.js";
import { LibrosRelacionControlador } from "./Controlador.js";

const LibrosRelacionRouter = (app) => {

    const controlador = new LibrosRelacionControlador()

    app.get('/LibrosRelacion/Libro/:idLibro', validarIdLibro, controlador.ListarPorLibro);
    
    app.get('/LibrosRelacion/Relacion/:idRelacion', validarIdRelacion, controlador.ListarPorRelacion)
    
    app.post('/LibrosRelacion', validarCuerpo, controlador.Crear);
    
    app.delete('/LibrosRelacion', validarCuerpo, controlador.Eliminar)
    
}

export default LibrosRelacionRouter;