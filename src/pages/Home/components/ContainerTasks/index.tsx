import { useContext } from 'react';
import ClipboardText from '../../../../assets/Clipboard.svg'
import {TaskContext} from '../../../../context/TaskContext'

import { Task } from '../Task';
import { TaskInfoCreated, TaskInfoFinished, HeaderTaskList, MainTaskList, TaskList, InfoNoTasks } from "./style";



export function ContainerTasks(){
    const { tasks, tasksFinishedCount } = useContext(TaskContext)
    return (
        <MainTaskList>
            <HeaderTaskList>
                <TaskInfoCreated>
                    <p>Tarefas criadas</p>
                    <span>{tasks.length}</span>
                </TaskInfoCreated>

                <TaskInfoFinished>
                    <p>Concluídas</p>
                    <span><p>{tasksFinishedCount}</p></span>
                </TaskInfoFinished>
            </HeaderTaskList>                
            <TaskList>  
                {
                    tasks.length > 0?(
                        tasks.map((element) =>{
                            return(
                                <Task
                                    key={element.id}
                                    id={element.id}
                                    task={element.task}
                                    isCheck={element.check}
                                />
                            )
                        })
                    ):(
                        <InfoNoTasks>
                            <img src={ClipboardText} alt="" />                    
                            <p className='text'>Você ainda não tem tarefas cadastradas</p>
                            <p className='sub-text'>Crie tarefas e organize seus itens a fazer</p>
                        </InfoNoTasks>
                    )

                }
            </TaskList>
        </MainTaskList>
    )
}