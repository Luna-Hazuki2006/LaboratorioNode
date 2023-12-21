import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';
import { TipoLibro } from "../TipoLibro/Modelo.js";
import { Libro } from "../Libro/Modelo.js";

const LibrosTipo = sequelize.define('LibrosTipo', {
    IdTipoLibro: {
        type: DataTypes.INTEGER,
        references: {
            model: TipoLibro, 
            key: 'id'
        }
    },
    IdLibro: {
        type: DataTypes.INTEGER,
        references: {
            model: Libro, 
            key: 'id'
        }
    },  
    createdAt: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'libro' });

Libro.belongsToMany(TipoLibro, {through: LibrosTipo})
TipoLibro.belongsToMany(Libro, {through: LibrosTipo})

export {LibrosTipo}