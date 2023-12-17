import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';

const TipoLibro = sequelize.define('TipoLibro', {
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
}, { tableName: 'tipolibro' });

export {TipoLibro}