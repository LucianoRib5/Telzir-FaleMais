import React from "react";
import { Container, Arrow, Title, Aux } from "./styles";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { Props } from "../../constants/types/types";

const Header: React.FC<Props> = ({showArrow, funct}) =>{
    return(
        <Container>
                <Arrow>
                    {showArrow === false ? null : 
                        <button 
                            onClick={funct}
                            style={{
                                border: "none",
                                background: "none"
                            }}
                        
                        >
                            <KeyboardArrowLeftIcon
                                style={{
                                    fontSize: 40,
                                    color: '#9900F0',
                                    cursor: "pointer"
                                }}
                            />               
                        </button>
                    }
                </Arrow>            
            <Title>
                <h1>Telzir - faleMais</h1>
            </Title>
            <Aux></Aux>
        </Container>
    );
};

export default Header;