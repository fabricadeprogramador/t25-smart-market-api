/*'use strict'
const Usuario = require('./../model/Usuario')

let usuario1 = new Usuario(0, true, 'jao da silva', 123, 'ADMIN');
let usuario2 = new Usuario(1, true, 'maria de fatima', 123, 'ADMIN');
let usuario3 = new Usuario(2, true, 'roberto de souza', 123, 'ADMIN');


let usuarios = [usuario1, usuario2, usuario3];
let cont = 3

class UsuarioController {

    buscarTodos(req, res) {
        res.json(usuarios)
    }

    adicionar(req, res) {
        let novo = req.body
        novo.id = cont
        cont++
        usuarios.push(novo)
        res.json(novo)
    }

    editar(req, res) {
        let id = req.body.id
        let erro = true

        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].id == id) {
                usuarios[i] = req.body
                erro = false
            }
        }
        if (erro) {
            res.status(500).send("Erro ao editar Usuario!")
        } else {
            res.status(200).send("Usuario editado com sucesso!")
        }
    }

    deletar(req, res) {
        let id = req.params.id
        let erro = true
        let posicao = null

        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].id == id) {
                posicao = i
                erro = false
            }
        }
        if (erro) {
            res.status(500).send("Erro ao remover usuario!")
        } else {

            res.status(200).send(usuarios.splice(posicao, 1))
        }
    }


}

module.exports = UsuarioController;
*/
