import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';

const Relaciones = sequelize.define('Relaciones', {
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
}, { tableName: 'relacionesAna' });

export {Relaciones}