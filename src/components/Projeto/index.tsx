import Paragrafo from "../paragrafo";
import Title from "../title";
import { Card, LinkBotao } from "./styles";



export const Projeto = () => (
    <Card>
        <Title>
            Projeto Lista de tarefas
        </Title>
        <Paragrafo tipo="secundario">Lista de atrefas feita com vueJS</Paragrafo>
        <LinkBotao>Visulizar</LinkBotao>
    </Card>
)
