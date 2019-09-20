class Usuario {

    constructor(id, ativo, username, senha, tipo){
        this.id = id;
        this.ativo = ativo;
        this.username = username;
        this.senha = senha;
        this.tipo = tipo;
    }
}

module.exports = Usuario