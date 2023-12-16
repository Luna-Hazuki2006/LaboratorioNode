const router = (app) => {

    app.get('/Mensaje');
    
    app.get('/Mensaje/:id')
    
    app.post('/Mensaje');
    
    app.put('/Mensaje/:id')
    
    app.delete('/Mensaje/:id')
    
}

export default router;