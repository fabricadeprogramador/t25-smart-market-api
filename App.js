'use strict'

const Express = require('express')
const Cors = require('cors')
const ConvidadoRoute = require('./routes/ConvidadosRoute')
const ContatoRoute = require('./routes/ContatosRoute')
const ProdutoRoute = require('./routes/ProdutosRoute')
<<<<<<< HEAD
const UsuarioRoute = require('./routes/UsuariosRoute')


=======
const CompraRoute = require('./routes/ComprasRoute')
const UsuarioRoute = require('./routes/UsuariosRoute')
>>>>>>> 200dbdf3694830a10121c934ecc4a2c0d604c0d6

class App {

    constructor() {
        this.app;
    }

    //Método para inicializar o objeto do Express
    init() {

        //Instanciar o express
        this.app = Express();
      

        //Conversor JSON-ObjetoJS
        this.app.use(Express.json())
        this.app.use(Cors())

        //Instanciar a minha rotas
        //Rota de Convidados
        new ConvidadoRoute(this.app)

        new ContatoRoute(this.app)

        new ProdutoRoute(this.app)

<<<<<<< HEAD
=======
        new CompraRoute(this.app)

>>>>>>> 200dbdf3694830a10121c934ecc4a2c0d604c0d6
        new UsuarioRoute(this.app)
        
        //Rota Raíz
        this.app.get('/', function (req, res) {
            res.send('Bem-vindo a API - Smart Market!')
        })

        //Listen
        this.app.listen(3000, function () {
            console.log('API - Smart Market rodando na porta: 3000')
        })

    }
}

new App().init()