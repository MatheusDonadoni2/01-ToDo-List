import styled from "styled-components";

export const ContainerNewTask = styled.div`
    display: flex;
    height: 3.375rem;
    width: 46rem;
    background:transparent;
    margin-top: calc(0px - 1.6875rem);

    gap: 0.5rem;

    input{
        flex:1;
        background: ${props => props.theme["gray-500"]};
        border: 1px solid ${props => props.theme["gray-700"]};
        border-radius: 8px;
        padding: 1rem;

        font-size:1rem;
        color: ${props => props.theme["gray-100"]};

        ::placeholder{
            color: ${props => props.theme["gray-300"]};
        }
        :focus{
            outline: 1px solid ${props => props.theme["purple-dark"]};
        }

    }
    
    button{        
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 5.625rem;
        height: 3.25rem;
        gap: 0.5rem;

        border: none;
        border-radius: 8px;

        cursor: pointer;

        background: ${props => props.theme["blue-dark"]};
        
        color: ${props => props.theme["gray-100"]};
        font-size: 0.875rem;
        font-weight: bold;
        transition: background 0.2s;

    }
    button:hover{
        background: ${props => props.theme["blue"]};
    }
    
`