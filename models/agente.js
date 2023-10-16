export default class Agente {
    constructor(nome, descricao, raridade, imagem) {
        this.nome = nome;
        this.descricao = descricao;
        this.raridade = raridade;
        this.imagem = imagem;
        this.id = this.gerarId();
    }

    gerarId() {
        return Math.floor(Math.random() * 999999);
    }
}