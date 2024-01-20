import { SesionServicio } from "./Service.js";

class SesionControlador {

    async Iniciar(request, response) {
        try { 
            const servicio = new SesionServicio();
            const {contraseña, cedulaUsuario} = request.body;
            // token = servicio.Nuevo(info)
            const sesion = await servicio.Crear(contraseña, cedulaUsuario);
            
            if (sesion) {
                response.status(200).json({data: sesion});
            }
            else {
                response.status(400).send('no hay datos u otra sesión');
            }
        }
        catch(error) {
            response.status(400).send(error)
        }
    }

    async Consultar(request, response) {
        try { 
            const servicio = new SesionServicio();
            const id = request.params.id
            const sesion = await servicio.Consultar(id);
            
            if (sesion) {
                response.status(200).json({data: sesion});
            }
            else {
                response.status(400).send('No se encuentra la sesión');
            }
        }
        catch(error) {
            response.status(400).send(error)
        }
    }

    async Cerrar(request, response) {
        try { 
            const servicio = new SesionServicio();
            const id = request.params.id
            const sesion = await servicio.Cerrar(id);
            
            if (sesion) {
                response.status(200).send("Se cerró la sesión exitósamente");
            }
            else {
                response.status(400).send('No se encuentra la sesión');
            }
        }
        catch(error) {
            response.status(400).send(error)
        }
    }

    async ListarPorUsuario(request, response) {
        try {
            const servicio = new SesionServicio();
            const usuarioCedula = request.params.usuarioCedula
            const data = await servicio.Listar(usuarioCedula)
            if (data) {
                response.status(200).json({"data": data})
            } else {
                response.status(400).send("no hay datos y otro Sesion")
            }
        } catch (error) {
            response.status(400).send(error)
        }
    }
}

export {SesionControlador}

// en el token: 
// fecha de conección, cédula usuario, duración de la sesión, caracteres bonitos
// guardar caracteres bonitos en la base de datos
// eso se le va a dar al usuario SIN CONTRASEÑA
// Esto va a ser también para el recuperativo