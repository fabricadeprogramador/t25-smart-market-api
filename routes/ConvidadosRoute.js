const ConvidadoController = require('./../controller/ConvidadoController')
class ConvidadoRoute {

    constructor(app) {

        let convidado = new ConvidadoController()

        app.route('/convidados')
            .get(ConvidadoController.buscarTodos)
            .post(ConvidadoController.adicionar)
            .put(convidado.editar)


        app.route('/convidados/:id')
            .delete(convidado.deletar)

    }
}

module.exports = ConvidadoRoute