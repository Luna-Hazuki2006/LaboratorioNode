import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';

const Publicacion = sequelize.define('Publicacion', {
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'publicacionAna' });

export {Publicacion}