import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';
import { Autores } from "../Autor/Modelo.js";
import { Libro } from "../Libro/Modelo.js";

const LibrosAutor = sequelize.define('LibrosAutor', {
    idLibro: {
        type: DataTypes.INTEGER,
        references: {
            model: Libro, 
            key: 'id'
        }
    },
    idAutor: {
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
}, { tableName: 'librosautorAna' });

// Libro.belongsToMany(Autores, {through: LibrosAutor})
// Autores.belongsToMany(Libro, {through: LibrosAutor})

export {LibrosAutor}