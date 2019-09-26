const Compra = require('./../model/Compra')
const ComprasController = require('./../controller/ComprasController')

class CompraRoute {

    constructor(app) {

        let compra = new ComprasController()

        app.route('/compras')
            .get(compra.buscarCompras)
            .put(compra.editar)
            .post(compra.adicionar)

        app.route('/compras/:id')
            .delete(compra.deletar)
    }
}

module.exports = CompraRoute