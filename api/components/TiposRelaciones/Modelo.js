import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';
import { Relaciones } from "../Relacion/Modelo.js";

const TiposRelaciones = sequelize.define('TiposRelaciones', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    }, 
    createdAt: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'tiposrelacionesAna' });

// TiposRelaciones.hasMany(Relaciones, {foreignKey: 'idTiposRelaciones'})

export {TiposRelaciones}