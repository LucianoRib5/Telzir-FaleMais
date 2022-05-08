import * as services from "../../services/apiRequestAxios";
import React, { useState, useEffect } from "react";
import { Container, FormContainer, ButtonContainer, TextContainer } from "./styles";
import Header from "../../components/header/index";
import Button from "../../components/button";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { Plan, Area } from "../../constants/types/types";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormPage: React.FC = () =>{

    const navigate = useNavigate();
    const { form, onChange } = useForm({
        source: "",
        destiny: "",
        minutes: "",
        plan: ""
    });
    
    const [plans, setPlans] = useState<[Plan]>();
    const [areas, setAreas] = useState<[Area]>();

    const getAllPlans = (): void =>{
        services.request.get("/plans")
        .then(res => setPlans(res.data))
        .catch(err => console.log(err.response.data))
    };

    const getAllAreaCodes = (): void =>{
        services.request.get("/areas")
        .then(res => setAreas(res.data))
        .catch(err => console.log(err.response.data));
    };

    const createResults = (e: React.FormEvent): void =>{
        e.preventDefault();

        form.source !== form.destiny ?
            services.request.post("/result", {
                source: form.source,
                destiny: form.destiny,
                time: Number(form.minutes),
                plan: form.plan
            })
            .then(() => navigate("/formulario/resultado"))
            .catch(err => console.log(err.response.data))
        : toast.error("Os DDDs devem ser diferentes !");
    };

    useEffect(() =>{
        getAllAreaCodes();
    }, []);

    useEffect(() =>{
        getAllPlans();
    }, []);

    return (
        <Container>
            <ToastContainer theme={"colored"}/>
            <Header funct={() => navigate("/")}/>
            <TextContainer>
                <p>Preencha os campos abaixo</p>            
            </TextContainer>
            <FormContainer onSubmit={createResults}>
                <select 
                    name="source" 
                    onChange={onChange} 
                    value={form.source} 
                    required
                >
                    <option value= "">Selecione o DDD de origem</option>
                    {areas?.map(area =>
                        <option 
                            key={area.id} 
                            value={area.area_code}
                        >
                            {`DDD 0${area.area_code}`}
                        </option>    
                    )}
                </select>

                <select 
                    name="destiny"
                    onChange={onChange}
                    value={form.destiny} 
                    required
                >
                    <option value="">Selecione o DDD de destino</option>
                    {areas?.map(area =>
                        <option 
                            key={area.id} 
                            value={area.area_code}
                        >
                            {`DDD 0${area.area_code}`}
                        </option>    
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
                    {plans?.map(plan =>
                        <option 
                            key={plan.id} 
                            value={plan.plan_name}
                        >
                            {plan.plan_name}
                        </option>
                    )}
                </select>
                <ButtonContainer>
                  <Button text="CALCULAR"/>
                </ButtonContainer>
            </FormContainer>
        </Container>
    );
};

export default FormPage;