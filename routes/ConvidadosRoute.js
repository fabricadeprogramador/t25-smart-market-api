const Convidado = require('./../model/Convidado')
const ConvidadoController = require('./../controller/ConvidadoController')
class ConvidadoRoute {

    constructor(app) {

        let convidado = new ConvidadoController()

        app.route('/convidados')
            .get(convidado.buscarTodos)
            .post(convidado.adicionar)
            .put(convidado.editar)


        app.route('/convidados/:id')
            .delete(convidado.deletar)

    }
}

module.exports = ConvidadoRoute