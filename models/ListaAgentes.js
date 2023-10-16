import Agente from "./agente";

export default class ListaAgentes {
    constructor() {
        this.agentes = [];
    }

    adicionarAgente(nome, descricao, raridade, imagem) {
        const novoAgente = new Agente(nome, descricao, raridade, imagem);

        console.log(novoAgente);

        this.agentes.push(novoAgente);
    }

    excluirAgente(id) {
        const ListaAgentes = this.agentes.filter(Agente => Agente.id != id);
        this.agentes = ListaAgentes;
        return ListaAgentes;
    }

    getAgentePorId(id) {
        const agente = this.agentes.find(agente => agente.id == id);
        return agente;
    }

    AtualizarAgente(id, nome, descricao, raridade, imagem) {
        const agente = this.getAgentePorId(id);
    
        if (agente) {
            agente.nome = nome;
            agente.descricao = descricao;
            agente.raridade = raridade;
            agente.imagem = imagem;
        }
        return this.agentes;
    }

}