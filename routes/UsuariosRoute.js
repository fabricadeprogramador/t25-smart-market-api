let usuarios = [
    {
        id: 0,
        ativo: true,
        username: "Jao da Silva",
        senha: "123",
        tipo: "ADIMIN",
    },
    {
        id: 1,
        ativo: true,
        username: "Maria de Fatima",
        senha: "123",
        tipo: "ADMIN"
    },
    {
        id: 2,
        ativo: true,
        username: "Cesar da Silva",
        senha: "123",
        tipo: "ADMIN"
    }
]

let cont = 3;

class UsuarioRoute {

    constructor(app) {

        app.get('/usuarios', function(req, res){
            res.json(usuarios);
        })

        app.post('/usuarios', function(req, res){
            let novo = req.body;
            novo.id = cont;
            cont++;
            usuarios.push(novo);
            res.json(novo);
        })

        app.put('/usuarios', function(req, res){
            res.send("Requisição PUT para /usuarios");
        })

        app.delete('/usuarios', function(req,res){
            res.send("Requisição DELETE para /usuarios");
        })
    }
}

module.exports = UsuarioRoute

