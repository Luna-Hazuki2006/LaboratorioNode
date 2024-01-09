import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';

const Libro = sequelize.define('Libro', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sinopsis: {
        type: DataTypes.STRING,
        allowNull: true
    }, 
    createdAt: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'libroAna' });

export {Libro}