const router = (app) => {

    app.get('/Autor');
    
    app.get('/Autor/:id')
    
    app.post('/Autor');
    
    app.put('/Autor/:id')
    
    app.delete('/Autor/:id')
    
}

export default router;