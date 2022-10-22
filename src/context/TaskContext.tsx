import { useEffect } from "react";
import { createContext, ReactNode, useState } from "react";

interface CreateTask{
    id:string
    task:string
    check:boolean
}

interface TaskContextProviderProps {
    children: ReactNode
}

interface TaskContextType {
    tasks: CreateTask[]
    createNewTask: (data:CreateTask) => void
    finishTask:(id:string) => void
    deleteTask:(id:string) => void
    tasksFinishedCount:number
}

export const TaskContext = createContext({} as TaskContextType)

export function TaskContextProvider({children}:TaskContextProviderProps){
    const [tasks, setTask] = useState<CreateTask[]>([]);
    const [tasksFinishedCount, setTasksFinishedCount] = useState(0);

    useEffect(() =>{
        countTaskFinished()
    },[
        tasks
    ])

    function createNewTask(data:CreateTask){
        setTask((state) => [...state, data])
    }

    function countTaskFinished(){
        const count = tasks.filter((task) => task.check)
        setTasksFinishedCount(count.length)
    }

    function finishTask(id:string){
        setTask((state) =>
            state.map((task) => {
                if (task.id === id) {                    
                    return { ...task, check: !task.check }
                    
                } else {
                    return task
                }
            }),
        )
    }

    function deleteTask(id:string){
        setTask((state) =>
            state.filter((task) =>                
                task.id !== id
            )            
        )
    }

    return(
        <TaskContext.Provider
            value={{
                tasks,
                createNewTask,
                finishTask,
                deleteTask,
                tasksFinishedCount
            }}
        >
            {children}  
        </TaskContext.Provider>
    )
}