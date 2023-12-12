import AutorRouter from './components/Autor/AutorRouter.js'
import LibroRouter from './components/Libro/LibroRouter.js'
import PublicacionRouter from './components/Publicacion/PublicacionRouter.js'
import SesionRouter from './components/Sesion/SesionRouter.js'
import UsuarioRouter from './components/Usuario/UsuarioRouter.js'

const router = (app) => {
    AutorRouter(app)
    LibroRouter(app)
    SesionRouter(app)
    PublicacionRouter(app)
    UsuarioRouter(app)
}

export {router}