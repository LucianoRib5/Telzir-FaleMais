import React from "react";
import { Container, FormContainer } from "./styles";

const Home: React.FC = () =>{

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
            <h1>Telzir-faleMais</h1>
            <FormContainer onSubmit={print}>
                <select required>
                    <option value= "" disabled>Selecione o código de origem</option>
                    {origins.map(option =>
                        <option key={option} value={option}>0{option}</option>    
                    )}
                </select>

                <select required>
                    <option value="" disabled>Selecione o código de destino</option>
                    {origins.map(option =>
                        <option key={option} value={option}>0{option}</option>    
                    )}
                </select>
                
                <input placeholder="Duração em minutos" type={"number"} min="1" required/>

                <select required>
                    <option value="" disabled>Selecione o plano</option>
                    {plans.map(plan =>
                        <option key={plan} value={plan}>{plan}</option>
                    )}
                </select>
                <button
                    style={{
                        background: "#9900F0",
                        color: "#F0FFFF",
                        width: "10rem",
                        height: "4rem",
                        border: "none",
                        borderRadius: "5rem",
                        cursor: "pointer"
                    }}
                >
                    CALCULAR
                </button>
            </FormContainer>
        </Container>
    );
};

export default Home;