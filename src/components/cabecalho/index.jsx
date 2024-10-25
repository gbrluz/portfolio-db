import styled from "styled-components";
import logo from '../../assets/logoDB.svg';
import GitHub from '../../assets/gitHub.svg';
import Linkedin from '../../assets/linkedin.svg';
import Curriculo from '../../assets/GABRIEL_LUZ.pdf';
import { Link  } from 'react-router-dom';

const Background = styled.div`
    background-color: #BEE7F9;
    width: 100%;
    height: 87px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 50px 0px 50px;
    position: fixed;

    @media (max-width: 662px) {
        padding: 0px 20px 0px 20px;
    }

    @media (max-width: 584px) {
        padding: 10px 10px 10px 10px;
        justify-content: space-around;
    } 
`
const Imagem = styled.img`
    &:hover {
        cursor: pointer;
    }
`

const Menu = styled.div`
    display: flex;
    gap: 50px;

    @media (max-width: 584px) {
        gap: 10px;
    }
`

const LogoEstilizada = styled.img`
    &:hover {
        cursor: pointer;
    }

    @media (max-width: 584px) {
        display: none;
    }

`

const Lista = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-between;
    gap: 50px;

    @media (max-width: 496px) {
        gap: 25px;
    } 
`

const Itens = styled.li`
    font-family: ${props => props.fontFamily || 'Supermolot Bold'};
    font-size: 18px;
    font-weight: 400;

    &:hover {
        cursor: pointer;
    }
`


function Cabecalho(){
    return(
        <Background>
            <Menu> 
                <Link to={"https://db.tec.br/"} target="_blank">
                    <LogoEstilizada src={logo} alt="logo" />
                </Link>
                <Lista>
                    <Link to={"/"}> 
                        <Itens>Sobre</Itens>
                    </Link>

                    <Link to={Curriculo} target="_blank">
                        <Itens>Curriculo</Itens>
                    </Link>

                    <Link to={"projetos"}>
                        <Itens>Projetos</Itens>
                    </Link>
                </Lista>
            </Menu>
            <Menu>
                <Link to={"https://github.com/gbrluz"} target="_blank">
                    <Imagem src={GitHub} alt="Link GitHub"/>
                </Link>
                <Link to={"https://www.linkedin.com/in/gabrielhsml/"} target="_blank"> 
                    <Imagem src={Linkedin} alt="Link Linkedin"/>
                </Link>
            </Menu>
        </Background>
    )
}

export default Cabecalho;