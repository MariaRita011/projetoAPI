'use client'

import React, { useEffect, useState } from 'react'
import Cards from '@/data/armas';
import ListaAgentes from '@/models/ListaAgentes';
import  { HeaderDefault } from '../components/header/Header';


const listaAgentes = new ListaAgentes();

function page() {

    const [nome, setNome] = useState('')
    const [lista, setLista] = useState(listaAgentes.agentes)
    const [descricao, setDescricao] = useState('')
    const [raridade, setRaridade] = useState('')
    const [imagem, setImagem] = useState('')
    const [div1, setDiv1] = useState(true)
    const [div2, setDiv2] = useState(false)
    const [flag, setFlag] = useState(0)
    const [editButton, setEditButton] = useState(false)

    const [apiData, setApiData] = useState('');

    useEffect(() => {
        const CardsFecth = async () => {
            try {
                const dados = await Cards();
                setApiData(dados)
            } catch (error) {
                throw error;
            }
        }
        CardsFecth();
    }, [])

    function adicionar() {
        listaAgentes.adicionarAgente(nome, descricao, raridade, imagem);
        limparCampos();
    }

    function limparCampos() {
        setNome('');
        setDescricao('');
        setRaridade('');
        setImagem('');
    }

    function mudar() {
        setDiv1(!div1);
        setDiv2(!div2);
    }

    function excluir(id) {
        listaAgentes.excluirAgente(id);

        setLista(listaAgentes.agentes)
    }

    function edit(id) {
        const agente = listaAgentes.getAgentePorId(id);
        setNome(agente.nome);
        setDescricao(agente.descricao);
        setRaridade(agente.raridade);
        setImagem(agente.imagem);

        setEditButton(true)
        setFlag(id)
        setLista(listaAgentes.agentes)

    }

    function update() {
        listaAgentes.AtualizarAgente(flag, nome, descricao, raridade, imagem);
        setFlag(0);
        setLista(listaAgentes.agentes)
        setEditButton(false)
        limparCampos()

    }

    console.log(listaAgentes.agentes)

    return (
                    
        
        <div>
            <HeaderDefault/>
            <button onClick={mudar}>mudar</button>
            <div style={{ display: div1 ? 'block' : 'none' }} value={div1}>
                <input
                    type={"text"}
                    value={nome}
                    name={'nome'}
                    placeholder={'Nome do agente'}
                    onChange={(e) => setNome(e.target.value)} />
                <input
                    type={"text"}
                    value={descricao}
                    name={'descricao'}
                    placeholder={'Descrição do agente'}
                    onChange={(e) => setDescricao(e.target.value)} />
                <input
                    type={"text"}
                    value={raridade}
                    name={'raridade'}
                    placeholder={'Raridade do agente'}
                    onChange={(e) => setRaridade(e.target.value)} />
                <input
                    type={"text"}
                    value={imagem}
                    name={'imagem'}
                    placeholder={'Imagem do agente'}
                    onChange={(e) => setImagem(e.target.value)} />
                {
                    editButton ? (
                        <button onClick={update}>Atualizar</button>
                    ) : (
                        <button onClick={adicionar}>Adicionar</button>
                    )
                }
            </div>
            <div style={{ display: div2 ? 'block' : 'none' }} value={div2}>
                {
                    listaAgentes.agentes.map((agente) => (
                        <div key={agente.id}>
                            <h1>{agente.nome}</h1>
                            <button onClick={() => excluir(agente.id)}>Excluir</button>
                            <button onClick={() => edit(agente.id)}>Editar</button>
                        </div>
                    ))
                }

            </div>
            {/* <h2>Teste</h2>
            <div>
                {
                    apiData ? (
                        apiData.map((card) => (
                            <div key={card.id}>
                                <h1>{card.name}</h1>
                                <p>{card.description}</p>
                              <img src={card.image} alt={card.name} width={264} height={264} /> 
                            </div>

                        ))
                    ) :
                        (
                            <p>Carregando..</p>
                        )
                }
            </div > */}

        </div>
    )
}

export default page