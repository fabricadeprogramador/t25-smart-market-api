const SetorController = require('./../controller/SetorController');
class SetorRouter {

    constructor(app) {

        let setor = new SetorController();

        app.route('/setores')
           .get(setor.buscarTodos)
           .post(setor.adicionar)
           .put(setor.editar)

        app.route('/setores/ativacao')
           .post(setor.ativacao)
    }
}

module.exports = SetorRouter