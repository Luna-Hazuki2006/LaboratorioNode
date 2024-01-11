import { Autores } from "./Autor/Modelo.js";
import { Relaciones } from "./Relacion/Modelo.js";
import { Usuario } from "./Usuario/Modelo.js";
import { Conversacion } from "./Conversacion/Modelo.js";
import { Publicacion } from "./Publicacion/Modelo.js";
import { Libro } from "./Libro/Modelo.js";
import { Categorias } from "./Categoria/Modelo.js";
import { TipoLibro } from "./TipoLibro/Modelo.js";
import { Mensaje } from "./Mensaje/Modelo.js";
import { TiposRelaciones } from "./TiposRelaciones/Modelo.js";
import { Sesion } from "./Sesion/Modelo.js";
import { TipoUsuario } from "./TipoUsuario/Modelo.js";
import { LibroCategoria } from "./LibroCategoria/Modelo.js";
import { LibrosAutor } from "./LibrosAutor/Modelo.js";
import { LibrosRelacion } from "./LibrosRelacion/Modelo.js";
import { LibrosTipo } from "./LibrosTipo/Modelo.js";

Autores.hasMany(Relaciones, {foreignKey: 'idAutor'})

Usuario.hasMany(Conversacion, {foreignKey: "usuarioCedula"})
Conversacion.belongsTo(Usuario)

Publicacion.hasMany(Conversacion, {foreignKey: 'publicacionId'})
Conversacion.belongsTo(Publicacion)

Libro.belongsToMany(Categorias, {through: "librocategoriaAna", as: 'categorias', foreignKey: 'idLibro'})
Libro.belongsToMany(Autores, {through: "librosautorAna", as: 'autores', foreignKey: 'idLibro'})
Libro.belongsToMany(TipoLibro, {through: "librostipoAna", as: 'tipolibro', foreignKey: 'idLibro'})
Libro.belongsToMany(Relaciones, {through: "librosrelacionAna", as: 'relaciones', foreignKey: 'idLibro'})

Categorias.belongsToMany(Libro, {through: "librocategoriaAna", foreignKey: 'idCategoria'})
Autores.belongsToMany(Libro, {through: "librosautorAna", foreignKey: 'idAutor'})
TipoLibro.belongsToMany(Libro, {through: "librostipoAna", foreignKey: 'idTipoLibro'})
Relaciones.belongsToMany(Libro, {through: "librosrelacionAna", foreignKey: 'idRelacion'})

Usuario.hasMany(Mensaje, {foreignKey: "usuarioCedula"})
Mensaje.belongsTo(Usuario)

Conversacion.hasMany(Mensaje, {foreignKey: 'conversacionId'})
Mensaje.belongsTo(Conversacion)

Usuario.hasMany(Publicacion, {foreignKey: "cedulaUsuario"})
Publicacion.belongsTo(Usuario)

Libro.hasMany(Publicacion, {foreignKey: 'idLibro'})
Publicacion.belongsTo(Libro)

Relaciones.belongsTo(TiposRelaciones)

Relaciones.belongsTo(Autores)

Usuario.hasMany(Sesion, {foreignKey: "cedulaUsuario"})
Sesion.belongsTo(Usuario)

TiposRelaciones.hasMany(Relaciones, {foreignKey: 'idTiposRelaciones'})

TipoUsuario.hasMany(Usuario, {foreignKey: "idTipoUsuario"})
Usuario.belongsTo(TipoUsuario)

export {
    Autores, Categorias, Conversacion, Libro, TipoLibro, 
    Mensaje, Publicacion, Relaciones, Sesion, TiposRelaciones, 
    TipoUsuario, Usuario, 
    LibroCategoria, LibrosAutor, LibrosTipo, LibrosRelacion}

// Al momemento de crear un registro como hacer con sequalize 
// crear la de muchos a muchos sin tener que crearlas por nuestra cuenta

// Terminar la función para lo de validar (intentar)

// Terminar de crear las funciones con relaciones

// Hacer que se vea en la consulta todas sus relaciones