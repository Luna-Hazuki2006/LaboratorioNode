const router = (app) => {

    app.get('/TipoLibro');
    
    app.get('/TipoLibro/:id')
    
    app.post('/TipoLibro');
    
    app.put('/TipoLibro/:id')
    
    app.delete('/TipoLibro/:id')
    
}

export default router;