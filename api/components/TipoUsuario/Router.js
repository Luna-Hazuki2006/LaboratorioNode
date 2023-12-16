const router = (app) => {

    app.get('/TipoUsuario');
    
    app.get('/TipoUsuario/:id')
    
    app.post('/TipoUsuario');
    
    app.put('/TipoUsuario/:id')
    
    app.delete('/TipoUsuario/:id')
    
}

export default router;