import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';
import { Libro } from "../Libro/Modelo.js";

const Categorias = sequelize.define('Categoria', {
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
}, { tableName: 'categoriaAna' });

// Categorias.belongsToMany(Libro, {through: "LibroCategoria", as: 'libros', foreignKey: 'idCategoria'})
// ahora que hago :'v
export {Categorias}