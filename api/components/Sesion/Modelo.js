import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';
import { Usuario } from "../Usuario/Modelo.js";

const Sesion = sequelize.define('Sesion', {
    token: {
        type: DataTypes.STRING,
        allowNull: true, 
    },
    fechaSesion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }, 
    fechaFin: {
        type: DataTypes.DATE, 
        allowNull: true
    }, 
    createdAt: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'sesionAna' });

// Usuario.hasMany(Sesion, {foreignKey: "cedulaUsuario"})
// Sesion.belongsTo(Usuario)

export {Sesion}