import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';

const Categorias = sequelize.define('Categoria', {
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
}, { tableName: 'categorias' });

export {Categorias}