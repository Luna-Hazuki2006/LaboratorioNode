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
        type: DataTypes.STRING, 
        allowNull: true
    }, 
    createdAt: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'autorAna' });

export {Autores}