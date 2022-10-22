import {Check, PlusCircle} from 'phosphor-react'
import { useContext, useState } from 'react';
import {TaskContext} from '../../../../context/TaskContext'
import { ContainerNewTask } from "./style";

export function NewTask(){
    const { tasks, createNewTask } = useContext(TaskContext)
    const [newTask, setNewTask] = useState<string >('')

    function handleNewTask(){
        setNewTask(event?.target.value)
    }

    function handleCreateNewTask(){
        const data = {
            id: new Date().toISOString(),
            task:newTask,
            check:false
        }
        createNewTask(data)
    }

    return(
        <ContainerNewTask>
            <input 
                type="text" 
                name='task'
                onChange={handleNewTask}
                placeholder='Adicione uma nova tarefa'                    
            />
            <button 
                onClick={handleCreateNewTask}
                type="submit" 
            >
                Criar 
                <PlusCircle size={16}  />
            </button>
        </ContainerNewTask>
    )    
}