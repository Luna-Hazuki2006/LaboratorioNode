function ValidarCuerpoEntero(request, validables) {
// function ValidarCuerpoEntero(request, response, next) {
    // if (!request?.body) {
    //     return 'Debe ingresar el body de la request'
    // }
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