
'use client'
import React, { useState } from "react";
import styles from './sobrenos.module.css';
import Image from "next/image";

import Agente from "@/models/agente";

export default function SobreNos() {
    const [renderizar, setRenderizar] = useState(false);
    const [conteudo, setConteudo] = useState(""); // Use um estado para o conteúdo
    const [description, setDescription] = useState(""); // Use um estado para a descrição
    const [image, setImage] = useState(""); // Use um estado para a descrição

    function Agente1() {
        setRenderizar(true);
        setConteudo("Giulia");
        setDescription("aluna de desenvolvimento de sistemas");
        setImage("/giulia.jpg")
    }

    function Agente2() {
        setRenderizar(true);
        setConteudo("Lívia");
        setDescription("Aluna de desenvolvimente de sistemas");
        setImage("/liviA.jpg")

    }

    function Agente3() {
        setRenderizar(true);
        setConteudo("Manuela");
        setDescription("Aluna de desenvolvimente de sistemas");
        setImage("/manuela.jpg")
    }

    function Agente4() {
        setRenderizar(true);
        setConteudo("Cancian");
        setDescription("aluna de desenvolvimento de sistemas");
        setImage("/eu linda liinda.jpg")
    }
    

    function Agente5() {
        setRenderizar(true);
        setConteudo("Maria rita");
        setDescription("Aluna de desenvolvimente de sistemas");
    }

    function Agente6() {
        setRenderizar(true);
        setConteudo("Nicolas");
        setDescription("Aluna de desenvolvimente de sistemas");
    }


    

    return (
        <div className={styles.divMain}>
            
        <h1 className={styles.h1}>Nossos Agentes</h1>

        <div className={styles.container}>

            <div className={styles.btnTodos}>
            <button className={styles.butao} onClick={Agente1}> ⚔️ Giulia</button><br />
            <button className={styles.butao}  onClick={Agente2}>⚔️ Lívia</button><br />
            <button className={styles.butao}  onClick={Agente3}>⚔️ Manuela</button><br />
            <button className={styles.butao}  onClick={Agente4}>⚔️ Cancian</button><br />
            <button className={styles.butao}  onClick={Agente5}>⚔️ Maria Rita</button><br />
            <button className={styles.butao}  onClick={Agente6}>⚔️ Nicolas</button><br />
            </div>
            {renderizar && (
                <div className={styles.ladoDireito}>
                    
                  
                    <Image className={styles.image} src={image} width={260} height={140}/>
                    <div className={styles.teste}>
                    <h1 className={styles.nome}>{conteudo}</h1>
                    <p className={styles.p}> {description}</p>
                    </div>
                </div>
            )}
        </div>
        </div>
    );
}

