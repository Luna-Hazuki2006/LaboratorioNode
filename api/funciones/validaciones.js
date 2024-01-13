import { DATE, INTEGER, STRING, json } from "sequelize";

function ValidarCuerpoEntero(request, validables) {
    const lista = json(validables)['conditions']
    const nombres = Object.keys(lista)
    nombres.pop()
    nombres.pop()
    nombres.shift()
    console.log(nombres);
    if (!request?.body) {
        return 'Debe ingresar el body de la request'
    }
    console.log(request.body);
    for (const propiedad of nombres) {
        if (!request.body[propiedad]) {
            return `Debe ingresar la propiedad \"${propiedad}\"`
        }
        if (lista[propiedad]['type'] instanceof INTEGER) {
            if (!Number.isInteger(request.body[propiedad])) {
                return `La propiedad \"${propiedad}\" debe ser de tipo numérico`
            }
        } else if (lista[propiedad]['type'] instanceof STRING) {
            if (request.body[propiedad] instanceof String) {
                if (request.body[propiedad].trim() == '') {
                    return `La propiedad \"${propiedad}\" no puede estar vacía`
                }
            } else {
                return `La propiedad \"${propiedad}\" debe ser de tipo string`
            }
        } else if (lista[propiedad]['type'] instanceof DATE) {
            if (isNaN(Date.parse(request.body[propiedad]))) {
                return `La propiedad \"${propiedad}\" debe ser de tipo date`
            } 
        }
    }
    return false
}

export {ValidarCuerpoEntero}

// Poder crear, eliminar relaciones de muchos a muchos en una mismna entidad sin 
// tener que declarar los servicios de la clase intermedia 
// https://sequelize.org/docs/v6/advanced-association-concepts/advanced-many-to-many/ 
// https://stackoverflow.com/questions/34831639/how-to-remove-relation-for-specific-instances-with-sequelize-mysql