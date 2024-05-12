import Title from "../../components/title"
import { Projeto } from "../../components/Projeto"
import { ListaProjetos } from "./styled"

const Projetos = () => (
    <section>
        <Title fontSize={16}>
            Projetos
        </Title>
        <ListaProjetos>
            <li>
                <Projeto></Projeto>
            </li>
            <li>
                <Projeto></Projeto>
            </li>
            <li>
                <Projeto></Projeto>
            </li>
            <li>
                <Projeto></Projeto>
            </li>
            <li>
                <Projeto></Projeto>
            </li>
            <li>
                <Projeto></Projeto>
            </li>
            <li>
                <Projeto></Projeto>
            </li>
            <li>
                <Projeto></Projeto>
            </li>
        </ListaProjetos>
    </section>
)

export default Projetos