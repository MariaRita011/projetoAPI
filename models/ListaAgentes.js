

export default class ListaAgentes {
    constructor() {
        this.agentes = [];
    }

    adicionarAgente(novoAgente) {
        console.log('array', this.agentes);
        this.agentes.push(novoAgente);
        console.log("lista agente class", this.agentes);
    }



    getListaAgentes() {
        return this.agentes
    }

    excluirAgente(param) {
        this.agentes = this.agentes.filter(agente => agente.id != param.id);

        console.log('remover', this.agentes);
    }


    getAgentePorId(id) {
        const agente = this.agentes.find(agente => agente.id == id);
        return agente;
    }

    AtualizarAgente(id, name, description, image) {
        const agente = this.getAgentePorId(id);

        if (agente) {
            agente.name = name;
            agente.description = description;
            agente.image = image;
        }
        return this.agentes;
    }

}