import { TaskContextProvider } from "../../context/TaskContext";
import { ContainerTasks } from "./components/ContainerTasks";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { ContainerHome } from "./style";

export function Home(){

    return(
        <ContainerHome>
            <Header />
            <TaskContextProvider>
                <NewTask />
                <ContainerTasks/>
            </TaskContextProvider>
        </ContainerHome>
    )
}