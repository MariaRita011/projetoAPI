export default class Agente {
    constructor(name, description,image) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.id = this.gerarId();
    }

    gerarId() {
        return Math.floor(Math.random() * 999999);
    }
}