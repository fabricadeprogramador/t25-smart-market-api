const ConvidadoController = require('./../controller/ConvidadoController')
class ConvidadoRoute {

    constructor(app) {

        app.route('/convidados')
            .get(ConvidadoController.buscarTodos)
            .post(ConvidadoController.adicionar)
            .put(ConvidadoController.editar)

        app.route('/convidados/:id')
            .delete(ConvidadoController.deletar)

        app.route('/convidados/busca')
            .get(ConvidadoController.buscarPorNome)

    }
}

module.exports = ConvidadoRoute