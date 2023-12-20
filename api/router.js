import AutorRouter from './components/Autor/Router.js'
// import LibroRouter from './components/Libro/Router.js'
// import PublicacionRouter from './components/Publicacion/Router.js'
// import SesionRouter from './components/Sesion/Router.js'
import UsuarioRouter from './components/Usuario/Router.js'
import TiposRelacionesRouter from "./components/TiposRelaciones/Router.js";
import TipoUsuarioRouter from "./components/TipoUsuario/Router.js";
import CategoriaRouter from './components/Categoria/Router.js'
import TipoLibroRouter from "./components/TipoLibro/Router.js";

const router = (app) => {
    AutorRouter(app)
    // LibroRouter(app)
    // SesionRouter(app)
    // PublicacionRouter(app)
    UsuarioRouter(app)
    TiposRelacionesRouter(app)
    TipoLibroRouter(app)
    TipoUsuarioRouter(app)
    CategoriaRouter(app)
}

export {router}