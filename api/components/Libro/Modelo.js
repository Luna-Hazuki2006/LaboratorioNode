import { DataTypes } from 'sequelize'; 
import { sequelize } from '../../config/coneccion.js';
import { Categorias } from "../Categoria/Modelo.js";
import { Autores } from "../Autor/Modelo.js";
import { TipoLibro } from "../TipoLibro/Modelo.js";
import { Relaciones } from "../Relacion/Modelo.js";

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



export {Libro}