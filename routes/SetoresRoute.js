const SetorController = require('./../controller/SetorController');

class SetorRouter {

    constructor(app) {

        app.route('/setores')
           .get(SetorController.buscarTodos)
           .post(SetorController.adicionar)
           .put(SetorController.editar)

        //app.route('/setores/ativacao')
          // .post(SetorController.ativacao)

    }
}

module.exports = SetorRouter