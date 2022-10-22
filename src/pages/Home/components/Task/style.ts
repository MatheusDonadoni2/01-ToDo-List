import styled from "styled-components";

export const ContainerTask = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center;
    :not(:first-child){
        margin-top: 0.75rem;
    };

    width: 100%;
    height: 4.5rem;

    border-radius: 8px;


    background: ${props => props.theme["gray-500"]};

    .check{ 
        display: block;
        width: 1.09rem;
        height: 1.09rem;
        border-radius: 9999px;
        margin-top: 1.24rem;
    }

    .no-check{
        
        border: 2px solid ${props => props.theme["blue"]};
    }
    .no-check:hover{
        background: ${props => props.theme["gray-900"]};
        border: 2px solid ${props => props.theme["blue-dark"]};
    }
    .checked{
        border: none;
        background: ${props => props.theme["purple-dark"]};
        i{         
            display: flex;            
            justify-content: center;
            margin-top: 0.06rem;
            color:${props => props.theme["gray-100"]};            
        }               
    }
    .checked:hover{
        background: ${props => props.theme["purple"]};
    }    
    
    span{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        
        height: 100%;
        width: 3.25rem;
    }
    .trash {
        display: flex;                
        align-items: center;
        justify-content: center;
        height: 1.5rem;
        width: 1.5rem;
        margin-top: 1rem;
        padding: 0.32rem;
        
        color: ${props => props.theme["gray-300"]};
    }
    .trash :hover{
        background-color: ${props => props.theme["gray-400"]};
        color: ${props => props.theme["danger"]};
    }


    p {
        display:flex;
        flex: 1;
        color: ${props => props.theme["gray-100"]};
        font-size: 0.875rem;


    }

    .text-check{
        color: ${props => props.theme["gray-300"]};
        text-decoration: line-through;
    }

`