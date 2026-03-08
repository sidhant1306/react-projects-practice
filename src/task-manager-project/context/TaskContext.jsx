import {createContext, useContext, useEffect, useState} from "react";
import useUContext from "./UserContext.jsx";

const tContext =  createContext();

export const TContextProvider = ({children}) => {
    const [Tasks, setTasks] = useState([]);
    const [currTasks, setCurrTasks] = useState([]);
    const {currUser} = useUContext();


    const createTask = (task) => {
        if(!currUser) return
        setTasks((prev) => [...prev ,{...task, taskId : Date.now(), currUserId : currUser.userId}])
    }

    const deleteTask = (taskId) => {
        const keepTasks = Tasks.filter(task => task.taskId !== taskId);
        setTasks(keepTasks);
        localStorage.setItem('Tasks', JSON.stringify(keepTasks))
    }

    const updateTask = (task) => {
        setTasks((prev) => (prev.map((eachTask) => eachTask.taskId === task.taskId ? {...eachTask, ...task} : eachTask)))
    }

    const filterByCategory = (category) => {
        if (!currUser) return;

        if (category === '') {
            const userTasks = Tasks.filter(
                (task) => task.currUserId === currUser.userId
            );
            setCurrTasks(userTasks);
            return;
        }

        const filtered = Tasks.filter(
            (task) =>
                task.currUserId === currUser.userId &&
                task.category === category
        );
        setCurrTasks(filtered);
    }


    // filtering out the tasks of the current user :
    useEffect(() => {
        if(currUser) {
            const userCurrTasks = Tasks.filter((prev) => prev.currUserId === currUser.userId);
            setCurrTasks(userCurrTasks);
        }
    }, [currUser, Tasks]);


    // getting all the curr tasks from the localStorage :

    useEffect(() => {
        const T = JSON.parse(localStorage.getItem('Tasks') || '[]');
        setTasks(T);
    }, []);

    // adding the new current tasks in the localStorage when changes are made :
    useEffect(() => {
        if(Tasks.length > 0) {
            localStorage.setItem('Tasks', JSON.stringify(Tasks));
        }
    }, [Tasks]);

    return (
        <tContext.Provider value={{
            Tasks,
            createTask,
            deleteTask,
            updateTask,
            filterByCategory,
            currTasks,
            setCurrTasks,
            setTasks,
        }}>
            {children}
        </tContext.Provider>
    )
}

const useTaskContext = () => {
    return useContext(tContext);
}

export default useTaskContext;