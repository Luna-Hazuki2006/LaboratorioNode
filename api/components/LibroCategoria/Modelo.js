import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';
import { Categorias } from "../Categoria/Modelo.js";
import { Libro } from "../Libro/Modelo.js";

const LibroCategoria = sequelize.define('LibroCategoria', {
    idLibro: {
        type: DataTypes.INTEGER,
        references: {
            model: Libro, 
            key: 'id'
        }
    },
    idCategoria: {
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
}, { tableName: 'librocategoriaAna' });

// Libro.belongsToMany(Categorias, {through: LibroCategoria, as: 'categorias', foreignKey: 'idLibro'})
// Categorias.belongsToMany(Libro, {through: LibroCategoria, as: 'libros', foreignKey: 'idCategoria'})

export {LibroCategoria}