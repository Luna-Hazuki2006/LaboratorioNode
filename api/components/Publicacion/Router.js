const router = (app) => {

    app.get('/Publicacion');
    
    app.get('/Publicacion/:id')
    
    app.post('/Publicacion');
    
    app.put('/Publicacion/:id')
    
    app.delete('/Publicacion/:id')
    
}

export default router;