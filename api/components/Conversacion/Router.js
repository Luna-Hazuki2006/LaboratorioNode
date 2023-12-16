const router = (app) => {

    app.get('/Router');
    
    app.get('/Router/:id')
    
    app.post('/Router');
    
    app.put('/Router/:id')
    
    app.delete('/Router/:id')
    
}

export default router;