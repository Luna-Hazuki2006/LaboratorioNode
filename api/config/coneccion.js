import { Sequelize } from 'sequelize';


const sequelize = new Sequelize('postgres://graco:d16mVIlilx3OFVzXgb0AW5VYnTOv0pMT@dpg-clupqhmg1b2c73cacl4g-a.oregon-postgres.render.com/gracoapidb?ssl=true');
// :D
export {
    sequelize
}