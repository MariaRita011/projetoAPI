import styles from './paginahome.module.css'
import { BsSteam } from "react-icons/bs";
import { FaTwitch } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import CardPageHome from '../components/cardpagehome/CardPageHome';

const Home = () => {

    return (
        <div className={styles.parallax}>
            <link href="https://fonts.googleapis.com/css?family=Oswald:300,400" rel="stylesheet"></link>
            <h1 className={styles.titulo}>CSGO AGENTES</h1>
            <div className={styles.mainContent}>
                <div className={styles.navBarMain}>
                    <div className={styles.iconsdiv}>
                        <a href="https://store.steampowered.com/app/730/CounterStrike_2/?l=portuguese" target="_blank">< BsSteam className={styles.icons} /></a>
                        <a href="https://www.twitch.tv/directory/category/counter-strike" target="_blank">< FaTwitch className={styles.icons} /></a>
                        <a href="https://twitter.com/csgo" target="_blank">< BsTwitter className={styles.icons} /></a>
                        <a href="https://www.facebook.com/CounterStrike" target="_blank">< FaFacebookF className={styles.icons} /></a>
                        <a href="https://www.instagram.com/csgo_dev/" target="_blank">< BsInstagram className={styles.icons} /></a>
                    </div>
                    <div>
                        <p><a className={styles.link} href="https://blog.counter-strike.net" target="_blank">Página Oficial</a></p>
                    </div>
                </div>
                <div className={styles.textDiv}>
                    <div className={styles.textsDivs}>
                        <h1 className={styles.title}>O que é CsGo</h1>
                        <p className={styles.text}>Counter-Strike: Global Offensive foi um jogo online desenvolvido pela Valve Corporation e pela Hidden Path Entertainment, sendo uma sequência de Counter-Strike: Source. É o quarto título principal da franquia.</p>
                    </div>
                    <div className={styles.textsDivs}>
                        <CardPageHome titulo={'Para que serve nosso site?'} p={'Se você é um verdadeiro jogador de CSGO e quer desfrutar mais afundo de nossas skins de agentes, dar novas ideias de novas skins para serem adicionadas no jogo ou até mesmo mudar um pouco as skins já existentes? Você veio ao lugar certo! Na CSGO Agentes é possível encontrar uma personalização ilimitada de agentes. Gostou da ideia? Clique logo abaixo e confira tudo!'} />
                    </div>
                    <button className={styles.button}>Confira Aqui!</button>
                </div>
            </div>
        </div>

    )
}

export default Home;