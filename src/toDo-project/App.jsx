import React from 'react'
import {InputFile} from "./components/InputFile.jsx";
import {TodoCreation} from "./components/TodoCreation.jsx";

export const App = () => {
    return (
        <div className="todo-app">
            <TodoCreation/>
        </div>
    )
}
