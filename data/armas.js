//URL https://bymykel.github.io/CSGO-API/api/pt-BR/agents.json

import axios from "axios";

const URl = `https://bymykel.github.io/CSGO-API/api/pt-BR/agents.json`;

const Card = async () => {

    
    try {
        const resposta = await axios.get(URl);
        return resposta.data;
    } catch (error) {
        throw error;
    }
}

export default Card