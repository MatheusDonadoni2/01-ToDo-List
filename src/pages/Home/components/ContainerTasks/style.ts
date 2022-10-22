import styled from "styled-components";

export const MainTaskList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: flex-start;
    overflow:hidden;

    background: ${props => props.theme["gray-600"]};    
    
    width: 46rem;
    margin-top: 4rem;
`
export const HeaderTaskList = styled.header`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    justify-content:space-between;

    background: ${props => props.theme["gray-600"]};    
    width: 100%;
    height: 2.6875rem;

    color: ${props => props.theme["gray-100"]};
`
const TaskInfoDefault = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    color: ${props => props.theme["blue"]};
    font-weight: bold;
    span{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12;
        font-weight: bold;
        width: 1.5625rem;
        height: 1.1875rem;

        border-radius: 12px;

        color: ${props => props.theme["gray-200"]};
        background: ${props => props.theme["gray-400"]};
    }

`  
export const TaskInfoCreated = styled(TaskInfoDefault)`
    color: ${props => props.theme["blue"]};
`  
export const TaskInfoFinished = styled(TaskInfoDefault)`
    color: ${props => props.theme["purple"]};
`  
export const TaskList = styled.main`
    width: 100%;
    height: 100vh;
    overflow-y:scroll;

    margin-bottom: 1.3rem;
    border-top-left-radius:8px; 
    border-top-right-radius:8px;
    border-top: 1px solid ${props => props.theme["gray-400"]};
`
export const InfoNoTasks = styled.div`  
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 4rem;
    color:${props => props.theme["gray-300"]};
    font-weight: bold;
    .text p{
        margin-bottom:1rem;
    }
     
    .sub-text{
        color:${props => props.theme["gray-300"]};
        font-weight: 200;
    }    
    
` 