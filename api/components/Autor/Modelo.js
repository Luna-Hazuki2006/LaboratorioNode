import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';

const Autores = sequelize.define('Autor', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    biografía: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    foto: {
        type: DataTypes.BLOB, 
        allowNull: false
    }, 
    createdAt: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'autor' });

export {Autores}