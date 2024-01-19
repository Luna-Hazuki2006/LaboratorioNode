import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';

const Conversacion = sequelize.define('Conversacion', {
    fecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    createdAt: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'conversacionAna' });

export {Conversacion}