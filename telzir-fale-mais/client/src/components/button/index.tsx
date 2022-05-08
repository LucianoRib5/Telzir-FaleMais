import React from "react";
import { Container } from "./styles";
import { Props } from "../../constants/types/types";

const Button: React.FC<Props> = ({text, funct}) =>{
    return(
        <Container onClick={funct}>
            <p>{text}</p>
        </Container>
    );
};

export default Button;