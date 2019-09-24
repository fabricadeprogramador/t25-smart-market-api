let produto = [
    {
      _id: "5cb523fd6567674d08afb60b",
      descricao: "aaa",
      valor: 1231231244444,
      qtdeDisponivel: 123121244444444450,
      marca: "teste",
      departamento: {
        _id: "5cabd8ee1890cc0017f858d7",
        nome: "Informática"
      },
      __v: 0,
      imagem: "aaaaaa"
    },
    {
        _id: "5cb523fd6567674d08afb60b",
        descricao: "aaa",
        valor: 1231231244444,
        qtdeDisponivel: 123121244444444450,
        marca: "teste",
        departamento: {
          _id: "5cabd8ee1890cc0017f858d7",
          nome: "Informática"
        },
        __v: 0,
        imagem: "aaaaaa"
      },
      {
        _id: "5cb523fd6567674d08afb60b",
        descricao: "aaa",
        valor: 1231231244444,
        qtdeDisponivel: 123121244444444450,
        marca: "teste",
        departamento: {
          _id: "5cabd8ee1890cc0017f858d7",
          nome: "Informática"
        },
        __v: 0,
        imagem: "aaaaaa"
      },
      {
        _id: "5cb523fd6567674d08afb60b",
        descricao: "aaa",
        valor: 1231231244444,
        qtdeDisponivel: 123121244444444450,
        marca: "teste",
        departamento: {
          _id: "5cabd8ee1890cc0017f858d7",
          nome: "Informática"
        },
        __v: 0,
        imagem: "aaaaaa"
      }
   
  ]

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