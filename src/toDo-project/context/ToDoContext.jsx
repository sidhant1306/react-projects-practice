import {createContext, useContext} from "react";

export const todoCtx = createContext({
    todos:[
        {
            id : 1,
            todo : 'todomsg',
            completed : false,
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {},
})

export const ContextProvider = todoCtx.Provider;

const useTodoCtx = () => {
    return useContext(todoCtx); // Now it's inside a function!
}
export default useTodoCtx;

