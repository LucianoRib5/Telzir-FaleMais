import styled from "styled-components";

interface Props {
    height?: string,
    marginTop?: string
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;

export const BodyContainer = styled.body<Props>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: ${props => props.height};
    width: 90%;
    margin-top: 2rem;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    padding: 1rem;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    width: 95%;
`;

export const Title = styled.div`
    display: flex;
    justify-content: start;
    height: 20%;
    width: 95%;
    font-weight: bold;
`;

export const Text = styled.div<Props>`
    height: 80%;    
    width: 95%;
    margin-top: ${props => props.marginTop};
`;

export const ContainerDiff = styled.div`
    display: flex;
`;