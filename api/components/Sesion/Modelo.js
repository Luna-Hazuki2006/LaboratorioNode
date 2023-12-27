import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';
import { Usuario } from "../Usuario/Modelo.js";

const Sesion = sequelize.define('Sesion', {
    token: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true
    },
    fechaSesion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }, 
    createdAt: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'sesion' });

Sesion.hasMany(Usuario, {foreignKey: "cedula"})
Usuario.belongsTo(Sesion)

export {Sesion}