import styled from "styled-components";

export const ContainerHome =styled.div`
    display: flex;
    flex: 1;
    height: 100vh;
    flex-direction: column;    
    align-items: center;
    justify-content: flex-start;
    background: ${props => props.theme["gray-600"]};
`