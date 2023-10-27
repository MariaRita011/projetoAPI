import styles from './paginahome.module.css'

const Home = () => {

    return (
        <div className={styles.parallax}>
            <div className={styles.mainContent}>
                <h1 className={styles.titulo}>CSGO AGENTES</h1>
                <div className={styles.preto}>
                    <h2 className={styles.sub}>COMPRE E VENDA SUAS SKINS</h2>
                   
                    <div className={styles.texto}>
                        <h2 className={styles.vasco}>Bem-vindo à CSGO Agentes - Sua destinação de Personalização de Skins.</h2>

                            <h2 className={styles.vasco1}>Você é um verdadeiro jogador de CSGO e está buscando uma maneira de dar à sua experiência de jogo uma reviravolta incrível? Você veio ao lugar certo.</h2>
                            <h2 className={styles.vasco2}>Na CSGO Agentes, estamos comprometidos em oferecer a você uma ampla gama de skins personalizadas e opções de personalização exclusivas para os agentes do jogo, como por exemplo:
                            Personalização limitada, compra conveniente, experiência premium e atendimento ao cliente excepcional.</h2>
                            <h2 className={styles.vasco3}>Então por que esperar? Explore nossa loja, escolha ou personalize suas skins de agentes favoritas e dê um toque único ao seu jogo CSGO. Aventure-se no mundo da personalização de skins com a CSGO Agentes e leveseu jogo para o próximo nível!</h2>
                            </div>

                </div>
            </div>

        </div>

    )
}

export default Home;