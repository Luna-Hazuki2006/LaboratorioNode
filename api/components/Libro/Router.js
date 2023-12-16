const router = (app) => {

    app.get('/Libro');
    
    app.get('/Libro/:id')
    
    app.post('/Libro');
    
    app.put('/Libro/:id')
    
    app.delete('/Libro/:id')
    
}

export default router;