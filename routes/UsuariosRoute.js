const Usuario = require('./../model/Usuario')
const UsuarioController = require('./../controller/UsuarioController')

class UsuarioRoute {

    constructor(app) {

        let usuario = new UsuarioController()

        app.route('/usuarios')
            .get(usuario.buscarTodos)
            .post(usuario.adicionar)
            .put(usuario.editar)


        app.route('/usuarios/:id')
            .delete(usuario.deletar)
    }
}

module.exports = UsuarioRoute

