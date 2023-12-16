import  parser  from 'body-parser'
import  express  from 'express';

import { router } from './api/router.js'
import { sequelize } from './api/config/coneccion.js';

const app = express();
// y también le hice los cambios que me dijo de nombres de los archivos
// ¿¿¿???
app.use(parser.json())

const routerExpress = express.Router();

router(routerExpress)

app.use(routerExpress)

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