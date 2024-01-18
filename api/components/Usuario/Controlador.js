import { UsuarioServicio } from "./Service.js";

class UsuarioControlador {

    async Crear(request, response) {
        try { 
            const servicio = new UsuarioServicio();
            const {cedula, nombre, apellido, fechaNacimiento, direccion, correo, contraseña, idTipoUsuario} = request.body;
            const usuario = await servicio.Crear(cedula, nombre, apellido, fechaNacimiento, direccion, correo, contraseña, idTipoUsuario);
            
            if (usuario) {
                response.status(200).json({data: usuario});
            }
            else {
                response.status(400).send('no hay datos u otro mensaje');
            }
        }
        catch(error) {
            response.status(400).send(error)
        }
    }

    async Modificar(request, response) {
        try { 
            const servicio = new UsuarioServicio();
            const {nombre, apellido, fechaNacimiento, direccion, correo, contraseña} = request.body;
            const cedula = request.params.cedula
            const usuario = await servicio.Modificar(cedula, nombre, apellido, fechaNacimiento, direccion, correo, contraseña);
            
            if (usuario) {
                response.status(200).json({data: "Se modificó con éxito :D"});
            }
            else {
                response.status(400).send('Hubo un problema al modificar');
            }
        }
        catch(error) {
            response.status(400).send(error)
        }
    }

    async Consultar(request, response) {
        try { 
            const servicio = new UsuarioServicio();
            const cedula = request.params.cedula
            const usuario = await servicio.Consultar(cedula);
            
            if (usuario) {
                response.status(200).json({data: usuario});
            }
            else {
                response.status(400).send('No se encuentra el usuario');
            }
        }
        catch(error) {
            response.status(400).send(error)
        }
    }

    async Listar(request, response) {
        try {
            const servicio = new UsuarioServicio();
            const data = await servicio.Listar()
            if (data) {
                response.status(200).json({"data": data})
            } else {
                response.status(400).send("no hay datos y otro mensaje")
            }
        } catch (error) {
            response.status(400).send(error)
        }
    }
}

export {UsuarioControlador}