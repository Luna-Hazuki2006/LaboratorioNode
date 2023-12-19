import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';
import { TipoUsuario } from "../TipoUsuario/Modelo.js";

const Usuario = sequelize.define('Usuario', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: true
    }, 
    fechaNacimiento: {
        type: DataTypes.DATE, 
        allowNull: false
    }, 
    direccion: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    correo: {
        type: DataTypes.DATE, 
        allowNull: false
    }, 
    contraseña: {
        type: DataTypes.DATE, 
        allowNull: false
    }, 
    idTipoUsuario: {
        type: DataTypes.INTEGER, 
        allowNull: false
    }, 
    createdAt: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'usuario' });

TipoUsuario.hasMany(Usuario, {foreignKey: "idTipoUsuario"})
Usuario.belongsTo(TipoUsuario)

export {Usuario}