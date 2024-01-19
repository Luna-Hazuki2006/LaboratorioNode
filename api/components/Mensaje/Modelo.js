import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';

const Mensaje = sequelize.define('Mensaje', {
    fecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    texto: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    createdAt: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'mensajeAna' });

export {Mensaje}