import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';
import { TipoLibro } from "../TipoLibro/Modelo.js";
import { Libro } from "../Libro/Modelo.js";

const LibrosTipo = sequelize.define('LibrosTipo', {
    idLibro: {
        type: DataTypes.INTEGER,
        references: {
            model: Libro, 
            key: 'id'
        }
    },
    idTipoLibro: {
        type: DataTypes.INTEGER,
        references: {
            model: TipoLibro, 
            key: 'id'
        }
    },  
    createdAt: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'librostipoAna' });

// Libro.belongsToMany(TipoLibro, {through: LibrosTipo})
// TipoLibro.belongsToMany(Libro, {through: LibrosTipo})

export {LibrosTipo}