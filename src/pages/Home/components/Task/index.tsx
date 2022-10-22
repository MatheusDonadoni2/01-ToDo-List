import { Trash, Check } from "phosphor-react";
import { useContext } from "react";

import check from '../../../../assets/check.svg'
import no_check from '../../../../assets/no-check.svg'
import { TaskContext } from "../../../../context/TaskContext";


import { ContainerTask } from "./style";

interface TaskProps{
    id:string
    task:string
    isCheck?:boolean
}

export function Task({id, task, isCheck}:TaskProps){

    const { finishTask, deleteTask } = useContext(TaskContext)

    function handleFinishTask(){
        finishTask(id)
    }
    function handleDeleteTask(){
        deleteTask(id)
    }

    return (
        <ContainerTask>
            {/* <span><img src= alt=""  /></span> */}
            <span >
                <div 
                    onClick={handleFinishTask}
                    className={isCheck?"check checked":"check no-check"}
                >
                    {isCheck?<i><Check weight={"bold"}/></i>:<i/>}                    
                    
                </div>
            </span>
            <p className={isCheck?"text-check":"text-no-check"}>{task}</p>
            <span >
                <span 
                    onClick={handleDeleteTask}
                    className={"trash"} 
                >
                    <Trash weight={"bold"} size={14}/>
                </span>
            </span>
        </ContainerTask>
    )
}