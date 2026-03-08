import React, {useEffect, useState} from 'react'
import useTodoCtx, {ContextProvider} from "../context/ToDoContext.jsx";
import {InputFile} from "./InputFile.jsx";

export const TodoCreation = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos((prev) => [{id : Date.now(), ...todo}, ...prev])
    }
    const updateTodo = (id, todo) => {
        setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
    }
    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
    }

    const toggleComplete = (id) => {
        setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed : !prevTodo.completed} : prevTodo))
    }

    // this useEffect will run when we will load the project on the page :
    // this will help us to get the items from our localStorage(the todos that were previously set in our localStorage)

    useEffect(() => {
        const todoList = JSON.parse(localStorage.getItem("todos"));

        if(todoList && todoList.length > 0) {
            setTodos(todoList);
        }
    }, []);

    // this useEffect will run everytime there is some changes made in the todos
    // this sets the todos in the localStorage everytime we change something in our todos
    useEffect(() => {
        localStorage.setItem('todos' , JSON.stringify(todos));
    }, [todos]);
    return (
        <ContextProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
            <InputFile/>
        </ContextProvider>
    )
}
