import styled from "styled-components";
import TextoProjeto from "../components/textoProjeto";
import CardProjeto from "../components/cardProjeto";
import Pessoas  from '../assets/pessoas.jpg';
import Viacep from '../assets/viacep.png'
import Bugbank from '../assets/bugbank.jpg'
import Library from '../assets/library.jpg'
import School from '../assets/school.jpg'

const ContainerProjetos = styled.div`
    min-height: 96vh;
    display:flex;
    flex-direction: column;
    padding: 157px 200px 50px 200px;
    width: 100%;
    gap: 10px;

    @media (max-width: 1410px) {
        padding: 157px 100px 50px 100px; 
    }

    @media (max-width: 866px) {
        padding: 157px 50px 50px 50px; 
    }
`

const GridProjeto = styled.div`
    min-height: 96vh;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 50px;

    @media (max-width: 1198px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 752px) {
        grid-template-columns: 1fr;
        justify-items: center;
    }
        
`


function Projetos(){
    return(
        <ContainerProjetos>
            <TextoProjeto />
            <GridProjeto>
                <CardProjeto 
                    imagem={Viacep} 
                    titulo={'Automação VIACEP'}
                    tecnologias={'Java, RestAssured, Junit'}
                    descricao={'Essa é uma automação de testes na API pública VIACEP que aborda diferentes cenários de entrada e suas respostas.'}
                    link={'https://github.com/gbrluz/automacao-teste-cep'} 
                />

                <CardProjeto 
                    imagem={Bugbank} 
                    titulo={'Automação BugBank'}
                    tecnologias={'Java, Selenium, JUnit'}
                    descricao={'Essa é uma automação de testes no protótipo de banco digital BugBank, onde testamos a funcionalidade dos principais recursos desejados.'}
                    link={'https://github.com/gbrluz/automacao-teste-bugrank'} 
                />

                <CardProjeto 
                    imagem={Pessoas}
                    titulo={'Crud Pessoas'}
                    tecnologias={'Java, Spring Boot, Docker, PostgreSQL, Mockito, MockMvc'}
                    descricao={'Essa é uma API que faz o gerenciamento de pessoas e de endereços que estão relacionados entre si.'}
                    link={'https://github.com/gbrluz/crud-pessoa'}   
                />

                <CardProjeto 
                    imagem={Library} 
                    titulo={'Crud Biblioteca'}
                    tecnologias={'Java, Spring Boot, PostgreSQL, Flyway, FeignClient, Mockito, JUnit'}
                    descricao={'Essa é uma API que faz o gerenciamento completo de uma bibioteca e seus usuários. A aplicação contém várias regras de negócios internas e também validação de ISBN pela API Google Books.'}
                    link={'https://github.com/gbrluz/library-api'}   
                />

                <CardProjeto 
                    imagem={School} 
                    titulo={'Crud Escola'}
                    tecnologias={'Java, Spring Boot, PostgreSQL, Flyway, Mockito, JUnit'}
                    descricao={'Essa é uma API que contém um crud de pessoas e um de endereços que estão relacionados entre si, nele é usado o Java, Spring, JPA e testes com Mockito e MockMvc.'}
                    link={'https://github.com/gbrluz/crud-escola'}   
                />

            </GridProjeto>
        </ContainerProjetos>
    )
}

export default Projetos;