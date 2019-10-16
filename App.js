'use strict'

const Express = require('express')
const Cors = require('cors')

const Mongoose = require('mongoose')

const Convidado = require('./model/Convidado')

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

        //Conectando com o banco mLab
        Mongoose.connect("mongodb://t25-smart-market:t25-ht@ds233268.mlab.com:33268/smart-market-api", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        new Convidado()

        const ConvidadoRoute = require('./routes/ConvidadosRoute')
        const ContatoRoute = require('./routes/ContatosRoute')
        const ProdutoRoute = require('./routes/ProdutosRoute')
        const CompraRoute = require('./routes/ComprasRoute')
        const UsuarioRoute = require('./routes/UsuariosRoute')
        const ClienteRoute = require('./routes/ClientesRoute')
        const SetorRoute = require('./routes/SetoresRoute')

        //Instanciar a minha rotas
        //Rota de Convidados
        new ConvidadoRoute(this.app)

        new ContatoRoute(this.app)

        new ProdutoRoute(this.app)

        //new UsuarioRoute(this.app)

        new CompraRoute(this.app)

        //new UsuarioRoute(this.app)
        new ClienteRoute(this.app)

        new SetorRoute(this.app)

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


//dbuser: t25-smart-market
//dbpassword: t25-ht