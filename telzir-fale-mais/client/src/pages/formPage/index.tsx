import React from "react";
import { Container, FormContainer, ButtonContainer, TextContainer } from "./styles";
import Header from "../../components/header/index";
import Button from "../../components/button";
import useForm from "../../hooks/useForm";

const FormPage: React.FC = () =>{

    const { form, onChange } = useForm({
        source: "",
        destiny: "",
        minutes: "",
        plan: ""
    });

    const origins: number[] = [11, 16, 17, 18];
    const plans: string[] = [
        'FaleMais 30',
        'FaleMais 60',
        'FaleMais 120'
    ];

    const print = (e: React.FormEvent) =>{
        e.preventDefault();
        alert("Teste!")
        console.log(
            form
        )
    };

    return (
        <Container>
            <Header/>
            <TextContainer>
                <p>Preencha os campos abaixo</p>                
            </TextContainer>
            <FormContainer onSubmit={print}>
                <select 
                    name="source" 
                    onChange={onChange} 
                    value={form.source} 
                    required
                >
                    <option value= "">Selecione o DDD de origem</option>
                    {origins.map(option =>
                        <option key={option} value={option}>{"DDD "}0{option}</option>    
                    )}
                </select>

                <select 
                    name="destiny"
                    onChange={onChange}
                    value={form.destiny} 
                    required
                >
                    <option value="">Selecione o DDD de destino</option>
                    {origins.map(option =>
                        <option key={option} value={option}>{"DDD "}0{option}</option>    
                    )}
                </select>
                
                <input 
                    name="minutes"
                    onChange={onChange}
                    value={form.minutes}
                    placeholder="Duração em minutos" 
                    type={"number"} 
                    min="1" 
                    required
                />

                <select 
                    name="plan"
                    onChange={onChange}
                    value={form.plan} 
                    required
                >
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