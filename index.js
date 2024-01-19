import  parser  from 'body-parser'
import  express  from 'express';

import { router } from './api/router.js'
import { sequelize } from './api/config/coneccion.js';
import swaggerjsdoc from 'swagger-jsdoc';
import swaggerui from 'swagger-ui-express'

const app = express();
// y también le hice los cambios que me dijo de nombres de los archivos
// ¿¿¿???
app.use(parser.json())

const routerExpress = express.Router();

router(routerExpress)

app.use(routerExpress)

const options = {
    definition: {
        openapi: "3.0.0", 
        info: {
            title: "Api para aplicación de venta de libros con Express y Swagger", 
            version: "0.1.0", 
            description: "Una api hecha en nodejs de venta de libros con Express y documentada con Swagger", 
            contact: {
                name: "Venta de libros online", 
                url: "https://www.linkedin.com/in/ana-paula-mendoza-d%C3%ADaz-1a65b4250", 
                email: "anapaulamendozadiaz2006@gmail.com"
            }
        }, 
        servers: [
            {
                url: "http://localhost:9000/"
            }
        ]
    },
    apis: ["./api/router.js"]
};

const spacs = swaggerjsdoc(options)
app.use("/api-docs", swaggerui.serve, swaggerui.setup(spacs))

const port = 9000;
// :v profe... ¿y ahora qué hice? :'v
sequelize
.authenticate()
.then(() => {
    console.log('Connection success');
    return sequelize.sync();
})
.then(() => {
    console.log('Sync models');
    app.listen(port, () => {
        console.log(`Server listen on http://localhost:${port}`);
    });
})
.catch((error) => {
    console.error('Connection fail', error);
});

// .....
// emmmmmmmmmmmmmmmm
// aquí viene un pequeño dilema :v
// esta es una computadora de gracosoft
// en mi computadora de case fue donde instale
// ok