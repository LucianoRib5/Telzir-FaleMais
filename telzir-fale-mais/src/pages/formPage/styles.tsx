import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    /* margin: 5rem 0 0 0; */
    gap: 1rem;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    height: 15vh;
    width: 100%;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0 0 0;
`;

export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    height: 15vh;
`;