import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';
import { Usuario } from "../Usuario/Modelo.js";
import { Publicacion } from "../Publicacion/Modelo.js";

const Conversacion = sequelize.define('Conversacion', {
    fecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    createdAt: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'conversacionAna' });

Usuario.hasMany(Conversacion, {foreignKey: "usuarioCedula"})
Conversacion.belongsTo(Usuario)

Publicacion.hasMany(Conversacion, {foreignKey: 'publicacionId'})
Conversacion.belongsTo(Publicacion)

export {Conversacion}