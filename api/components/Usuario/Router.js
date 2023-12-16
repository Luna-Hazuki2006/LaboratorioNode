const router = (app) => {

    app.get('/Usuario');
    
    app.get('/Usuario/:id')
    
    app.post('/Usuario');
    
    app.put('/Usuario/:id')
    
    app.delete('/Usuario/:id')
    
}

export default router;