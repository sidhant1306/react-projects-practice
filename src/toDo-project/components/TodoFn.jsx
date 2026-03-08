import React, {useState} from 'react'
import useTodoCtx from "../context/ToDoContext.jsx";

export const TodoFn = ({ todo, toggleComplete, deleteTodo, updateTodo }) => {
    const [Editable, setEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const deleteHandler = () => {
        deleteTodo(todo.id);
    }

    const updateHandler = () => {
        if(Editable) {
            updateTodo(todo.id, {...todo, todo : todoMsg})
        }
        setEditable(!Editable)
    }

    return (
        <div
            className={`todo-item ${todo.completed ? 'todo-item--completed' : ''}`}
        >
            {/* For checkbox*/}
            <input
                className="todo-item__checkbox"
                type = 'checkbox'
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                disabled={Editable}
            />

            {/*To do text  : */}

            <input
                className={`todo-item__text ${todo.completed ? 'todo-item__text--completed' : ''} ${Editable ? 'todo-item__text--editable' : ''}`}
                type = 'text'
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!Editable}
            />
            {/*For editing / updating*/}

            <button
                className={`btn btn--edit ${Editable ? 'btn--edit-save' : ''}`}
                onClick={updateHandler}
                disabled={todo.completed}
            >
                {Editable ? '💾 Save' : '✏️ Edit'}
            </button>


            {/*For deleting*/}
            <button
                className="btn btn--danger"
                onClick={deleteHandler}
            >
                🗑️ Delete
            </button>

        </div>
    )
}
