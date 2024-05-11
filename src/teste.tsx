import styled from 'styled-components'

type BotaoProps = {
    principal: boolean
    fontSize?:string
}

const Botao = styled.button <BotaoProps>`
    background-color: ${(props) => (props.principal ? 'green' : 'blue')};
    font-size: ${(props) => props.fontSize || '16px' }
`

const BotaoPerigo = styled(Botao)`
    background-color: red;
    color: #fff;
`

function Teste () {
    return(
        <>
        <div>
            <h1>Olá</h1>
            <Botao  principal>
                Clique aqui
            </Botao>
            <Botao fontSize="14px" principal = {false}>
                nao clieque aqui
            </Botao>
            <BotaoPerigo principal={false}>Não clique aqui</BotaoPerigo>
        </div>
        </>
        )
}

export default Teste