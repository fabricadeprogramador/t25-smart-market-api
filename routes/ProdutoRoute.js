let produtos = [{
    _id: 0,
    nome: 'Arroz',
    marca: 'Tio João',
    descricao: 'Arroz tipo 1 5kg',
    valor: 10.90,
    qtdeDisponivel: 10,
    estoque_minimo: 20,
    controla_validade: true,
    validade: '01/01/2019',
    id_departamento: 2,
    ativo: true
},
{
    _id: 1,
    nome: 'TV 30"',
    marca: 'LG',
    descricao: 'LED 4K',
    valor: 1999.99,
    qtdeDisponivel: 49,
    estoque_minimo: 10,
    controla_validade: false,
    validade: '',
    id_departamento: 1,
    ativo: true
}

]

let cont = 2

class ProdutoRoute {

    constructor(app) {

        app.get('/produtos', function (req, res) {
            res.json(produtos)
        })

        app.post('/produtos', function (req, res) {
            let novo = req.body
            novo._id = cont
            cont++
            produtos.push(novo)
            res.json(novo)
        })

        app.put('/produtos', function (req, res) {
            res.send("Requisição PUT para /produtos")
        })

        app.delete('/produtos', function (req, res) {
            res.send("Requisição DELETE para /produtos")
        })
    }
}

module.exports = ProdutoRoute