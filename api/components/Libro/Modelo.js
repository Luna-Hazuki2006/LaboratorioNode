import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';
import { Categorias } from "../Categoria/Modelo.js";

const Libro = sequelize.define('Libro', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sinopsis: {
        type: DataTypes.STRING,
        allowNull: true
    }, 
    createdAt: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }
}, { tableName: 'libroAna' });

Libro.belongsToMany(Categorias, {through: "LibroCategoria", as: 'categorias', foreignKey: 'idLibro'})

export {Libro}