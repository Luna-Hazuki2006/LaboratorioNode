import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';
import { Autores } from "../Autor/Modelo.js";
import { Libro } from "../Libro/Modelo.js";

const LibrosAutor = sequelize.define('LibrosTipo', {
    IdLibro: {
        type: DataTypes.INTEGER,
        references: {
            model: Libro, 
            key: 'id'
        }
    },
    IdAutor: {
        type: DataTypes.INTEGER,
        references: {
            model: Autores, 
            key: 'id'
        }
    },  
    createdAt: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'libro' });

Libro.belongsToMany(Autores, {through: LibrosAutor})
Autores.belongsToMany(Libro, {through: LibrosAutor})

export {LibrosAutor}