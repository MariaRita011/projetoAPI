
'use client'
import React, { useState } from "react";
import styles from './sobrenos.module.css';
import Image from "next/image";
import HeaderDefault from "../components/header/Header";

import Agente from "@/models/agente";
import { Footer } from "../components/footer/footer";


export default function SobreNos() {
    const [renderizar, setRenderizar] = useState(false);
    const [conteudo, setConteudo] = useState(""); // Use um estado para o conteúdo
    const [description, setDescription] = useState(""); // Use um estado para a descrição
    const [image, setImage] = useState(""); // Use um estado para a descrição

    function Agente1() {
        setRenderizar(true);
        setConteudo("Giulia");
        setDescription("Aluna de desenvolvimento de sistemas, cursando  seu primeiro ano ");
        setImage("/giulia.jpg")
    }

    function Agente2() {
        setRenderizar(true);
        setConteudo("Lívia");
        setDescription("Aluna de desenvolvimento de sistemas, cursando seu primeiro ano");
        setImage("/liviA.jpg")
    }

    function Agente3() {
        setRenderizar(true);
        setConteudo("Manuela");
        setDescription("Aluna de desenvolvimento de sistemas, cursando seu primeiro ano");
        setImage("/manuela.jpg")
    }

    function Agente4() {
        setRenderizar(true);
        setConteudo("Cancian");
        setDescription("Aluna de desenvolvimento de sistemas, cursando seu primeiro ano");
        setImage("/cancian2.jpg")
    }

    function Agente5() {
        setRenderizar(true);
        setConteudo("Maria rita");
        setDescription("Aluna de desenvolvimento de sistemas, cursando  seu primeiro ano");
        setImage("/maria rita.jpg")
    }

    function Agente6() {
        setRenderizar(true);
        setConteudo("Nickolas");
        setDescription("Aluno de desenvolvimento de sistemas, cursando  seu primeiro ano");
        setImage("/nicolas.jpg")
    }

    return (
        <div className={styles.divMain}>
            <HeaderDefault />

            {/* <h1 className={styles.h1}>Nossos Agentes</h1> */}

            <div className={styles.container}>

                <div className={styles.btnTodos}>
                    <button className={styles.butao} onClick={Agente1}> ⚔️ Giulia</button><br />
                    <button className={styles.butao} onClick={Agente2}>⚔️ Lívia</button><br />
                    <button className={styles.butao} onClick={Agente3}>⚔️ Manuela</button><br />
                    <button className={styles.butao} onClick={Agente4}>⚔️ Cancian</button><br />
                    <button className={styles.butao} onClick={Agente5}>⚔️ Maria Rita</button><br />
                    <button className={styles.butao} onClick={Agente6}>⚔️ Nicolas</button><br />
                </div>
                {renderizar && (
                    <div className={styles.ladoDireito}>


                        <Image className={styles.image} src={image} width={200} height={200} />
                        <div className={styles.teste}>
                            <h1 className={styles.nome}>{conteudo}</h1>
                            <p className={styles.p}> {description}</p>
                        </div>
                    </div>
                )}
            </div>
            <div className={styles.engenhocas}>

<div className={styles.footer}>
</div>
                <Footer/> 
            </div>
        </div>
    );
}

