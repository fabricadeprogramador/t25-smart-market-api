let clientes = [{
    _id: 0,
    nome: 'João',
    cpf: 00100100100,
    rg: 0102020,
    email: 'teste@teste.com',
    cep: 79083000,
    endereco: 'Rua XXX',
    numero: 1000,
    bairro: 'Bairro João',
    cidade: 'Campo Grande',
    uf: 'MS',
    complemento: '',
    telefone: 67991999999,
    sexo: 'M',
    ativo: true
}
]

let cont = 4

class ClienteRoute {

    constructor(app) {

        app.get('/clientes', function (req, res) {
            res.json(clientes)
        })

        app.post('/clientes', function (req, res) {
            let novo = req.body
            novo._id = cont
            cont++
            clientes.push(novo)
            res.json(novo)
        })

        app.put('/clientes', function (req, res) {
            res.send("Requisição PUT para /clientes")
        })

        app.delete('/clientes', function (req, res) {
            res.send("Requisição DELETE para /clientes")
        })
    }
}

module.exports = ClienteRoute