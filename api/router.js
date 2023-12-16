import AutorRouter from './components/Autor/AutorRouter.js'
import LibroRouter from './components/Libro/LibroRouter.js'
import PublicacionRouter from './components/Publicacion/Router.js'
import SesionRouter from './components/Sesion/Router.js'
import UsuarioRouter from './components/Usuario/Router.js'

const router = (app) => {
    AutorRouter(app)
    LibroRouter(app)
    SesionRouter(app)
    PublicacionRouter(app)
    UsuarioRouter(app)
}

export {router}