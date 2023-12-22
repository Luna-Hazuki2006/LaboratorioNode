import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';
import { Categorias } from "../Categoria/Modelo.js";
import { Libro } from "../Libro/Modelo.js";

const LibroCategoria = sequelize.define('LibroCategoria', {
    IdLibro: {
        type: DataTypes.INTEGER,
        references: {
            model: Libro, 
            key: 'id'
        }
    },
    IdCategoria: {
        type: DataTypes.INTEGER,
        references: {
            model: Categorias, 
            key: 'id'
        }
    },  
    createdAt: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'librocategoria' });

Libro.belongsToMany(Categorias, {through: LibroCategoria})
Categorias.belongsToMany(Libro, {through: LibroCategoria})

export {LibroCategoria}