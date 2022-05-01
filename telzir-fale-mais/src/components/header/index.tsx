import React from "react";
import { Container, Arrow, Title, Aux } from "./styles";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

const Header: React.FC = () =>{
    return(
        <Container>
            <Arrow>
                <KeyboardArrowLeftIcon
                    style={{
                        fontSize: 40,
                        color: '#9900F0'
                    }}
                />                
            </Arrow>
            <Title>
                <h1>Telzir - faleMais</h1>
            </Title>
            <Aux></Aux>
        </Container>
    );
};

export default Header;