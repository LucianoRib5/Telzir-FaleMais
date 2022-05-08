import { useState, useEffect } from "react";
import * as services from "../../services/apiRequestAxios";
import Header from "../../components/header";
import { useNavigate } from "react-router-dom";
import { Container, BodyContainer, Title, Text, ButtonContainer, ContainerDiff } from "./styles";
import Button from "../../components/button";
import { Result } from "../../constants/types/types";

const ResultPage: React.FC = () =>{

    const navigate = useNavigate();
    const [result, setResult] = useState<Result>();

    const getResult = (): void =>{
        services.request.get("/result")
        .then(res => setResult(res.data))
        .catch(err => console.log(err.response.data));
    };

    const deleteResult = (): void =>{
        services.request.delete("/result")
        .then(() => navigate("/formulario"))
        .catch(err => console.log(err.response.data));
    };

    useEffect(()=>{
        getResult();
    }, []);

    const difference = Number(result?.res_dont_faleMais) - Number(result?.res_with_faleMais);

    return(
        <Container> 
            <Header funct={deleteResult}/>
            <BodyContainer height={"25vh"}>
                <Title>
                    <p>{`Cliente ${result?.plan_name}`}</p>
                </Title>
                <Text marginTop=".5rem">
                    <p>{`Origem - DDD 0${result?.source}`}</p>
                    <p>{`Destino - DDD 0${result?.destiny}`}</p>
                    <p>{`Tempo - ${result?.time} minutos`}</p>
                    <ContainerDiff>
                        <p style={{color: "#9900F0", fontWeight: "bold", marginRight: ".5rem"}}>|</p>
                        <p> {`Com FaleMais R$${result?.res_with_faleMais.toFixed(2)}`}</p>
                    </ContainerDiff>
                    <ContainerDiff>
                        <p style={{fontWeight: "bold", marginRight: ".5rem"}}>|</p>
                        <p>{`Sem FaleMais R$${result?.res_dont_faleMais.toFixed(2)}`}</p>
                    </ContainerDiff>                    
                </Text>
            </BodyContainer>
            <BodyContainer>
                <Title><h2>Economia</h2></Title>
                <Text marginTop="2rem">
                    <p style={{fontWeight: "bold"}}>
                        {`R$${difference.toFixed(2)}`}
                    </p>
                </Text>
            </BodyContainer>
            <ButtonContainer>
                    <Button text="RECALCULAR" funct={deleteResult}/>
            </ButtonContainer>
        </Container>
    );
};

export default ResultPage;