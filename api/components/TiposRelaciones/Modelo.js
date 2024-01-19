import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';

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

export {TiposRelaciones}