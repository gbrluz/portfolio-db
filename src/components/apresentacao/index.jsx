import styled from "styled-components";

const ContainerApresentacao = styled.div`
    min-height: 35vh;
`

const Texto = styled.h1`
    font-size: ${props => props.TamFonte || '18px'};
    font-Weight: ${props => props.Weight || '1px'};
    font-family: ${props => props.fontFamily || 'Supermolot Bold'};
    color: #292929;
`


function Apresentacao(){
    return(
        <ContainerApresentacao>
            <Texto TamFonte={'36px'} Weight={'400'}>
                Olá, meu nome é
            </Texto>
            <Texto TamFonte={'80px'} Weight={'700'} fontFamily={'Roboto Flex'}>
                Gabriel Luz
            </Texto>
            <Texto TamFonte={'36px'} Weight={'400'} fontFamily={'Supermolot Regular'}>
                Sou trainne de Quality Assurance na DBServer
            </Texto>
        </ContainerApresentacao>
    )
}

export default Apresentacao;