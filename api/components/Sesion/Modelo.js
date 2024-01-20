import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';

const Sesion = sequelize.define('Sesion', {
    token: {
        type: DataTypes.STRING,
        allowNull: true, 
    },
    fechaSesion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }, 
    createdAt: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'sesionAna' });

export {Sesion}