import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';

const TipoUsuario = sequelize.define('TipoUsuario', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    }, 
    estatus: {
        type: DataTypes.CHAR, 
        allowNull: false
    }, 
    createdAt: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'tipousuario' });

export {TipoUsuario}