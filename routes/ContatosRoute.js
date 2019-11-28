const ContatoController = require('./../controller/ContatoController')
class ContatoRoute {

    constructor(app) {

        // let contato = new ContatoController()

        app.route('/contato')
            .get(ContatoController.buscarTodos)
            .post(ContatoController.adicionar)
            .put(ContatoController.editar)


        app.route('/contato/cliente')
            .post(ContatoController.buscarPorCliente)


        // app.route('/contato/:id')

        //     .delete(contato.deletar)

    }
}

module.exports = ContatoRoute