import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';
import { Relaciones } from "../Relacion/Modelo.js";
import { Libro } from "../Libro/Modelo.js";

const LibrosRelacion = sequelize.define('LibrosRelacion', {
    idLibro: {
        type: DataTypes.INTEGER,
        references: {
            model: Libro, 
            key: 'id'
        }
    },
    idRelacion: {
        type: DataTypes.INTEGER,
        references: {
            model: Relaciones, 
            key: 'id'
        }
    },  
    createdAt: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'librosrelacionAna' });

// Libro.belongsToMany(Relaciones, {through: LibrosRelacion})
// Relaciones.belongsToMany(Libro, {through: LibrosRelacion})

export {LibrosRelacion}