'use strict'
const Cliente = require('./../model/Cliente')

let cliente1 = new Cliente(0, 'Jão', '000.111.222-33', '019992', 'jão@gmail.com', 79083333, 'Rua do Jão', 1999, 'Centro', 'Campo Grande', 'MS', 'complemento', '67999534288', 'M', true)
let cliente2 = new Cliente(1, 'Maria', '111.000.222-33', '019992', 'maria@gmail.com', 79083333, 'Rua do Jão', 1999, 'Centro', 'Campo Grande', 'MS', 'complemento', '67999198765', 'F', true)
let cliente3 = new Cliente(2, 'Antônio', '222.333.222-33', '019992', 'tonho@gmail.com', 79083333, 'Rua do Jão', 1999, 'Centro', 'Campo Grande', 'MS', 'complemento', '67999123456', 'M', true)

let clientes = [cliente1, cliente2, cliente3]
let cont = 3

class ClienteController {  

    buscarTodos(req, res) {
        res.json(clientes)
    }

    adicionar(req, res) {
        let novo = req.body
        novo.id = cont
        cont++
        clientes.push(novo)
        res.json(novo)
    }

    editar(req, res) {
        let id = req.body.id
        let erro = true

        for (let i = 0; i < clientes.length; i++) {
            if (clientes[i].id == id) {
                clientes[i] = req.body;
                erro = false;
            }
        }
        if (erro) {
            res.status(500).send("Erro ao editar cliente!");
        } else {
            res.status(200).send("Cliente editado com sucesso!");
        }
    }

    ativacao(req, res) {

        let id = req.body.id
        let erro = true;

        for (let i = 0; i < clientes.length; i++) {
            if (clientes[i].id == id) {
                clientes[i].ativo = !req.body.ativo;
                erro = false;
            }
        }
        if (erro) {
            res.status(500).send("Erro ao editar cliente!");
        } else {
            res.status(200).send("Cliente editado com sucesso!");
        }


    }
}
module.exports = ClienteController