import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';
import { Categorias } from "../Categoria/Modelo.js";
import { Autores } from "../Autor/Modelo.js";
import { TipoLibro } from "../TipoLibro/Modelo.js";
import { Relaciones } from "../Relacion/Modelo.js";

const Libro = sequelize.define('Libro', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sinopsis: {
        type: DataTypes.STRING,
        allowNull: true
    }, 
    createdAt: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'libroAna' });

Libro.belongsToMany(Categorias, {through: "LibroCategoria", as: 'categorias', foreignKey: 'idLibro'})
Libro.belongsToMany(Autores, {through: "LibrosAutor", as: 'autores', foreignKey: 'idLibro'})
Libro.belongsToMany(TipoLibro, {through: "LibrosTipo", as: 'tipolibro', foreignKey: 'idLibro'})
Libro.belongsToMany(Relaciones, {through: "LibrosRelacion", as: 'relaciones', foreignKey: 'idLibro'})

export {Libro}