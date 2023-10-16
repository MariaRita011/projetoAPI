'use client'

import React, { useEffect, useState } from 'react'
import Cards from '@/data/armas';
import styles from './armas.module.css'

import Image from 'next/image';
function page() {

    const [apiData, setApiData] = useState('');
    const [language, setLanguage] = useState("portugues");

    function lingua() {
        language == 'portugues' ? setLanguage('ingles') : setLanguage('portugues')
        console.log(language);
    }


    useEffect(() => {
        const CardsFecth = async () => {
            try {
                const dados = await Cards(language);
                setApiData(dados)
                console.log(dados);
            } catch (error) {
                throw error;
            }
        }
        CardsFecth();
    }, [language])

    return (
        <div className={styles.main}>
            <button onClick={lingua}>{language}</button>

            <Image  className={styles.image} src={'/image (2).png'} width={1495} height={600}/>
            <h2>Teste</h2>
            <div className={styles.container}>
                {
                    apiData ? (
                        apiData.map((card) => (
                            <div className={styles.card} key={card.id}>
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