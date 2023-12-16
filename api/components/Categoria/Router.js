const router = (app) => {

    app.get('/Categoria');
    
    app.get('/Categoria/:id')
    
    app.post('/Categoria');
    
    app.put('/Categoria/:id')
    
    app.delete('/Categoria/:id')
    
}

export default router;