const Contato = require('./../model/Contato')
const ContatoController = require('./../controller/ContatoController')

class ContatoRoute {

    constructor(app) {

        let contato = new ContatoController()

        app.route('/contato')
            .get(contato.buscarTodos)
            .post(contato.adicionar)
            .put(contato.editar)

        app.route('/contato/:id')
            .delete(contato.deletar)

    }
}

module.exports = ContatoRoute
