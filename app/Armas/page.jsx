'use client'

import React, { useEffect, useState } from 'react'
import Cards from '@/data/armas';
import ListaAgentes from '@/models/ListaAgentes';
import Agente from '@/models/agente';

const listaAgentes = new ListaAgentes();

function page() {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [div1, setDiv1] = useState(true)
    const [div2, setDiv2] = useState(false)
    const [flag, setFlag] = useState(0)
    const [editButton, setEditButton] = useState(false)

    const [apiData, setApiData] = useState(null);
    const [agentesLista, setAgentesLista] = useState([]);

    function adicionar() {
        const novoAgente = new Agente(name, description)
        if (!agentesLista.some(agente => agente.name === name)) {
            // Se não estiver, adicione-o à lista local
            const updatedAgentes = [...agentesLista, novoAgente];
            setAgentesLista(updatedAgentes);
        }

        listaAgentes.adicionarAgente(novoAgente);

        limparCampos();
    }

    function limparCampos() {
        setName('');
        setDescription('');
        setImage('');
    }

    function mudar() {
        setDiv1(!div1);
        setDiv2(!div2);
    }


    const excluir = (param) => {
        listaAgentes.excluirAgente(param); // Remova o agente da instância compartilhada
        setAgentesLista(listaAgentes.getListaAgentes()); // Puxa a lista para o varivel local que exibe no map
    };

    function edit(id) {
        const agente = listaAgentes.getAgentePorId(id);

        setName(agente.name);
        setDescription(agente.description);
        setImage(agente.image);

        setEditButton(true)
        setFlag(id)
       /*  setLista(listaAgentes.agentes) */

    }

    function update() {
        listaAgentes.AtualizarAgente(flag, name, description, image);

        console.log('update', listaAgentes);
        
        setFlag(0);
        setAgentesLista(listaAgentes.agentes)
        setEditButton(false)
        limparCampos()
        mudar()

    }

    useEffect(() => {
        const CardsFecth = async () => {
            try {
                const dados = await Cards();
                console.log('dados useefect', dados);
                setApiData(dados)
            } catch (error) {
                throw error;
            }
        }
        CardsFecth();
    }, [])


    useEffect(() => {
        console.log('passo por aq');
        console.log('apidata', apiData);
        if (apiData) {
            console.log('passo por aq 2');
            apiData.forEach((agenteData) => {
                const novoAgente = new Agente(
                    agenteData.name,
                    agenteData.description,
                    agenteData.image
                );
                listaAgentes.adicionarAgente(novoAgente);
            });


            const updatedAgentes = [...agentesLista, ...listaAgentes.getListaAgentes()]; // Combine os dados da API com os existentes
            setAgentesLista(updatedAgentes);
        }
    }, [apiData]);

    console.log(agentesLista)

    return (
        <div>
            <button onClick={mudar}>mudar</button>
            <div style={{ display: div1 ? 'block' : 'none' }} value={div1}>
                <input
                    type={"text"}
                    value={name}
                    name={'name'}
                    placeholder={'name do agente'}
                    onChange={(e) => setName(e.target.value)} />
                <input
                    type={"text"}
                    value={description}
                    name={'description'}
                    placeholder={'Descrição do agente'}
                    onChange={(e) => setDescription(e.target.value)} />
                <input
                    type={"text"}
                    value={image}
                    name={'image'}
                    placeholder={'image do agente'}
                    onChange={(e) => setImage(e.target.value)} />

               

{
    editButton ? (
        <button onClick={update}>Atualizar</button>
    ) : (
        <button onClick={adicionar}>adicionar</button>
    )
}
            </div>
            <div style={{ display: div2 ? 'block' : 'none' }} value={div2}>
                {
                    agentesLista ? (
                        agentesLista.map((card) => (
                            <div key={card.id}>
                                <h1>{card.name}</h1>
                                <p>{card.description}</p>
                                <img src={card.image} alt={card.name} width={264} height={264} />
                                <button onClick={() => excluir(card)}>Excluir</button>
                                <button onClick={() => edit(card.id)}>Editar</button>
                            </div>

                        ))
                    ) :
                        (
                            <p>Carregando..</p>
                        )
                }

            </div>


        </div>
    )
}

export default page