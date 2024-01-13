import { DATE, INTEGER, STRING, json } from "sequelize";

function ValidarCuerpoEntero(request, validables) {
    const lista = json(validables)['conditions']
    const nombres = Object.keys(lista)
    nombres.pop()
    nombres.pop()
    nombres.shift()
    console.log(nombres);
    // for (const esto of Object.values(lista)) {
    //     console.log(esto['type'] instanceof STRING);
    //     if (Object.keys(esto['type']).includes('STRING')) {
    //         console.log('Es un string');
    //     }
    //     console.log(esto['type']);
    // }
    // console.log(request.body);
    if (!request?.body) {
        return 'Debe ingresar el body de la request'
    }
    for (const propiedad of nombres) {
        if (!request.body[propiedad]) {
            return `Debe ingresar la propiedad \"${propiedad}\"`
        }
        if (lista[propiedad]['type'] instanceof INTEGER) {
            if (!Number.isInteger(request.body[propiedad])) {
                return `La propiedad \"${propiedad}\" debe ser de tipo numérico`
            }
        } else if (lista[propiedad]['type'] instanceof STRING) {
            if (typeof request.body[propiedad] === 'string' || 
                request.body[propiedad] instanceof String) {
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
    console.log(request.body);
    // for (const [index, value] of validables.entries()) {
    //     if (!request.body[value]) {
    //         return `Debe ingresar ${value}`;
    //     }
    //     switch (typeof request.body[value]) {
    //         case "string":
    //             if (request.body[value].trim() == '') {
    //                 return `${value} no puede ser un string vacío`
    //             }
    //             break;
    //         case "object": 
    //             if (isNaN(Date.parse(request.body[value]))) {
    //                 return `${value} no puede tiene que ser un date`
    //             }
    //             break;
    //         case "number": 
    //             if (isNaN(request.body[propiedad])) {
    //                 return `${propiedad} no puede ser de tipo NAN`
    //             }
    //             break;
    //         default:
    //             break;
    //     }
    // }




    // for (let i = 0; i < listaNombres.length; i++) {
    //     if (!request.body[listaNombres[i]]) {
    //         return `Debe ingresar ${listaNombres[i]}`;
    //     }
    //     switch (typeof listaValores[i]) {
    //         case "string":
    //             if (request.body[listaNombres[i]].trim() == '') {
    //                 return `${listaNombres[i]} no puede ser un string vacío`
    //             }
    //             break;
    //         case "object": 
    //             if (isNaN(Date.parse(request.body[listaNombres[i]]))) {
    //                 next(new Error(`${listaNombres[i]} no puede tiene que ser un date`))
    //             }
    //             break;
    //         case "number": 
    //             if (isNaN(request.body[listaNombres[i]])) {
    //                 next(new Error(`${listaNombres[i]} no puede ser de tipo NAN`))
    //             }
    //             break;
    //         default:
    //             break;
    //     }
    // }
}

export {ValidarCuerpoEntero}

// Terminar las validaciones, pasando validables a un objeto con sus nombres y valores
// Buscar como hacer el forof con el index
// Buscar si validaciones extra: mínimo, máximo