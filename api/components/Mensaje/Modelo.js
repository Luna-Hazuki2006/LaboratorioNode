import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';
import { Usuario } from "../Usuario/Modelo.js";
import { Conversacion } from "../Conversacion/Modelo.js";

const Mensaje = sequelize.define('Mensaje', {
    fecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    texto: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    createdAt: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'mensajeAna' });

// Usuario.hasMany(Mensaje, {foreignKey: "usuarioCedula"})
// Mensaje.belongsTo(Usuario)

// Conversacion.hasMany(Mensaje, {foreignKey: 'conversacionId'})
// Mensaje.belongsTo(Conversacion)

export {Mensaje}