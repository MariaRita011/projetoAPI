import Agente from "./agente";

export default class ListaAgentes {
    constructor() {
        this.agentes = [];
        this.todos = [];
    }

   
    adicionarAgente(name, description, rarity, image) {
        const novoAgente = new Agente(name, description, rarity, image);

        console.log(novoAgente);

        this.agentes.push(novoAgente);
        console.log(this.dadosApi);
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

    AtualizarAgente(id, name, description, rarity, image) {
        const agente = this.getAgentePorId(id);

        if (agente) {
            agente.name = name;
            agente.description = description;
            agente.rarity = rarity;
            agente.image = image;
        }
        return this.agentes;
    }

    adicionarDadosApi(dadosApi){
        this.todos = {
            ...this.agentes,
            ...dadosApi
        }
    }

}