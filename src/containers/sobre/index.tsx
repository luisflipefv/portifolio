import Paragrafo from "../../components/paragrafo";
import Title from "../../components/title";
import { GithubSecao } from './styles';


const Sobre = () => (
    <section>
        <Title fontSize={16}>Sobre mim</Title>
        <Paragrafo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eveniet accusamus officia dolorem facere? Vitae aspernatur rem officiis porro temporibus iure iste consequuntur nihil voluptatibus doloremque? Numquam earum maxime error.</Paragrafo>
        <GithubSecao>
            <img src="https://github-readme-stats.vercel.app/api?username=luisflipefv&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" alt="link de imagem"/>
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=luisflipefv&layout=compact&langs_count=7&theme=dracula" alt="link da imagem"/>
        </GithubSecao>
    </section>
)

export default Sobre