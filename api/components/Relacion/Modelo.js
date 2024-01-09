import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';
import { Autores } from "../Autor/Modelo.js";
import { TiposRelaciones } from "../TiposRelaciones/Modelo.js";

const Relaciones = sequelize.define('Relaciones', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    }, 
    idTiposRelaciones: {
        type: DataTypes.INTEGER, 
        allowNull: false
    }, 
    idAutor: {
        type: DataTypes.INTEGER, 
        allowNull: false
    }, 
    createdAt: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'relacionesAna' });

TiposRelaciones.hasMany(Relaciones, {foreignKey: 'idTiposRelaciones'})
Relaciones.belongsTo(TiposRelaciones)

Autores.hasMany(Relaciones, {foreignKey: 'idAutor'})
Relaciones.belongsTo(Autores)

export {Relaciones}