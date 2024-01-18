import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';
import { TipoUsuario } from "../TipoUsuario/Modelo.js";

const Usuario = sequelize.define('Usuario', {
    cedula: {
        type: DataTypes.STRING, 
        allowNull: false, 
        primaryKey: true
    }, 
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
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
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    contraseña: {
        type: DataTypes.STRING, 
        allowNull: false
    }
}, { tableName: 'usuarioAna' });

// TipoUsuario.hasMany(Usuario, {foreignKey: "idTipoUsuario"})
// Usuario.belongsTo(TipoUsuario)
/*{
    "nombre": "Luna",
    "apellido": "Hazuki", 
    "fechaNacimiento": "2006/05/20", 
    "direccion": "Cerca de la esquina con el semáforo", 
    "correo": "anapaulamendozadiaz2006@gmail.com", 
    "contraseña": "texto importante"
}*/

export {Usuario}