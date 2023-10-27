'use client'

import React, { useEffect, useState } from 'react'
import styles from './armas.module.css'
import Cards from '@/data/armas';
import ListaAgentes from '@/models/ListaAgentes';
import Agente from '@/models/agente';
import CardsAgents from '../components/cardsAgents/CardsAgents';
import Buttons from '../components/buttons/Buttons';
import ButtonsAct from '../components/buttonsact/ButtonsAct';
import NavMsg from '../components/navmsg/NavMsg';

const listaAgentes = new ListaAgentes();

function page() {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [search, setSearch] = useState('')
    const [div1, setDiv1] = useState(true)
    const [div2, setDiv2] = useState(false)
    const [flag, setFlag] = useState(0)
    const [editButton, setEditButton] = useState(false)
    //msg de erro
    const [erro, setErro] = useState(false)
    const [url, setUrl] = useState(false)
    const [sucesso, setSucesso] = useState(false)

    console.log(search);

    const [apiData, setApiData] = useState(null);
    const [agentesLista, setAgentesLista] = useState([]);

    const agentesFiltrados = agentesLista.filter((agente) =>
    agente.name.toLowerCase().includes(search.toLowerCase())
    )

    function adicionar() {
        const novoAgente = new Agente(name, description, image)
        if (name.trim() == '' || description.trim() == '' || image.trim() == '') {
            console.log("não passou pelo popUp");
            setErro(true)
            setTimeout(() => {
                setErro(false)
            }, 3000)

        } else if( urlValida(image)== false){
            setUrl(true)
            setTimeout(() => {
                setUrl(false)
            }, 3000)
        } else {

            if (!agentesLista.some(agente => agente.name === name)) {
                console.log(" passou pelo popUp");
                console.log('passou pela url');
                // Se não estiver, adicione-o à lista local
                const updatedAgentes = [novoAgente, ...agentesLista];
                setAgentesLista(updatedAgentes);
            }
            setSucesso(true)
            setTimeout(() => {
                setSucesso(false)
            }, 3000)

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
   const urlValida =(image)=> {
        if (image.match(/\.(jpeg|jpg|gif|png)$/) != null) {
            
            return true;
        } else {
            

            return false;
        }
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
        mudar()
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
                        <ButtonsAct bdcor={'#000123'} bkcor={'#3F6BE1'} cor={'#000123'} func={update} text={'Atualizar'} />
                    ) : (
                        <ButtonsAct bdcor={'#FA7115'} bkcor={'rgba(0, 0, 0, 0)'} cor={'#FA7115'} func={adicionar} text={'Excluir'} />
                    )
                }
                {//mensagem de erro

                    erro ? <NavMsg tipo={"erro"} msg={'preecha os campos'} /> : null

                }
                {//mensagem de erro

                    url ? <NavMsg tipo={"erro"} msg={'url inválida'} /> : null

                }
                {//mensagem de erro

                    sucesso ? <NavMsg tipo={"sucesso"} msg={'Parabéns, agente cadastrado com sucesso!'} /> : null

                }
            </div>
            <div style={{ display: div2 ? 'block' : 'none' }} value={div2}>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={'Buscar'}
                />

                <div className={styles.cardsContainer}>

                    {
                        agentesFiltrados.length > 0 ? (
                            agentesFiltrados.map((agente) => (
                                <div className={styles.cards} key={agente.id}>
                                    <CardsAgents nm={agente.name} desc={agente.description} img={agente.image} />
                                    <div className={styles.buttons}>
                                        <Buttons bdcor={'#FA7115'} bkcor={'rgba(0, 0, 0, 0)'} cor={'#FA7115'} func={() => excluir(agente)} text={'Excluir'} />
                                        <Buttons bdcor={'#000123'} bkcor={'#3F6BE1'} cor={'#000123'} func={() => edit(agente.id)} text={'Editar'} />
                                    </div>
                                </div>
                            ))
                        ) : (
                            agentesLista.map((card) => (
                                <div className={styles.cards} key={card.id}>
                                    <CardsAgents nm={card.name} desc={card.description} img={card.image} />
                                    <div className={styles.buttons}>
                                        <Buttons bdcor={'#FA7115'} bkcor={'rgba(0, 0, 0, 0)'} cor={'#FA7115'} func={() => excluir(card)} text={'Excluir'} />
                                        <Buttons bdcor={'#000123'} bkcor={'#3F6BE1'} cor={'#000123'} func={() => edit(card.id)} text={'Editar'} />
                                    </div>
                                </div>

                            ))
                        )
                    }
                </div>

            </div>


        </div>
    )
}

export default page