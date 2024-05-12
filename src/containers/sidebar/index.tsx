import Title from "../../components/title"
import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/paragrafo"
import { Descricao, BotaoTema, SidebarContainer } from "./styles"

const Sidebar  = () => (
    <aside>
            <SidebarContainer>
                <Avatar></Avatar>
                <Title fontSize={20}>Luis Felipe</Title>
                <Paragrafo tipo="secundario" fontSize={16}>luisflipefv</Paragrafo>
                <Descricao tipo="principal" fontSize={12}>Engenheiro Front-End</Descricao>
                <BotaoTema>Trocar tema</BotaoTema>
            </SidebarContainer>
    </aside>
)

export default Sidebar