
'use client'
import React, { useState } from "react";
import styles from './sobrenos.module.css';
import Image from "next/image";
import HeaderDefault from "../components/header/Header";
import { BsInstagram } from "react-icons/bs";

import Agente from "@/models/agente";
import { Footer } from "../components/footer/footer";


export default function SobreNos() {
    const [renderizar, setRenderizar] = useState(false);
    const [conteudo, setConteudo] = useState(""); // Use um estado para o conteúdo
    const [description, setDescription] = useState(""); // Use um estado para a descrição
    const [image, setImage] = useState(""); // Use um estado para a descrição
    const [insta, setInsta] = useState(""); // Use um estado para a descrição

    function Agente1() {
        setRenderizar(true);
        setConteudo("Giulia");
        setDescription("Meu nome é Giulia Marques, tenho 17 anos. Sou aluna do SENAI cursando Desenvolvimento de Sistemas.Apesar de cursar o técnico na área de exatas eu me identifico muito mais com as humanas, porém o curso de programação me ensinou muitas coisas interessantes.  ");
        setImage("/giulia.jpg")
        setInsta("https://www.instagram.com/giuu.pictures")
    }

    function Agente2() {
        setRenderizar(true);
        setConteudo("Lívia");
        setDescription("Tenho 17 anos, curso o meu primeiro ano no curso de desenvolvimento de sistemas do SENAI, e o segundo ano do ensino médio. Gosto de música, dança e viajar. Pretendo cursar publicidade em propaganda e seguir na área de marketing digital.");
        setImage("/liviA.jpg")
        setInsta("https://www.instagram.com/liviabelao")
    }

    function Agente3() {
        setRenderizar(true);
        setConteudo("Manuela");
        setDescription("Meu nome é Manuela Camargo, tenho 17 anos. Sou aluna do SESI Valinhos e curso Desenvolvimento de Sistemas no SENAI. Gosto de viajar e conhecer lugares novos, não sei ao certo ainda o que eu quero seguir de profissão mas acho que vai ser mais puxado para a área do meu curso.");
        setImage("/manuela.jpg")
        setInsta("https://www.instagram.com/manuxcamargo")
    }

    function Agente4() {
        setRenderizar(true);
        setConteudo("Cancian");
        setDescription("Atualmente, estou cursando um curso de desenvolvimento de sistemas, mergulhando de cabeça no mundo da programação e resolvendo desafios de codificação. Aos meus 17 anos, estou empolgado em aprender e crescer nesse campo em constante evolução.");
        setImage("/cancian2.jpg")
        setInsta("https://www.instagram.com/maria_ecancian")
    }

    function Agente5() {
        setRenderizar(true);
        setConteudo("Maria rita");
        setDescription("Maria Rita é uma estudante de desenvolvimento de sistemas no SENAI, que também se destaca como dançarina. Ela equilibra habilmente sua paixão pela tecnologia com sua expressão artística na dança, servindo de inspiração para aqueles que a conhecem.");
        setImage("/maria rita.jpg")
        setInsta("https://www.instagram.com/_m4rrie")
    }

    function Agente6() {
        setRenderizar(true);
        setConteudo("Nickolas");
        setDescription("Meu nome é Nickolas Lira, tenho 17 anos. curso Desenvolvimento de Sistemas no SENAI e sou aluno do Sesi. Gosto muito  de treinar e ficar com a minha família, acredito que vou fazer faculdade de nutrição.");
        setImage("/nicolas.jpg")
        setInsta("https://www.instagram.com/nickolaslira7")
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
                        <a href={insta} target="blank">< BsInstagram className={styles.icons} /></a>


                        
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

