export function ValidarCuerpoEntero(request, response, next) {
    if (!request?.body) {
        next(new Error('Debe ingresar el body de la request'));
    }
    const listaNombres = Object.keys(request.cuerpo)
    const listaValores = Object.values(request.cuerpo)
    for (let i = 0; i < listaNombres.length; i++) {
        if (!request.body[listaNombres[i]]) {
            next(new Error(`Debe ingresar ${listaNombres[i]}`));
        }
        switch (typeof listaValores[i]) {
            case "string":
                if (request.body[listaNombres[i]].trim() == '') {
                    next(new Error(`${listaNombres[i]} no puede ser un string vacío`))
                }
                break;
            case "object": 
                if (isNaN(Date.parse(request.body[listaNombres[i]]))) {
                    next(new Error(`${listaNombres[i]} no puede tiene que ser un date`))
                }
            default:
                break;
        }
    }
}

export {ValidarCuerpoEntero}