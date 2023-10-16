//URL https://bymykel.github.io/CSGO-API/api/pt-BR/agents.json

import axios from "axios";



const Card = async (language) => {
    const teste = language == 'portugues' ? 'pt-BR' : 'en'
    console.log(teste);
    const URL = `https://bymykel.github.io/CSGO-API/api/${teste}/agents.json`
    try {
        const resposta = await axios.get(URL);
        return resposta.data;
    } catch (error) {
        throw error;
    }
}

export default Card