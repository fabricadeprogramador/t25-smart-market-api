const ClienteController = require('./../controller/ClienteController')
class ClienteRoute {

    constructor(app) {

        let cliente = new ClienteController()

        app.route('/clientes')
            .get(cliente.buscarTodos)
            .post(cliente.adicionar)
            .put(cliente.editar)

            
        app.route('/clientes/ativacao')
            .post(cliente.ativacao)

    }
}

module.exports = ClienteRoute