import styled from "styled-components";

const ContainerSobre = styled.div`
    min-height: 48vh;
    max-width: 660px;
    text-align: justify;
`

const Texto = styled.h1`
    font-size: ${props => props.TamFonte || '18px'};
    font-Weight: ${props => props.Weight || '1px'};
    color: #292929;
    font-family: ${props => props.fontFamily || 'Supermolot Bold'};
`


function Sobre(){
    return(
        <ContainerSobre>
            <Texto TamFonte={'36px'} Weight={'400'}>
                Sobre mim
            </Texto>
            <Texto TamFonte={'18px'} Weight={'300'} fontFamily={"Roboto Flex"}>
                Iniciei minha carreira como desenvolvedor back-end, em 2022. Comecei como traaine em uma empresa de Porto Alegre e logo após fui promovido a desenvolvedor full-stack em um cliente, onde atuei por mais de 1 ano.
                <br />
                Atualmente estou no último semestre do curso de Ciência da computação. Pretendo seguir na area de Analista de Qualidade.
                <br />
            </Texto>
            
        </ContainerSobre>
    )
}

export default Sobre;