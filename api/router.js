import AutorRouter from './components/Autor/Router.js'
import PublicacionRouter from './components/Publicacion/Router.js'
// import SesionRouter from './components/Sesion/Router.js'
// import MensajeRouter from "./components/Mensaje/Router.js";
// import ConversacionRouter from "./components/Conversacion/Router.js";
import UsuarioRouter from './components/Usuario/Router.js'
import TiposRelacionesRouter from "./components/TiposRelaciones/Router.js";
import TipoUsuarioRouter from "./components/TipoUsuario/Router.js";
import CategoriaRouter from './components/Categoria/Router.js'
import TipoLibroRouter from "./components/TipoLibro/Router.js";
import LibroRouter from "./components/Libro/Router.js";
import LibrosRelacionRouter from "./components/LibrosRelacion/Router.js";
import LibroCategoriaRouter from "./components/LibroCategoria/Router.js";
import LibrosAutorRouter from "./components/LibrosAutor/Router.js";
import RelacionesRouter from "./components/Relacion/Router.js";
import LibrosTiposRouter from "./components/LibrosTipo/Router.js";

const router = (app) => {
    AutorRouter(app)
    // SesionRouter(app)
    // MensajeRouter(app)
    // ConversacionRouter(app)
    PublicacionRouter(app)
    UsuarioRouter(app)
    TiposRelacionesRouter(app)
    TipoLibroRouter(app)
    TipoUsuarioRouter(app)
    CategoriaRouter(app)
    LibroRouter(app)
    LibrosRelacionRouter(app)
    LibroCategoriaRouter(app)
    LibrosAutorRouter(app)
    RelacionesRouter(app)
    LibrosTiposRouter(app)
}

export {router}