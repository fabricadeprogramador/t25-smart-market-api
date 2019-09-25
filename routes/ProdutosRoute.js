class ProdutoRoute {

    constructor(app){

        app.get('/produto', function(req, res){
            res.json(produto)
        })

        app.post('/produto', function(req, res){
            res.json(produto)
        })

        app.put('/produto', function(req, res){
            res.send("Requisição PUT para /produto")
        })

        app.delete('/produto', function(req, res){
            res.send("Requisição DELETE para /produto")
        })
        
    }
}

module.exports = ProdutoRoute