'use client'

import React, { useEffect, useState } from 'react'
import styles from './armas.module.css'
import Cards from '@/data/armas';
import ListaAgentes from '@/models/ListaAgentes';
import Agente from '@/models/agente';
import CardsAgents from '../components/cardsAgents/CardsAgents';
import Buttons from '../components/buttons/Buttons';
import ButtonsAct from '../components/buttonsact/ButtonsAct';


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
            const updatedAgentes = [novoAgente, ...agentesLista];
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
        <div className={styles.divMain}>

            <button className={styles.btnChange} onClick={mudar}>mudar</button>
            <div className={styles.Divh1}>
                <h1 className={styles.h1}>Iniciar cadastro</h1>
            </div>
            <div className={styles.divForm} style={{ display: div1 ? 'block' : 'none' }} value={div1}>

                <div className={styles.divInp}>
                    <div className={styles.sla}> 
                    <input className={styles.inputForm}
                        type={"text"}
                        value={name}
                        name={'name'}
                        placeholder={'Nome do agente'}
                        onChange={(e) => setName(e.target.value)} />
                    <input className={styles.inputForm}
                        type={"text"}
                        value={description}
                        name={'description'}
                        placeholder={'Descrição do agente'}
                        onChange={(e) => setDescription(e.target.value)} />
                    <input className={styles.inputForm}
                        type={"text"}
                        value={image}
                        name={'image'}
                        placeholder={'Imagem do agente'}
                        onChange={(e) => setImage(e.target.value)} />

                    </div>

                    <div className={styles.imgCode}>
                        <img className={styles.imgcodeM} width={157} height={157} src='/qrcode_blog.counter-strike.net.png' />
                    </div>

                </div>
                <p className={styles.p}>Você pode acessar tambem o site oficial, através do QR code disponibilizado</p>

                {
                        editButton ? (
                            <ButtonsAct bdcor={'#000123'} bkcor={'#3F6BE1'} cor={'#000123'} func={update} text={'Atualizar'} />
                        ) : (
                            <ButtonsAct bdcor={'#FA7115'} bkcor={'rgba(0, 0, 0, 0)'} cor={'#FA7115'} func={adicionar} text={'Adicionar'} />
                        )
                    }

            </div>
            <div style={{ display: div2 ? 'block' : 'none' }} value={div2}>
                <div className={styles.cardsContainer}>
                    {
                        agentesLista ? (
                            agentesLista.map((card) => (
                                <div className={styles.cards} key={card.id}>
                                    <CardsAgents nm={card.name} desc={card.description} img={card.image} />
                                    <div className={styles.buttons}>
                                        <Buttons bdcor={'#FA7115'} bkcor={'rgba(0, 0, 0, 0)'} cor={'#FA7115'} func={() => excluir(card)} text={'Excluir'} />
                                        <Buttons bdcor={'#000123'} bkcor={'#3F6BE1'} cor={'#000123'} func={() => edit(card.id)} text={'Editar'} />
                                    </div>
                                </div>

                            ))
                        ) :
                            (
                                <p>Carregando..</p>
                            )
                    }
                </div>

            </div>


        </div>

    )
}

export default page