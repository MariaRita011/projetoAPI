'use client'

//Importando itens necessários
import React, { useEffect, useState } from 'react'
import styles from './armas.module.css'
import Cards from '@/data/armas';
import ListaAgentes from '@/models/ListaAgentes';
import Agente from '@/models/agente';
import CardsAgents from '../components/cardsAgents/CardsAgents';
import Buttons from '../components/buttons/Buttons';
import ButtonsAct from '../components/buttonsact/ButtonsAct';
import NavMsg from '../components/navmsg/NavMsg';

import Modal from '../components/modal/Modal';
import HeaderDefault from '../components/header/Header';
import { Footer } from '../components/footer/footer';
import Inputs from '../components/inputs/Inputs';

//Criando instância da lista
const listaAgentes = new ListaAgentes();

function page() {

    //Criando os estados necessários
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [search, setSearch] = useState('')
    const [div1, setDiv1] = useState(true)
    const [div2, setDiv2] = useState(false)
    const [flag, setFlag] = useState(0)
    const [editButton, setEditButton] = useState(false)
    const [erro, setErro] = useState(false)
    const [erroDiv2, setErroDiv2] = useState(false)
    const [erro2Div2, setErro2Div2] = useState(false)
    const [url, setUrl] = useState(false)
    const [sucesso, setSucesso] = useState(false)
    const [apiData, setApiData] = useState(null);
    const [agentesLista, setAgentesLista] = useState([]);
    const [showError, setShowError] = useState(false);
    const [agentesFiltrados, setAgentesFiltrados] = useState([]);
    const [abrirModal, setAbrirModal] = useState(null);

    const openModal = (id) => {
        setAbrirModal(id);
    };

    //fechar modal
    const closeModal = () => {
        setAbrirModal(null);
    };

    //Function de input de busca
    function pesquisar() {

        const agentesFiltrados = agentesLista.filter((agente) =>
            agente.name.toLowerCase().includes(search.toLowerCase())
        );

        if (!search) {
            setErroDiv2(true)
            setTimeout(() => {
                setErroDiv2(false)
            }, 2000)
            setAgentesFiltrados(listaAgentes);
        } else if (agentesFiltrados.length == 0) {
            setErro2Div2(true)
            setTimeout(() => {
                setErro2Div2(false)
            }, 2000)
            setAgentesFiltrados(listaAgentes);

        } else {
            setAgentesFiltrados(agentesFiltrados);
        }

    }

    //Function para adicionar um novo agente
    function adicionar() {
        const novoAgente = new Agente(name, description, image)
        if (name.trim() == '' || description.trim() == '' || image.trim() == '') {
            console.log("não passou pelo popUp");
            setErro(true)
            setTimeout(() => {
                setErro(false)
            }, 3000)

        } else if (urlValida(image) == false) {
            setUrl(true)
            setTimeout(() => {
                setUrl(false)
            }, 3000)
        } else {

            if (!agentesLista.some(agente => agente.name === name)) {
                console.log(" passou pelo popUp");
                console.log('passou pela url');
                // Se não estiver, adicione-o à lista local
                const updatedAgentes = [...agentesLista, novoAgente];
                setAgentesLista(updatedAgentes);
            }
            setSucesso(true)
            setTimeout(() => {
                setSucesso(false)
            }, 3000)

            listaAgentes.adicionarAgente(novoAgente);

            limparCampos();
        }
    }
    //Fuction de voltar ao topo da pag
    function btnscroll() {
        window.scrollTo(0, 0);
    }
    //Function rolar a pag para baixo
    function btnscrolldawn() {
        window.scrollTo(0, 9800);
        window.scrollTo(0, 29935);
    }

    //Funciton de limpar campos
    function limparCampos() {
        setName('');
        setDescription('');
        setImage('');
    }

    //Function para tela híbrida
    function mudar() {
        setDiv1(!div1);
        setDiv2(!div2);
    }

    //Function de verificação de url
    const urlValida = (image) => {
        if (image.match(/\.(jpeg|jpg|gif|png)$/) != null) {

            return true;
        } else {


            return false;
        }
    }

    //Function de excluir um agente
    const excluir = (param) => {
        listaAgentes.excluirAgente(param); // Remova o agente da instância compartilhada
        setAgentesLista(listaAgentes.getListaAgentes()); // Puxa a lista para o varivel local que exibe no map
    };

    //Function de editar um agente
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


    //Function de atualizar
    function update() {
        if (name.trim() == '' || description.trim() == '' || image.trim() == '') {
            console.log("não passou pelo popUp");
            setErro(true)
            setTimeout(() => {
                setErro(false)
            }, 3000)

        } else if (urlValida(image) == false) {
            setUrl(true)
            setTimeout(() => {
                setUrl(false)
            }, 3000)
        } else {
            listaAgentes.AtualizarAgente(flag, name, description, image);

            setFlag(0);
            setAgentesLista(listaAgentes.agentes)
            setEditButton(false)
            limparCampos()
            mudar()
        }

    }

    useEffect(() => {

        let ignore = false;

        const CardsFecth = async () => {
            try {
                const dados = await Cards();
                if (!ignore) {
                    setApiData(dados)
                }
            } catch (error) {
                throw error;
            }
        }
        CardsFecth();

        return () => {
            ignore = true;
        };

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

    //Criando HTML
    return (

        <div className={styles.main} >

            <HeaderDefault />


            {/* Tela 1 */}
            <div className={styles.tela1} style={{ display: div1 ? 'block' : 'none' }} value={div1}>
                <button className={styles.mudarPage} onClick={mudar}>mudar</button>

                <h1 className={styles.title}>Cadastre seu agente!</h1>
                <div className={styles.divForm}>


                    <div className={styles.btnscroll} onClick={btnscroll}>🔝</div>


                    <div className={styles.btnscroll2} onClick={btnscrolldawn}>⬇️</div>

                    <div className={styles.divInp}>
                        <div className={styles.sla}>
                            <Inputs type={'text'} valor={name} name={'name'} ph={'Nome do agente'} on={(e) => setName(e.target.value)}/>
                            <Inputs type={'text'} valor={description} name={'description'} ph={'Descrição do agente'} on={(e) => setDescription(e.target.value)}/>
                            <Inputs type={'text'} valor={image} name={'image'} ph={'Imagem do agente'} on={(e) => setImage(e.target.value)}/>

                        </div>

                        <div className={styles.imgCode}>
                            <img className={styles.imgcodeM} width={157} height={157} src='/qrcode_blog.counter-strike.net.png' />
                        </div>

                    </div>
                    <p className={styles.p}>Você pode acessar tambem o site oficial, através do QR code disponibilizado</p>

                    {editButton ? (
                        <ButtonsAct bdcor={'#000123'} bkcor={'#3F6BE1'} cor={'#000123'} func={update} text={'Atualizar'} />
                    ) : (
                        <>
                            <ButtonsAct bdcor={'#FA7115'} bkcor={'rgba(0, 0, 0, 0)'} cor={'#FA7115'} func={adicionar} text={'Adicionar'} />
                            <ButtonsAct bdcor={'#FA7115'} bkcor={'rgba(0, 0, 0, 0)'} cor={'#FA7115'} func={mudar} text={'Mudar'} />
                        </>
                    )}


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
            </div>

            {/* Tela 2 */}
            <div className={styles.main2} style={{ display: div2 ? 'block' : 'none' }} value={div2}>

                <div className={styles.searchDiv}>

                    <div className={styles.btnscroll} onClick={btnscroll}>🔝</div>


                    <div className={styles.btnscroll2} onClick={btnscrolldawn}>⬇️</div>
                </div>

                <div className={styles.divInput}>
                    <input className={styles.searchInput}
                        type="text"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                        placeholder={'Digite Aqui'}
                    />
                    <ButtonsAct bdcor={'#FA7115'} bkcor={'rgba(0, 0, 0, 0)'} cor={'#FA7115'} func={pesquisar} text={'Buscar'} />
                    <ButtonsAct bdcor={'rgba(0, 0, 0, 0)'} bkcor={'#FA7115'} cor={'black'} func={mudar} text={'Voltar'} />

                </div>

                {
                    erroDiv2 ? <NavMsg tipo={"erro"} msg={'Digite um agente!'} /> : null
                }

                {
                    erro2Div2 ? <NavMsg tipo={"erro"} msg={'Agente não encontrado!'} /> : null
                }

                <div className={styles.cardsContainer}>

                    {
                        agentesFiltrados.length > 0 ? (
                            agentesFiltrados.map((agente) => (
                                <div onClick={() => openModal(agente.id)} id={agente.id} className={styles.cards} key={agente.id}>
                                    <CardsAgents nm={agente.name} img={agente.image} />

                                </div>
                            ))
                        ) : (
                            agentesLista.map((card) => (
                                <div onClick={() => openModal(card.id)} id={card.id} className={styles.cards} key={card.id}>
                                    <CardsAgents nm={card.name} desc={card.description} img={card.image} />

                                </div>

                            ))
                        )
                    }
                    <div className={styles.modalContainer}>
                        {
                            //modal
                            abrirModal ? (
                                agentesLista.map((agente) => (
                                    agente.id == abrirModal && (
                                        <div className={styles.modal} key={agente.id}>

                                            <Modal nome={agente.name} foto={agente.image} descricao={agente.description} fechar={closeModal} oc={() => excluir(agente)} on={() => edit(agente.id)} />

                                        </div>)))
                            ) : null
                        }
                    </div>
                </div>



            </div>
            <Footer />
        </div>
    )
}

export default page