import React from "react";
import { Container } from "./styles";
import Header from "../../components/header";

const Home: React.FC = () =>{
    return(
        <Container>
            <Header showArrow={false}/>
            <h1>Home Page</h1>
        </Container>
    );
};

export default Home;