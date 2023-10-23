import Agente from "./agente";

export default class ListaAgentes {
    constructor() {
        this.agentes = [];
    }

    adicionarAgente( novoAgente/* nome, descricao, raridade, imagem */) {
      /*   const novoAgente = new Agente(nome, descricao, raridade, imagem);
 */
        

        this.agentes.push(novoAgente);
        console.log("lista agente class", this.agentes);
    }
    
 /*    addAgente(agente){
        this.listaAgentes.push(agente)
        console.log("Lista Agente Class",this.listaAgentes)
    } */

    getListaAgentes(){
        return this.agentes
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
            agente.image = imagem;
        }
        return this.agentes;
    }

}