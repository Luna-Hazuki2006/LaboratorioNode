import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';
import { Usuario } from "../Usuario/Modelo.js";
import { Libro } from "../Libro/Modelo.js";

const Publicacion = sequelize.define('Publicacion', {
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'publicacionAna' });

// Usuario.hasMany(Publicacion, {foreignKey: "cedulaUsuario"})
// Publicacion.belongsTo(Usuario)

// Libro.hasMany(Publicacion, {foreignKey: 'idLibro'})
// Publicacion.belongsTo(Libro)

export {Publicacion}