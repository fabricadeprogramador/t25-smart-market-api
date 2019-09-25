class Cliente {

    constructor(id, nome, cpf, rg, email, cep, endereco, numero, bairro, cidade, uf, complemento, telefone, sexo, ativo) {
        this.id = id
        this.nome = nome
        this.cpf = cpf
        this.rg = rg
        this.email = email
        this.cep = cep
        this.endereco = endereco
        this.numero = numero
        this.bairro = bairro
        this.cidade = cidade
        this.uf = uf
        this.complemento = complemento
        this.telefone = telefone
        this.sexo = sexo
        this.ativo = ativo        
    }
}

module.exports = Cliente