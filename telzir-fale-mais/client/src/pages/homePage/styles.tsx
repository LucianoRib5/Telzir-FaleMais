import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;

export const BodyContainer = styled.body`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 40vh;
    width: 95%;
    background-color: #CAB8FF;
    margin-top: 2rem;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: 1rem;
`;
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    width: 95%;
`;

export const IconInfo = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 20%;
    width: 95%;
`;

export const Text = styled.div`
    height: 80%;    
    width: 95%;
`;
