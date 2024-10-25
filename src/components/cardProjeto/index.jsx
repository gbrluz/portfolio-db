import { Link } from "react-router-dom";
import styled from "styled-components";

const ContainerCardProjeto = styled.div`
    background-color: #F5F5F5;
    border-radius: 8px;
    width: 330px;
    height: 488px;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);

`

const Imagem = styled.img`
    width: 100%;
    height: 40%;
    object-fit: cover;
    border-radius: 8px 8px 0px 0px;
`

const Titulo = styled.h1`
    font-size: 32px;
    font-Weight: 400;
    color: #292929;
    font-family: ${props => props.fontFamily || 'Supermolot Bold'};
`

const Tecnologias = styled.div`
    font-size: 14px;
    font-Weight: 400;
    color: #ED177D;
    min-height: 42px;
    font-family: ${props => props.fontFamily || 'Supermolot Bold'};
`

const Descricao = styled.div`
    font-size: 16px;
    font-Weight: 300;
    color: #292929;
    min-height: 133px !important;
    font-family: ${props => props.fontFamily || 'Supermolot Bold'};
`

const Botao = styled.button`
    font-size: 18px;
    font-Weight: 400;
    color: #FFFFFF;
    background-color: #201F53;
    width: 274px;
    border-radius: 8px;
    height: 44px;
    font-family: ${props => props.fontFamily || 'Supermolot Bold'};
`

const Padding = styled.div`
    padding: 5px 10px 18px 10px;
`


function CardProjeto({imagem, titulo, tecnologias, descricao, link}){
    return(
        <ContainerCardProjeto>
            <Imagem src={imagem} alt="imagem do projeto" />
            <Padding> 
                <Titulo> {titulo} </Titulo>
                <Tecnologias> {tecnologias} </Tecnologias>
                <Descricao fontFamily={"Roboto Flex"}> {descricao} </Descricao>
                <Link to={link} target="_blank" style={{ display: 'flex', justifyContent: 'center' }}>
                    <Botao>Acessar</Botao>
                </Link>
            </Padding>
        </ContainerCardProjeto>
    )
}

export default CardProjeto;