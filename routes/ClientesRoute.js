const ClienteController = require('./../controller/ClienteController')
class ClienteRoute {

    constructor(app) {

        let cliente = new ClienteController()

        app.route('/clientes')
            .get(ClienteController.buscarTodos)
            .post(ClienteController.adicionar)
            .put(ClienteController.editar)

        app.route('/clientes/usuario')
            .post(ClienteController.buscarClientePorUsuario)


    }
}

module.exports = ClienteRoute