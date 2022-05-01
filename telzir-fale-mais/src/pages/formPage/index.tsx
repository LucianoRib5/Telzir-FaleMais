import React from "react";
import { Container, FormContainer, ButtonContainer, TextContainer } from "./styles";
import Header from "../../components/header/index";
import Button from "../../components/button";

const FormPage: React.FC = () =>{

    const origins: number[] = [11, 16, 17, 18];
    const plans: string[] = [
        'FaleMais 30',
        'FaleMais 60',
        'FaleMais 120'
    ];

    const print = (e: React.FormEvent) =>{
        e.preventDefault();
        alert("Teste!")
    };

    return (
        <Container>
            <Header/>
            <TextContainer>
                <p>Preencha os campos abaixo</p>                
            </TextContainer>
            <FormContainer onSubmit={print}>
                <select required>
                    <option value= "">Selecione o DDD de origem</option>
                    {origins.map(option =>
                        <option key={option} value={option}>0{option}</option>    
                    )}
                </select>

                <select required>
                    <option value="">Selecione o DDD de destino</option>
                    {origins.map(option =>
                        <option key={option} value={option}>0{option}</option>    
                    )}
                </select>
                
                <input placeholder="Duração em minutos" type={"number"} min="1" required/>

                <select required>
                    <option value="">Selecione o plano</option>
                    {plans.map(plan =>
                        <option key={plan} value={plan}>{plan}</option>
                    )}
                </select>
                <ButtonContainer>
                  <Button/>
                </ButtonContainer>
            </FormContainer>
        </Container>
    );
};

export default FormPage;