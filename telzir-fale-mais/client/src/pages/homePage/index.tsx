import React from "react";
import { Container, BodyContainer, ButtonContainer, IconInfo, Text } from "./styles";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Header from "../../components/header";
import Button from "../../components/button";
import { Link } from "react-router-dom";

const Home: React.FC = () =>{
    return(
        <Container>
            <Header showArrow={false}/>
            <BodyContainer>
                <IconInfo>
                    <HelpOutlineIcon
                        style={{
                            fontSize: 30,
                            color: '#9900F0'
                        }}
                    />
                </IconInfo>
                <Text>
                    <p>
                        Está é uma página da empresa de telefonia Telzir, especializada em 
                        chamadas de longa distância nacional, com um único intuíto: Informar
                        aos seus clientes de forma clara e transparente, quanto será
                        a vantagem de adquirir um dos nossos planos. 
                    </p>
                </Text>
            </BodyContainer>
            <ButtonContainer>
                <Link to="/formulario">
                    <Button text="CONFERIR"/>
                </Link>
            </ButtonContainer>
        </Container>
    );
};

export default Home;