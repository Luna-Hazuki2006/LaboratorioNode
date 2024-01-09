import { SesionServicio } from "./Service.js";

class SesionControlador {

    async Crear(request, response) {
        try { 
            const servicio = new SesionServicio();
            const {token, fechaSesion, usuarioCedula} = request.body;
            const sesion = await servicio.Crear(token, fechaSesion, usuarioCedula);
            
            if (sesion) {
                response.status(200).json({data: sesion});
            }
            else {
                response.status(400).send('no hay datos u otra sesión');
            }
        }
        catch(error) {
            response.status(500).send(error)
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
            response.status(500).send(error)
        }
    }

    async Cerrar(request, response) {
        try { 
            const servicio = new SesionServicio();
            const id = request.params.id
            const fechaFin = new Date()
            const sesion = await servicio.Cerrar(id, fechaFin);
            
            if (sesion) {
                response.status(200).send("Se cerró la sesión exitósamente");
            }
            else {
                response.status(400).send('No se encuentra la sesión');
            }
        }
        catch(error) {
            response.status(500).send(error)
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
            response.status(500).send(error)
        }
    }

}

export {SesionControlador}