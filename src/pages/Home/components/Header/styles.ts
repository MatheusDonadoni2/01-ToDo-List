import styled from "styled-components";

export const HeaderContainer = styled.div`
    background-color: ${props => props.theme["gray-700"]};
    width: 100%;
    height: 12.5rem;
    display: flex;
    align-items: center;    
    justify-content: center;
    img{
        width: 7.5rem;
        height: 3rem;
    }
`