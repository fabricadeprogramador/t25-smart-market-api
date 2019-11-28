const UsuarioController = require('./../controller/UsuarioController')

class UsuarioRoute {

    constructor(app) {

        app.route('/usuarios')
            .get(UsuarioController.buscarTodos)
            .post(UsuarioController.adicionar)
            .put(UsuarioController.editar)

        app.route('/usuarios/:id')
            .delete(UsuarioController.deletar)

        app.route('/usuarios/busca')
            .get(UsuarioController.buscarPorNome)

        app.route('/autenticar')
            .post(UsuarioController.autenticar)
            
    }
}

module.exports = UsuarioRoute;


