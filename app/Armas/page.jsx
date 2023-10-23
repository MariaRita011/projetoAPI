'use client'

import React, { useEffect, useState } from 'react'
import Cards from '@/data/armas';
import ListaAgentes from '@/models/ListaAgentes';
import Agente from '@/models/agente';

const listaAgentes = new ListaAgentes();

function page() {
/*     'use client';
    import React, { useEffect, useState } from "react";
    import fetchApiData from "../components/apiCaller/fetchApiData";
    import Header from "../components/header/Header";
    import styles from "./aulaAPI.module.css";
    import ListaAgentes from "../../models/ListaAgentes";
    import Agente from "../../models/Agente";
    
    const instanciaLista = new ListaAgentes(); // Crie uma única instância fora do componente
    
    export default function Home() {
      const [listaAgentes, setListaAgentes] = useState([]); // Inicialize com um array vazio
    
      const [apiData, setApiData] = useState(null);
      const [displayName, setDisplayName] = useState("");
      const [bustPortrait, setBustPortrait] = useState("");
      const [description, setDescription] = useState("");
    
      const handleAddAgente = () => {
        const novoAgente = new Agente(displayName, bustPortrait, description);
      
        // Verifique se o agente já está na lista local
        if (!listaAgentes.some(agente => agente.displayName === displayName)) {
          // Se não estiver, adicione-o à lista local
          const updatedAgentes = [...listaAgentes, novoAgente];
          setListaAgentes(updatedAgentes);
        }
      
        // Adicione o agente à instância compartilhada
        instanciaLista.addAgente(novoAgente);
      
        // Limpar os campos do formulário
        setDisplayName("");
        setBustPortrait("");
        setDescription("");
      }; */
    const [nome, setNome] = useState('')
    const [lista, setLista] = useState(listaAgentes.agentes)
    const [descricao, setDescricao] = useState('')
    const [raridade, setRaridade] = useState('')
    const [imagem, setImagem] = useState('')
    const [div1, setDiv1] = useState(true)
    const [div2, setDiv2] = useState(false)
    const [flag, setFlag] = useState(0)
    const [editButton, setEditButton] = useState(false)

    const [apiData, setApiData] = useState(null);
    const [agentesLista, setAgentesLista] = useState([]);

    /*   useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await fetchApiData();
            setApiData(data);
          } catch (error) {
            // Lidar com erros de chamada à API
          }
        };
        fetchData();
      }, []);*/
    
   

    function adicionar() {
        const novoAgente = new Agente(name, description, rarity)
        if (!agentesLista.some(agente => agente.name === name)) {
            // Se não estiver, adicione-o à lista local
            const updatedAgentes = [...agentesLista, novoAgente];
            setAgentesLista(updatedAgentes);
          }
        
          // Adicione o agente à instância compartilhada
          listaAgentes.adicionarAgente(novoAgente);
       
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
    useEffect(() => {
        if (apiData && apiData.dados) {
          apiData.dados.forEach((agenteData) => {
            const novoAgente = new Agente(
              agenteData.name,
              agenteData.description,
              agenteData.rarity
            );
            listaAgentes.adicionarAgente(novoAgente);
          });
    
          // Atualize o estado com a lista de agentes atualizada
          const updatedAgentes = [...listaAgentes, ...listaAgentes.getListaAgentes()]; // Combine os dados da API com os existentes
          setAgentesLista(updatedAgentes);
        }
      }, [apiData]); 

    console.log(listaAgentes.agentes)

    return (
        <div>
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
           <h2>Teste</h2>
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
            </div >

        </div>
    )
}

export default page