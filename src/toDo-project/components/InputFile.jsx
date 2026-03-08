import React, {useContext, useState} from 'react'
import useTodoCtx from "../context/ToDoContext.jsx";
import {TodoFn} from "./TodoFn.jsx";

export const InputFile = () => {

    const {todos, toggleComplete, deleteTodo, updateTodo, addTodo} = useTodoCtx()
    const [todoInput, setTodoInput] = useState('');

    // Add new todo
    const add = (e) => {
        e.preventDefault()
        if(!todoInput.trim()) return

        addTodo({todo: todoInput, completed: false});
        setTodoInput('');
    }


    return (
        <div className="todo-container">
            <h1 className="todo-title">To-Do List</h1>

            {/* Add Todo Form */}
            <form className="todo-form" onSubmit={add}>
                <input
                    className="todo-input"
                    type='text'
                    placeholder='Enter todo...'
                    onChange={
                    (e) => setTodoInput(e.target.value)
                }
                    value={todoInput}
                />
                <button className="btn btn--primary" type='submit'>Add</button>
            </form>

            {/* Display Todos */}
            <div className="todo-list">
                {todos.map((todo) => (
                    <TodoFn
                        key={todo.id}
                        todo={todo}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                        updateTodo={updateTodo}
                    />
                ))}
            </div>
        </div>

    )
}
