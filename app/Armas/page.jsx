'use client'

import React, { useEffect, useState } from 'react'
import Cards from '@/data/armas';

function page() {

    const [apiData, setApiData] = useState('');

    useEffect(() => {
        const CardsFecth = async () => {
            try {
                const dados = await Cards();
                setApiData(dados)
                console.log(dados);
            } catch (error) {
                throw error;
            }
        }
        CardsFecth();
    }, [])

    return (
        <div>
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